import { Download, Undo } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PresetColors } from "@/components/preset-colors";

export function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <h1 className="text-xl font-bold">LogoFast</h1>
          <Button variant="ghost" size="icon">
            <Undo className="h-4 w-4" />
          </Button>
        </div>
        
        <PresetColors />
        
        <Button>
          <Download className="mr-2 h-4 w-4" />
          Download
        </Button>
      </div>
    </header>
  );
}