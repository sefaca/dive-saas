import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trash2, UserPlus } from "lucide-react";

interface TripRow {
  id: string;
  diverName: string;
  dep: boolean;
  conf: boolean;
  waiv: boolean;
  pkup: boolean;
  certLevel: string;
  dld: string;
  mask: string;
  fins: string;
  bcd: string;
  reg: string;
  wsut: string;
  cptr: string;
  nitrox1: string;
  nitrox2: string;
  cam: string;
  classType: string;
  notes: string;
}

export const TripSheet = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [tripRows, setTripRows] = useState<TripRow[]>([
    {
      id: "1",
      diverName: "",
      dep: false,
      conf: false,
      waiv: false,
      pkup: false,
      certLevel: "AOW",
      dld: "10/25",
      mask: "",
      fins: "",
      bcd: "M",
      reg: "",
      wsut: "",
      cptr: "",
      nitrox1: "",
      nitrox2: "",
      cam: "",
      classType: "",
      notes: "DAD X DIVE"
    }
  ]);

  const boats = [
    { name: "Gun Bay Diver", code: "AM2T", count: 2 },
    { name: "Half Moon Diver", code: "AM2T", count: 4 },
    { name: "Sparrowhawk Diver", code: "AM2T", count: 14 },
    { name: "Top-Cat", code: "AOW", count: 8 },
    { name: "Pelican Reef & Rays", code: "", count: 0 },
    { name: "Gun Bay Diver", code: "PM2T", count: 12 },
    { name: "Sparrowhawk Diver", code: "X Dive", count: 8 },
    { name: "Pelican SRC", code: "Snorkel", count: 0 },
    { name: "Top-Cat", code: "X Dive", count: 3 },
    { name: "Pelican Champagne", code: "Stingrays", count: 0 }
  ];

  const addRow = () => {
    setTripRows([...tripRows, {
      id: Date.now().toString(),
      diverName: "",
      dep: false,
      conf: false,
      waiv: false,
      pkup: false,
      certLevel: "",
      dld: "10/25",
      mask: "",
      fins: "",
      bcd: "",
      reg: "",
      wsut: "",
      cptr: "",
      nitrox1: "",
      nitrox2: "",
      cam: "",
      classType: "",
      notes: ""
    }]);
  };

  const removeRow = (id: string) => {
    setTripRows(tripRows.filter(row => row.id !== id));
  };

  return (
    <div className="space-y-4 p-4">
      {/* Header Info */}
      <Card className="p-4 bg-gray-50">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-bold text-lg">This trip</h3>
            <p className="text-sm mt-2">From <span className="font-semibold">7:45 AM</span> til <span className="font-semibold">11:30 AM</span></p>
            <p className="text-sm">Staffing: TS JL PO</p>
            <p className="text-sm mt-2">
              <a href="#" className="text-blue-600 underline">Manifest</a>{" "}
              <span className="text-red-600 font-semibold">Billing unconfirmed</span>
            </p>
            <p className="text-sm">
              <a href="#" className="text-blue-600 underline">Pick-up List</a>
            </p>
          </div>
          <div className="flex gap-2">
            <Button size="sm" variant="outline">Save</Button>
            <Button size="sm" variant="outline">Cancel</Button>
          </div>
        </div>
      </Card>

      {/* Boats Header */}
      <div className="grid grid-cols-10 gap-2 overflow-x-auto">
        {boats.map((boat, idx) => (
          <Card
            key={idx}
            className={`p-2 text-center text-xs ${
              boat.name.includes("Gun Bay") ? "bg-yellow-100" :
              boat.name.includes("Half Moon") ? "bg-blue-50" :
              boat.name.includes("Sparrowhawk") ? "bg-orange-50" :
              boat.name.includes("Top-Cat") ? "bg-green-50" :
              boat.name.includes("Pelican") ? "bg-purple-50" : "bg-gray-50"
            }`}
          >
            <div className="font-bold">{boat.name}</div>
            <div className="text-xs">{boat.code} {boat.count > 0 && `(${boat.count})`}</div>
          </Card>
        ))}
      </div>

      {/* Trip Table */}
      <div className="overflow-x-auto border rounded-lg">
        <table className="w-full text-xs border-collapse">
          <thead className="bg-gray-100 sticky top-0">
            <tr>
              <th className="border p-1 min-w-[40px]">#</th>
              <th className="border p-1 min-w-[150px]">Diver name</th>
              <th className="border p-1 min-w-[80px]">Actions</th>
              <th className="border p-1 min-w-[50px]">Dep</th>
              <th className="border p-1 min-w-[50px]">Conf</th>
              <th className="border p-1 min-w-[50px]">Waiv</th>
              <th className="border p-1 min-w-[50px]">Pkup</th>
              <th className="border p-1 min-w-[80px]">Cert Level</th>
              <th className="border p-1 min-w-[70px]">DLD</th>
              <th className="border p-1 min-w-[80px]">Mask</th>
              <th className="border p-1 min-w-[80px]">Fins</th>
              <th className="border p-1 min-w-[60px]">BCD</th>
              <th className="border p-1 min-w-[60px]">Reg</th>
              <th className="border p-1 min-w-[70px]">Wsut</th>
              <th className="border p-1 min-w-[60px]">Cptr</th>
              <th className="border p-1 min-w-[60px]">Ntrx1</th>
              <th className="border p-1 min-w-[60px]">Ntrx2</th>
              <th className="border p-1 min-w-[80px]">Cam</th>
              <th className="border p-1 min-w-[120px]">Class Type</th>
              <th className="border p-1 min-w-[150px]">Notes</th>
            </tr>
          </thead>
          <tbody>
            {tripRows.map((row, index) => (
              <tr key={row.id} className="hover:bg-gray-50">
                <td className="border p-1 text-center">{index + 1}</td>
                <td className="border p-1">
                  <Input
                    value={row.diverName}
                    onChange={(e) => {
                      const newRows = [...tripRows];
                      newRows[index].diverName = e.target.value;
                      setTripRows(newRows);
                    }}
                    placeholder="Select diver..."
                    className="h-7 text-xs"
                  />
                </td>
                <td className="border p-1">
                  <div className="flex gap-1 justify-center">
                    <Button size="sm" variant="ghost" className="h-6 w-6 p-0">
                      <UserPlus className="h-3 w-3" />
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="h-6 w-6 p-0 text-red-600"
                      onClick={() => removeRow(row.id)}
                    >
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </div>
                </td>
                <td className="border p-1 text-center">
                  <Checkbox checked={row.dep} className="mx-auto" />
                </td>
                <td className="border p-1 text-center bg-yellow-50">
                  <Checkbox checked={row.conf} className="mx-auto" />
                </td>
                <td className="border p-1 text-center">
                  <Checkbox checked={row.waiv} className="mx-auto" />
                </td>
                <td className="border p-1 text-center">
                  <Checkbox checked={row.pkup} className="mx-auto" />
                </td>
                <td className="border p-1">
                  <Select value={row.certLevel}>
                    <SelectTrigger className="h-7 text-xs">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="AOW">AOW</SelectItem>
                      <SelectItem value="OW">OW</SelectItem>
                      <SelectItem value="Advanced">Advanced</SelectItem>
                      <SelectItem value="Dive1">Dive 1</SelectItem>
                      <SelectItem value="Dive2">Dive 2</SelectItem>
                    </SelectContent>
                  </Select>
                </td>
                <td className="border p-1">
                  <Input value={row.dld} className="h-7 text-xs" />
                </td>
                <td className="border p-1">
                  <Select value={row.mask}>
                    <SelectTrigger className="h-7 text-xs">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="S">S</SelectItem>
                      <SelectItem value="M">M</SelectItem>
                      <SelectItem value="L">L</SelectItem>
                    </SelectContent>
                  </Select>
                </td>
                <td className="border p-1">
                  <Select value={row.fins}>
                    <SelectTrigger className="h-7 text-xs">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="YEL">YEL</SelectItem>
                      <SelectItem value="BLU">BLU</SelectItem>
                      <SelectItem value="13-14">13-14</SelectItem>
                    </SelectContent>
                  </Select>
                </td>
                <td className="border p-1">
                  <Select value={row.bcd}>
                    <SelectTrigger className="h-7 text-xs">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="S">S</SelectItem>
                      <SelectItem value="M">M</SelectItem>
                      <SelectItem value="L">L</SelectItem>
                    </SelectContent>
                  </Select>
                </td>
                <td className="border p-1 text-center">
                  <Checkbox checked={row.reg} className="mx-auto" />
                </td>
                <td className="border p-1">
                  <Select value={row.wsut}>
                    <SelectTrigger className="h-7 text-xs">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="S">S</SelectItem>
                      <SelectItem value="M">M</SelectItem>
                      <SelectItem value="L">L</SelectItem>
                    </SelectContent>
                  </Select>
                </td>
                <td className="border p-1">
                  <Input value={row.cptr} className="h-7 text-xs" />
                </td>
                <td className="border p-1">
                  <Input value={row.nitrox1} placeholder="32" className="h-7 text-xs" />
                </td>
                <td className="border p-1">
                  <Input value={row.nitrox2} placeholder="32" className="h-7 text-xs" />
                </td>
                <td className="border p-1">
                  <Select value={row.cam}>
                    <SelectTrigger className="h-7 text-xs">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="100s">100's</SelectItem>
                      <SelectItem value="63s">63's</SelectItem>
                    </SelectContent>
                  </Select>
                </td>
                <td className="border p-1">
                  <Select value={row.classType}>
                    <SelectTrigger className="h-7 text-xs">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="AM">AM</SelectItem>
                      <SelectItem value="PM">PM</SelectItem>
                      <SelectItem value="PREPAID">#ARR LD PREPAID</SelectItem>
                    </SelectContent>
                  </Select>
                </td>
                <td className="border p-1">
                  <Input
                    value={row.notes}
                    onChange={(e) => {
                      const newRows = [...tripRows];
                      newRows[index].notes = e.target.value;
                      setTripRows(newRows);
                    }}
                    className="h-7 text-xs"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Row Button */}
      <Button onClick={addRow} size="sm" variant="outline" className="w-full">
        <UserPlus className="h-4 w-4 mr-2" />
        Add Diver
      </Button>
    </div>
  );
};
