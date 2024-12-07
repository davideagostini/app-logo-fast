"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Apple, Circle, Heart, Star, Zap, Coffee, Cloud, Sun, Moon, Music, Camera, Smile, Flag, Bell, Book } from "lucide-react";
import { cn } from "@/lib/utils";

const ICONS = [
  { name: "Apple", icon: Apple },
  { name: "Circle", icon: Circle },
  { name: "Heart", icon: Heart },
  { name: "Star", icon: Star },
  { name: "Zap", icon: Zap },
  { name: "Coffee", icon: Coffee },
  { name: "Cloud", icon: Cloud },
  { name: "Sun", icon: Sun },
  { name: "Moon", icon: Moon },
  { name: "Music", icon: Music },
  { name: "Camera", icon: Camera },
  { name: "Smile", icon: Smile },
  { name: "Flag", icon: Flag },
  { name: "Bell", icon: Bell },
  { name: "Book", icon: Book },
];

export function IconPicker({ selectedIcon, onSelectIcon }) {
  return (
    <ScrollArea className="h-[200px] border rounded-md p-2">
      <div className="grid grid-cols-6 gap-2">
        {ICONS.map(({ name, icon: Icon }) => (
          <Button
            key={name}
            variant="ghost"
            size="icon"
            className={cn(
              "w-10 h-10",
              selectedIcon === name && "bg-muted"
            )}
            onClick={() => onSelectIcon(name)}
          >
            <Icon className="w-5 h-5" />
          </Button>
        ))}
      </div>
    </ScrollArea>
  );
}