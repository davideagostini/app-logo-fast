"use client";

import { Card } from "@/components/ui/card";
import { Apple, Circle, Heart, Star, Zap, Coffee, Cloud, Sun, Moon, Music, Camera, Smile, Flag, Bell, Book } from "lucide-react";

const ICONS = {
  Apple,
  Circle,
  Heart,
  Star,
  Zap,
  Coffee,
  Cloud,
  Sun,
  Moon,
  Music,
  Camera,
  Smile,
  Flag,
  Bell,
  Book,
};

export function LogoPreview({ settings }) {
  const gradientStyle = {
    background: `linear-gradient(${settings.gradientAngle}deg, ${settings.gradientColors[0]}, ${settings.gradientColors[1]})`,
    borderRadius: `${settings.rounded}px`,
    padding: `${settings.padding}px`,
    boxShadow: getShadowClass(settings.shadow),
  };

  const iconStyle = {
    transform: `rotate(${settings.iconRotation}deg)`,
    width: `${settings.iconSize}px`,
    height: `${settings.iconSize}px`,
    stroke: settings.iconBorderColor,
    strokeWidth: settings.iconBorderWidth,
  };

  const renderIcon = () => {
    if (settings.customSvg) {
      return (
        <div 
          style={iconStyle}
          dangerouslySetInnerHTML={{ __html: settings.customSvg }}
        />
      );
    }

    const IconComponent = ICONS[settings.selectedIcon] || ICONS.Apple;
    return (
      <IconComponent
        style={iconStyle}
        color={settings.iconColor}
      />
    );
  };

  return (
    <Card className="p-8 flex items-center justify-center bg-[url('/grid-bg.png')] bg-repeat">
      <div style={gradientStyle} className="aspect-square w-[300px] flex items-center justify-center">
        {renderIcon()}
      </div>
    </Card>
  );
}

function getShadowClass(shadow) {
  const shadows = {
    NONE: "none",
    SM: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    MD: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
    LG: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
    XL: "0 20px 25px -5px rgb(0 0 0 / 0.1)",
    "2XL": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
  };
  return shadows[shadow] || shadows.NONE;
}