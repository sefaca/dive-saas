
import { useState } from "react";
import { Plus, GraduationCap, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ClassSlotForm from "@/components/ClassSlotForm";
import ClassSlotsList from "@/components/ClassSlotsList";
import ClassBooking from "@/components/ClassBooking";
import MyReservations from "@/components/MyReservations";
import ClubSelection from "@/components/ClubSelection";
import ClubClassesView from "@/components/ClubClassesView";
import AIClassCreatorModal from "@/components/AIClassCreatorModal";
import { useAuth } from "@/contexts/AuthContext";
import { usePlayerReservationStatus } from "@/hooks/usePlayerReservationStatus";
import { ClassSlot } from "@/hooks/useClassSlots";

const ClassesPage = () => {
  const [showForm, setShowForm] = useState(false);
  const [showAIModal, setShowAIModal] = useState(false);
  const [editingClassSlot, setEditingClassSlot] = useState<ClassSlot | undefined>();
  const [selectedClubId, setSelectedClubId] = useState<string | null>(null);
  const { isAdmin, user } = useAuth();
  const { data: reservationStatus, isLoading: isLoadingStatus } = usePlayerReservationStatus();

  const handleCloseForm = () => {
    setShowForm(false);
    setEditingClassSlot(undefined);
  };

  const handleEditClassSlot = (classSlot: ClassSlot) => {
    setEditingClassSlot(classSlot);
    setShowForm(true);
  };

  const handleCreateNew = () => {
    setEditingClassSlot(undefined);
    setShowForm(true);
  };

  const handleClubSelect = (clubId: string) => {
    setSelectedClubId(clubId);
  };

  const handleBackToClubSelection = () => {
    setSelectedClubId(null);
  };

  // Show admin form
  if (showForm && isAdmin) {
    return (
      <div className="space-y-4 sm:space-y-6 p-2 sm:p-4">
        <ClassSlotForm classSlot={editingClassSlot} onClose={handleCloseForm} />
      </div>
    );
  }

  // Admin view
  if (isAdmin) {
    // Check if user is ivan@gmail.com for AI features
    const isIvanUser = user?.email === 'ivan@gmail.com';

    return (
      <div className="space-y-4 sm:space-y-6 p-2 sm:p-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-ocean-deep to-ocean-tropical bg-clip-text text-transparent">
              Trip Management
            </h1>
            <p className="text-muted-foreground">
              Create and manage dive trips for divers
            </p>
          </div>
          <div className="flex gap-2">
            {isIvanUser && (
              <Button
                onClick={() => setShowAIModal(true)}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Sparkles className="mr-2 h-4 w-4" />
                Create with AI
              </Button>
            )}
            <Button
              onClick={handleCreateNew}
              className="bg-gradient-to-r from-ocean-deep to-ocean-tropical hover:from-ocean-deep/90 hover:to-ocean-tropical/90 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Plus className="mr-2 h-4 w-4" />
              New Trip
            </Button>
          </div>
        </div>
        <ClassSlotsList onEditClassSlot={handleEditClassSlot} />

        {/* AI Class Creator Modal - Only for ivan@gmail.com */}
        {isIvanUser && (
          <AIClassCreatorModal
            isOpen={showAIModal}
            onClose={() => setShowAIModal(false)}
          />
        )}
      </div>
    );
  }

  // Loading diver's reservation status
  if (isLoadingStatus) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-ocean-tropical"></div>
      </div>
    );
  }

  // Diver view - no previous reservations
  if (!reservationStatus?.hasReservations) {
    // If viewing classes for a specific dive center
    if (selectedClubId) {
      return (
        <ClubClassesView
          clubId={selectedClubId}
          onBack={handleBackToClubSelection}
        />
      );
    }

    // Show dive center selection
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-ocean-deep to-ocean-tropical bg-clip-text text-transparent">
              Dive Trips
            </h1>
            <p className="text-muted-foreground">
              Find and book dive trips
            </p>
          </div>
        </div>

        <Card className="border-ocean-tropical/20 bg-ocean-tropical/5">
          <CardHeader>
            <CardTitle className="text-ocean-deep flex items-center space-x-2">
              <GraduationCap className="h-5 w-5" />
              <span>Welcome to dive trips!</span>
            </CardTitle>
            <CardDescription className="text-ocean-tropical">
              Explore amazing dive sites with professional instructors. Select a dive center to begin.
            </CardDescription>
          </CardHeader>
        </Card>

        <ClubSelection onClubSelect={handleClubSelect} />
      </div>
    );
  }

  // Diver view - with previous reservations (standard view)
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-ocean-deep to-ocean-tropical bg-clip-text text-transparent">
            Dive Trips
          </h1>
          <p className="text-muted-foreground">
            Find and book dive trips
          </p>
        </div>
      </div>

      <Card className="border-ocean-tropical/20 bg-ocean-tropical/5">
        <CardHeader>
          <CardTitle className="text-ocean-deep flex items-center space-x-2">
            <GraduationCap className="h-5 w-5" />
            <span>Dive Trips</span>
          </CardTitle>
          <CardDescription className="text-ocean-tropical">
            Reserve your spot on available trips and explore amazing dive sites with professional instructors.
          </CardDescription>
        </CardHeader>
      </Card>

      <Tabs defaultValue="available" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="available">Available Trips</TabsTrigger>
          <TabsTrigger value="my-reservations">My Bookings</TabsTrigger>
        </TabsList>
        
        <TabsContent value="available" className="space-y-6">
          <ClassBooking />
        </TabsContent>
        
        <TabsContent value="my-reservations" className="space-y-6">
          <MyReservations />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ClassesPage;
