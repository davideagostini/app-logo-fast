"use client";

import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Paintbrush, RotateCcw } from "lucide-react";

export function ColorPicker({ type, colors, angle, onChange }) {
  const [activeColor, setActiveColor] = useState(0);

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        {colors.map((color, index) => (
          <div
            key={index}
            className={`w-8 h-8 rounded cursor-pointer border-2 ${
              activeColor === index ? "border-primary" : "border-transparent"
            }`}
            style={{ backgroundColor: color }}
            onClick={() => setActiveColor(index)}
          />
        ))}
      </div>

      <div className="space-y-2">
        <Label>Color</Label>
        <div className="flex gap-2">
          <Input
            type="color"
            value={colors[activeColor]}
            onChange={(e) => {
              const newColors = [...colors];
              newColors[activeColor] = e.target.value;
              onChange(newColors, angle);
            }}
          />
          <Input
            value={colors[activeColor]}
            onChange={(e) => {
              const newColors = [...colors];
              newColors[activeColor] = e.target.value;
              onChange(newColors, angle);
            }}
          />
        </div>
      </div>

      {type === "gradient" && (
        <div className="space-y-2">
          <Label>Angle</Label>
          <div className="flex gap-2 items-center">
            <Slider
              value={[angle]}
              max={360}
              step={1}
              onValueChange={([value]) => onChange(colors, value)}
            />
            <span className="w-12 text-sm">{angle}°</span>
          </div>
        </div>
      )}
    </div>
  );
}