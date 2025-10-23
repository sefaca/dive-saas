import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useAuth } from "@/contexts/AuthContext";
import { useActiveClubs } from "@/hooks/useActiveClubs";
import { TripSheet } from "@/components/trips/TripSheet";
import { CreateTrip } from "@/components/trips/CreateTrip";
import ClassCalendarView from "@/components/ClassCalendarView";
import { ClassFiltersProvider, useClassFilters } from "@/contexts/ClassFiltersContext";

type TripView = 'sheet' | 'create' | 'calendar';

function ScheduledClassesContent() {
  const [activeView, setActiveView] = useState<TripView>('sheet');
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
      <div className="w-48 bg-gray-100 border-r flex flex-col">
        {/* Options Header */}
        <div className="p-4 border-b bg-white">
          <h2 className="font-bold text-lg">Options</h2>
        </div>

        {/* Trips Section */}
        <div className="p-4 space-y-2">
          <h3 className="font-semibold text-sm text-gray-600 mb-3">Trips</h3>

          <button
            onClick={() => setActiveView('sheet')}
            className={`w-full text-left px-3 py-2 text-sm rounded transition-colors ${
              activeView === 'sheet'
                ? 'bg-blue-600 text-white font-semibold'
                : 'hover:bg-gray-200 text-gray-700'
            }`}
          >
            Trips sheet...
          </button>

          <button
            onClick={() => setActiveView('create')}
            className={`w-full text-left px-3 py-2 text-sm rounded transition-colors ${
              activeView === 'create'
                ? 'bg-blue-600 text-white font-semibold'
                : 'hover:bg-gray-200 text-gray-700'
            }`}
          >
            Create Trip...
          </button>

          <button
            onClick={() => setActiveView('calendar')}
            className={`w-full text-left px-3 py-2 text-sm rounded transition-colors ${
              activeView === 'calendar'
                ? 'bg-blue-600 text-white font-semibold'
                : 'hover:bg-gray-200 text-gray-700'
            }`}
          >
            30-day view...
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto bg-white">
        {activeView === 'sheet' && <TripSheet />}
        {activeView === 'create' && <CreateTrip />}
        {activeView === 'calendar' && (
          <div className="p-4">
            <ClassCalendarView
              clubId={adminClubs?.length ? undefined : currentClub?.id}
              clubIds={adminClubs?.length ? adminClubs.map(c => c.id) : undefined}
              filters={filters}
            />
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
