import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";

export const CreateTrip = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [label, setLabel] = useState("");
  const [staffing, setStaffing] = useState("");
  const [tripType, setTripType] = useState("1 Tnk Wall - SRC Snk - 1 Tnk");
  const [boat, setBoat] = useState("Don Fosters Dive");
  const [startHour, setStartHour] = useState("09");
  const [startMinute, setStartMinute] = useState("00");
  const [startPeriod, setStartPeriod] = useState("AM");
  const [endHour, setEndHour] = useState("12");
  const [endMinute, setEndMinute] = useState("00");
  const [endPeriod, setEndPeriod] = useState("PM");
  const [maxDivers, setMaxDivers] = useState("");

  const handleSave = () => {
    console.log("Saving trip:", {
      date: selectedDate,
      label,
      staffing,
      tripType,
      boat,
      startTime: `${startHour}:${startMinute} ${startPeriod}`,
      endTime: `${endHour}:${endMinute} ${endPeriod}`,
      maxDivers
    });
  };

  const tripTypes = [
    "1 Tnk Wall - SRC Snk - 1 Tnk",
    "2 Tank Dive",
    "Shore Dive",
    "Night Dive",
    "Deep Dive",
    "Wreck Dive"
  ];

  const boats = [
    "Don Fosters Dive",
    "Gun Bay Diver",
    "Half Moon Diver",
    "Sparrowhawk Diver",
    "Top-Cat",
    "Pelican Reef & Rays"
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-4">
      {/* Calendar Section */}
      <Card>
        <CardContent className="p-4">
          <h3 className="font-semibold mb-4">On this date:</h3>
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={(date) => date && setSelectedDate(date)}
            className="rounded-md border"
          />
          <Button className="w-full mt-4" variant="default">
            Go to Today
          </Button>
        </CardContent>
      </Card>

      {/* Form Section */}
      <Card>
        <CardContent className="p-6 space-y-4">
          <h2 className="text-2xl font-bold mb-6">Create Trip</h2>

          {/* Label */}
          <div className="space-y-2">
            <Label htmlFor="label">Label:</Label>
            <Input
              id="label"
              value={label}
              onChange={(e) => setLabel(e.target.value)}
              placeholder="Trip label..."
            />
          </div>

          {/* Staffing */}
          <div className="space-y-2">
            <Label htmlFor="staffing">Staffing:</Label>
            <Input
              id="staffing"
              value={staffing}
              onChange={(e) => setStaffing(e.target.value)}
              placeholder="e.g., TS JL PO"
            />
          </div>

          {/* Trip Type */}
          <div className="space-y-2">
            <Label htmlFor="tripType">Trip type:</Label>
            <Select value={tripType} onValueChange={setTripType}>
              <SelectTrigger id="tripType">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {tripTypes.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Boat */}
          <div className="space-y-2">
            <Label htmlFor="boat">Boat:</Label>
            <Select value={boat} onValueChange={setBoat}>
              <SelectTrigger id="boat">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {boats.map((b) => (
                  <SelectItem key={b} value={b}>
                    {b}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Start Time */}
          <div className="space-y-2">
            <Label>Start time:</Label>
            <div className="flex gap-2">
              <Select value={startHour} onValueChange={setStartHour}>
                <SelectTrigger className="w-20">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {Array.from({ length: 12 }, (_, i) => {
                    const hour = (i + 1).toString().padStart(2, '0');
                    return (
                      <SelectItem key={hour} value={hour}>
                        {hour}
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>
              <span className="flex items-center">:</span>
              <Select value={startMinute} onValueChange={setStartMinute}>
                <SelectTrigger className="w-20">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {["00", "15", "30", "45"].map((min) => (
                    <SelectItem key={min} value={min}>
                      {min}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={startPeriod} onValueChange={setStartPeriod}>
                <SelectTrigger className="w-20">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="AM">AM</SelectItem>
                  <SelectItem value="PM">PM</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* End Time */}
          <div className="space-y-2">
            <Label>End time:</Label>
            <div className="flex gap-2">
              <Select value={endHour} onValueChange={setEndHour}>
                <SelectTrigger className="w-20">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {Array.from({ length: 12 }, (_, i) => {
                    const hour = (i + 1).toString().padStart(2, '0');
                    return (
                      <SelectItem key={hour} value={hour}>
                        {hour}
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>
              <span className="flex items-center">:</span>
              <Select value={endMinute} onValueChange={setEndMinute}>
                <SelectTrigger className="w-20">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {["00", "15", "30", "45"].map((min) => (
                    <SelectItem key={min} value={min}>
                      {min}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={endPeriod} onValueChange={setEndPeriod}>
                <SelectTrigger className="w-20">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="AM">AM</SelectItem>
                  <SelectItem value="PM">PM</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Max Divers */}
          <div className="space-y-2">
            <Label htmlFor="maxDivers">Max. divers:</Label>
            <Input
              id="maxDivers"
              type="number"
              value={maxDivers}
              onChange={(e) => setMaxDivers(e.target.value)}
              placeholder="Maximum number of divers"
              className="w-32"
            />
          </div>

          {/* Save Button */}
          <Button onClick={handleSave} className="w-full mt-6">
            Save
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
