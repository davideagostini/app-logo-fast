"use client";

import { useState } from "react";
import { LogoEditor } from "@/components/logo-editor";
import { LogoPreview } from "@/components/logo-preview";
import { Header } from "@/components/header";
import { Testimonials } from "@/components/testimonials";
import { ThemeProvider } from "@/components/theme-provider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { IconEditor } from "@/components/icon-editor";
import { BackgroundEditor } from "@/components/background-editor";

export default function Home() {
  const [logoSettings, setLogoSettings] = useState({
    // Icon settings
    iconSize: 120,
    iconRotation: 0,
    iconColor: "#000000",
    iconBorderColor: "#000000",
    iconBorderWidth: 2,
    selectedIcon: "Apple",
    customSvg: null,
    // Background settings
    rounded: 120,
    padding: 45,
    shadow: "XL",
    background: "gradient",
    gradientColors: ["#ef709b", "#fa9372"],
    gradientAngle: 45,
  });

  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <main className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div>
              <Tabs defaultValue="icon" className="w-full">
                <TabsList className="w-full">
                  <TabsTrigger value="icon" className="flex-1">Icon</TabsTrigger>
                  <TabsTrigger value="background" className="flex-1">Background</TabsTrigger>
                </TabsList>
                <TabsContent value="icon">
                  <IconEditor settings={logoSettings} onSettingsChange={setLogoSettings} />
                </TabsContent>
                <TabsContent value="background">
                  <BackgroundEditor settings={logoSettings} onSettingsChange={setLogoSettings} />
                </TabsContent>
              </Tabs>
            </div>
            <div className="lg:col-span-2">
              <LogoPreview settings={logoSettings} />
            </div>
          </div>
          <Testimonials />
        </div>
      </main>
    </ThemeProvider>
  );
}