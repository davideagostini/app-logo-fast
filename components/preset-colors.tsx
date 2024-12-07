"use client";

import { Button } from "@/components/ui/button";

const presets = [
  { bg: "bg-black", border: "border-white" },
  { bg: "bg-pink-400", border: "border-transparent" },
  { bg: "bg-purple-400", border: "border-transparent" },
  { bg: "bg-green-400", border: "border-transparent" },
  { bg: "bg-blue-400", border: "border-transparent" },
];

export function PresetColors() {
  return (
    <div className="flex gap-2">
      {presets.map((preset, index) => (
        <Button
          key={index}
          variant="outline"
          className={`w-8 h-8 rounded-full p-0 ${preset.bg} ${preset.border}`}
        />
      ))}
    </div>
  );
}