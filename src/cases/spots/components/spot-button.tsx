import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import React from "react";
import { SpotDialog } from "./spot-dialog";

export function SpotButton() {

  const [dialogOpen, setDialogOpen] = useState(false);

  const [selectedSpot, setSelectedSpot] = useState<SpotDTO | null>();

  function handleSelect(spot: SpotDTO) {
    localStorage.setItem('spot', JSON.Stringfy(spot));
    setSelectedSpot(spot);
  }

  return (
    <div className="flex items-center justify-center">
      <Button
        className="flex cursor-pointer flex-col items-center gap-1 rounded-2xl px-6 py-4 text-brand-foreground 
        transition-colors hover:bg-primary hover:text-primary-foreground"
        onClick={() => setDialogOpen(true)}
        >
        <MapPin className="size-6" />
        { selectedSpot ? selectedSpot.name : 'Selecionar Mesa' }
      </Button>
      <SpotDialog open={dialogOpen} onSelect={handleSelect} />
    </div>
  )
}