import { useState } from "react";
import { MapPin, Clock } from "lucide-react";

export function BranchSelection({ onSelect }: { onSelect: (branch: string) => void }) {
  const [animatingBranch, setAnimatingBranch] = useState<string | null>(null);

  const handleSelect = (branch: string) => {
    setAnimatingBranch(branch);
    setTimeout(() => {
      onSelect(branch);
    }, 400);
  };

  const branches = [
    {
      id: "kalawana",
      name: "Kalawana",
      address: "No. 27, Bus Stand, Kalawana",
      hours: "Open Daily 8:00 AM – 6:00 PM"
    },
    {
      id: "ratnapura",
      name: "Ratnapura",
      address: "No. 45, Bus Stand, Ratnapura",
      hours: "Open Daily 8:00 AM – 6:00 PM"
    }
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background w-full px-6 animate-in fade-in duration-700">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold text-foreground">Select a Branch</h2>
        <p className="text-sasi-silver mt-2">Which store are you visiting?</p>
      </div>

      <div className="flex flex-col w-full max-w-sm gap-6">
        {branches.map((branch) => (
          <div
            key={branch.id}
            onClick={() => handleSelect(branch.id)}
            className={`flex flex-col p-5 bg-card rounded-[24px] shadow-sm border border-sasi-silver/20 cursor-pointer transition-all duration-300
              ${animatingBranch === branch.id ? "scale-[1.02] shadow-md border-sasi-red" : ""}
              ${animatingBranch && animatingBranch !== branch.id ? "opacity-30 scale-95" : "hover:shadow-md hover:-translate-y-1"}
            `}
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-sasi-red/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-sasi-red" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-foreground mb-1">{branch.name}</h3>
                <p className="text-sm text-sasi-silver mb-3">{branch.address}</p>
                <div className="flex items-center gap-2 text-xs text-sasi-black font-medium">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{branch.hours}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
