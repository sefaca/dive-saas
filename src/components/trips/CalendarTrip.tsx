import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface TripEvent {
  id: string;
  time: string;
  name: string;
  count?: number;
  link?: string;
}

export const CalendarTrip = () => {
  const [currentMonth, setCurrentMonth] = useState("October");
  const [currentYear, setCurrentYear] = useState("2025");

  // Ejemplo de datos de trips - esto vendría de la base de datos
  const tripsData: Record<string, TripEvent[]> = {
    "1": [
      { id: "1", time: "3", name: "AM2T GB" },
      { id: "2", time: "7", name: "AM2T SH" },
      { id: "3", time: "8", name: "AM TC" },
      { id: "4", time: "8", name: "3 Tank Safari -inc Kittiwake HMD" },
      { id: "5", time: "2", name: "Reef & Rays PL" },
      { id: "6", time: "8", name: "PM2T GB" },
      { id: "7", time: "8", name: "Reef & Rays PL" },
      { id: "8", time: "8", name: "3 Stop Reef Snorkel TC" }
    ],
    "7": [
      { id: "9", time: "7", name: "AM2T HMD" },
      { id: "10", time: "4", name: "AM2T SH" },
      { id: "11", time: "6", name: "Resort TC" },
      { id: "12", time: "0", name: "Reef & Rays PL" },
      { id: "13", time: "3", name: "X Dive HMD" },
      { id: "14", time: "0", name: "SRC Snorkel PL" },
      { id: "15", time: "6", name: "X Snorkel TC" },
      { id: "16", time: "0", name: "Champagne Stingrays" }
    ],
    "4": [
      { id: "17", time: "4", name: "AM2T GB" },
      { id: "18", time: "8", name: "AM2T HMD" },
      { id: "19", time: "8", name: "AM TC" },
      { id: "20", time: "7", name: "Reef & Rays PL" },
      { id: "21", time: "2", name: "SRC Snorkel PL" },
      { id: "22", time: "14", name: "3 Stop Reef Snorkel SH" }
    ]
  };

  const daysOfWeek = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const years = ["2024", "2025", "2026"];

  // Generate calendar grid - simplified for demo
  const generateCalendar = () => {
    const firstDay = new Date(parseInt(currentYear), months.indexOf(currentMonth), 1);
    const lastDay = new Date(parseInt(currentYear), months.indexOf(currentMonth) + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const calendar: (number | null)[][] = [];
    let currentWeek: (number | null)[] = [];

    // Add empty cells for days before month starts
    for (let i = 0; i < startingDayOfWeek; i++) {
      currentWeek.push(null);
    }

    // Add all days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      currentWeek.push(day);
      if (currentWeek.length === 7) {
        calendar.push(currentWeek);
        currentWeek = [];
      }
    }

    // Add remaining empty cells
    if (currentWeek.length > 0) {
      while (currentWeek.length < 7) {
        currentWeek.push(null);
      }
      calendar.push(currentWeek);
    }

    return calendar;
  };

  const calendar = generateCalendar();

  return (
    <div className="p-4 space-y-4">
      {/* Header with Month/Year Selector */}
      <div className="flex items-center justify-center gap-4 bg-blue-500 text-white p-3 rounded-t-lg">
        <Button
          variant="ghost"
          size="sm"
          className="text-white hover:bg-blue-600"
          onClick={() => {
            const currentIndex = months.indexOf(currentMonth);
            if (currentIndex > 0) {
              setCurrentMonth(months[currentIndex - 1]);
            }
          }}
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>

        <Select value={currentMonth} onValueChange={setCurrentMonth}>
          <SelectTrigger className="w-32 bg-white text-black">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {months.map((month) => (
              <SelectItem key={month} value={month}>
                {month}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={currentYear} onValueChange={setCurrentYear}>
          <SelectTrigger className="w-24 bg-white text-black">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {years.map((year) => (
              <SelectItem key={year} value={year}>
                {year}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Button
          variant="ghost"
          size="sm"
          className="text-white hover:bg-blue-600"
          onClick={() => {
            const currentIndex = months.indexOf(currentMonth);
            if (currentIndex < months.length - 1) {
              setCurrentMonth(months[currentIndex + 1]);
            }
          }}
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>

      {/* Calendar Grid */}
      <div className="border rounded-lg overflow-hidden">
        {/* Day Headers */}
        <div className="grid grid-cols-7 bg-yellow-200">
          {daysOfWeek.map((day) => (
            <div key={day} className="p-2 text-center font-bold border text-sm">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Days */}
        {calendar.map((week, weekIndex) => (
          <div key={weekIndex} className="grid grid-cols-7">
            {week.map((day, dayIndex) => {
              const trips = day ? tripsData[day.toString()] : [];
              return (
                <div
                  key={dayIndex}
                  className={`min-h-[120px] border p-1 ${
                    day ? "bg-white hover:bg-gray-50" : "bg-gray-100"
                  }`}
                >
                  {day && (
                    <>
                      <div className="font-bold text-xs text-gray-600 mb-1">{day}</div>
                      <div className="space-y-0.5">
                        {trips && trips.map((trip) => (
                          <div key={trip.id} className="text-[10px] leading-tight">
                            <span className="font-semibold">{trip.time}</span>{" "}
                            <a href="#" className="text-blue-600 hover:underline">
                              {trip.name}
                            </a>
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};
