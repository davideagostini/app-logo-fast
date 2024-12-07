"use client";

import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ColorPicker } from "@/components/color-picker";
import { Slider } from "@/components/ui/slider";

export function BackgroundEditor({ settings, onSettingsChange }) {
  return (
    <Card className="p-6 space-y-6">
      <div className="space-y-4">
        <div>
          <Label>Rounded Corners</Label>
          <Slider
            value={[settings.rounded]}
            max={200}
            step={1}
            onValueChange={([value]) => 
              onSettingsChange({ ...settings, rounded: value })
            }
          />
        </div>

        <div>
          <Label>Padding</Label>
          <Slider
            value={[settings.padding]}
            max={100}
            step={1}
            onValueChange={([value]) => 
              onSettingsChange({ ...settings, padding: value })
            }
          />
        </div>

        <div>
          <Label>Shadow</Label>
          <RadioGroup
            value={settings.shadow}
            onValueChange={(value) => 
              onSettingsChange({ ...settings, shadow: value })
            }
            className="flex gap-4"
          >
            {["NONE", "SM", "MD", "LG", "XL", "2XL"].map((size) => (
              <div key={size} className="flex items-center space-x-2">
                <RadioGroupItem value={size} id={size} />
                <Label htmlFor={size}>{size}</Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        <div>
          <Label>Background</Label>
          <ColorPicker
            type="gradient"
            colors={settings.gradientColors}
            angle={settings.gradientAngle}
            onChange={(colors, angle) => 
              onSettingsChange({
                ...settings,
                gradientColors: colors,
                gradientAngle: angle,
              })
            }
          />
        </div>
      </div>
    </Card>
  );
}