"use client";

import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { RotateCw, Upload } from "lucide-react";
import * as Icons from "lucide-react";
import { IconPicker } from "@/components/icon-picker";
import { useState, useRef } from "react";

export function IconEditor({ settings, onSettingsChange }) {
  const fileInputRef = useRef(null);
  const [error, setError] = useState("");

  const handleFileChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.includes('svg')) {
      setError("Please upload an SVG file");
      return;
    }

    try {
      const text = await file.text();
      onSettingsChange({ 
        ...settings, 
        customSvg: text,
        selectedIcon: 'custom' 
      });
      setError("");
    } catch (err) {
      setError("Error reading SVG file");
    }
  };

  return (
    <Card className="p-6 space-y-6">
      <div className="space-y-4">
        <div>
          <Label>Choose Icon</Label>
          <IconPicker
            selectedIcon={settings.selectedIcon}
            onSelectIcon={(icon) => 
              onSettingsChange({ 
                ...settings, 
                selectedIcon: icon,
                customSvg: null 
              })
            }
          />
        </div>

        <div>
          <div className="flex justify-between">
          <Label>Size</Label>
          <span className="w-12 text-sm text-right font-medium leading-none">{settings.iconSize} px</span>
          </div>
          <Slider
            value={[settings.iconSize]}
            max={200}
            step={1}
            onValueChange={([value]) => 
              onSettingsChange({ ...settings, iconSize: value })
            }
          />
        </div>

        <div>
           <div className="flex justify-between">
            <Label>Rotation</Label>
            <span className="w-12 text-sm text-right font-medium leading-none">{settings.iconRotation}°</span>
           </div>
          <Slider
            value={[settings.iconRotation]}
            max={360}
            step={1}
            onValueChange={([value]) => 
              onSettingsChange({ ...settings, iconRotation: value })
            }
          />
        </div>

        <div>
          <Label>Border Color</Label>
          <div className="flex gap-2">
            <Input
              type="color"
              value={settings.iconBorderColor}
              onChange={(e) => 
                onSettingsChange({ ...settings, iconBorderColor: e.target.value })
              }
            />
            <Input
              value={settings.iconBorderColor}
              onChange={(e) => 
                onSettingsChange({ ...settings, iconBorderColor: e.target.value })
              }
            />
          </div>
        </div>

        <div>
          <div className="flex justify-between">
            <Label>Border Width</Label>
            <span className="w-12 text-sm text-right font-medium leading-none">{settings.iconBorderWidth} px</span>          
          </div>
          <Slider
            value={[settings.iconBorderWidth]}
            min={1}
            max={4}
            step={0.1}
            onValueChange={([value]) => 
              onSettingsChange({ ...settings, iconBorderWidth: value })
            }
          />
        </div>
      </div>
    </Card>
  );
}