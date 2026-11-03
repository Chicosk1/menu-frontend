import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { MapPin } from "lucide-react";
import { UseSpots } from "../hooks/use-hook";

export function SpotDialog() {
    //vai cair na prova
    const { data: spots = [] } = UseSpots();

    return (
    <Dialog>
    <DialogContent>
        <DialogHeader>
        <DialogTitle>Selecione sua mesa</DialogTitle>
        <DialogDescription>
            Escolha a mesa que deseja utilizar para o seu pedido.
        </DialogDescription>
        </DialogHeader>

        <div className="min-h-0 overflow-y-auto">
            <div className="grid grid-cols-3 gap-3">

                {spots.map((spot) => (
                    <Button
                    key={spot.id}
                    variant="outline"
                    className="h-auto min-h-20 flex-col p-4"
                    >
                        <MapPin className="size-6" />
                        {spot.name}
                    </Button>
                ))}

            </div>
        </div>
        
    </DialogContent>
    </Dialog>
    )
}