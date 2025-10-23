import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { useActiveClubs } from "@/hooks/useActiveClubs";
import { TripSheet } from "@/components/trips/TripSheet";
import { CreateTrip } from "@/components/trips/CreateTrip";
import ClassCalendarView from "@/components/ClassCalendarView";
import { ClassFiltersProvider, useClassFilters } from "@/contexts/ClassFiltersContext";
import { ChevronDown, ChevronRight, Plus } from "lucide-react";

type TripView = 'sheet' | 'calendar';

function ScheduledClassesContent() {
  const [activeView, setActiveView] = useState<TripView>('sheet');
  const [isTripsExpanded, setIsTripsExpanded] = useState(true);
  const [showCreateTrip, setShowCreateTrip] = useState(false);
  const { profile } = useAuth();
  const { data: clubs } = useActiveClubs();
  const { filters } = useClassFilters();

  // Get the current club based on user profile
  const currentClub = profile?.club_id ? clubs?.find(c => c.id === profile.club_id) : clubs?.[0];
  const adminClubs = profile?.role === 'admin' && !profile?.club_id ? clubs : [];

  if (!currentClub) {
    return (
      <div className="container mx-auto py-8">
        <Card>
          <CardContent className="py-8">
            <div className="text-center text-muted-foreground">
              You don't have access to any dive center. Contact the administrator.
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <div className="w-56 bg-gray-50 border-r flex flex-col">
        <div className="p-3">
          {/* Trips Collapsible Section */}
          <div>
            <button
              onClick={() => setIsTripsExpanded(!isTripsExpanded)}
              className="w-full flex items-center justify-between px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-100 rounded transition-colors"
            >
              <span>Trips</span>
              {isTripsExpanded ? (
                <ChevronDown className="h-4 w-4" />
              ) : (
                <ChevronRight className="h-4 w-4" />
              )}
            </button>

            {/* Expanded Trips Options */}
            {isTripsExpanded && (
              <div className="ml-3 mt-1 space-y-1">
                <button
                  onClick={() => {
                    setActiveView('sheet');
                    setShowCreateTrip(false);
                  }}
                  className={`w-full text-left px-3 py-2 text-sm rounded transition-colors ${
                    activeView === 'sheet' && !showCreateTrip
                      ? 'bg-blue-600 text-white font-medium'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  Trips Sheets
                </button>

                <button
                  onClick={() => {
                    setActiveView('calendar');
                    setShowCreateTrip(false);
                  }}
                  className={`w-full text-left px-3 py-2 text-sm rounded transition-colors ${
                    activeView === 'calendar' && !showCreateTrip
                      ? 'bg-blue-600 text-white font-medium'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  Calendar
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto bg-white">
        {showCreateTrip ? (
          <CreateTrip />
        ) : activeView === 'sheet' ? (
          <TripSheet />
        ) : (
          <div className="h-full flex flex-col">
            {/* Create Trip Button for Calendar View */}
            <div className="p-4 border-b bg-white">
              <Button
                onClick={() => setShowCreateTrip(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                <Plus className="h-4 w-4 mr-2" />
                Create Trip
              </Button>
            </div>

            {/* Calendar Content */}
            <div className="flex-1 overflow-y-auto p-4">
              <ClassCalendarView
                clubId={adminClubs?.length ? undefined : currentClub?.id}
                clubIds={adminClubs?.length ? adminClubs.map(c => c.id) : undefined}
                filters={filters}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function ScheduledClassesPage() {
  return (
    <ClassFiltersProvider>
      <ScheduledClassesContent />
    </ClassFiltersProvider>
  );
}

export default ScheduledClassesPage;
