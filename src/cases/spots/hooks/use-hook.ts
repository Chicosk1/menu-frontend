import { useQuery } from "@tanstack/react-query";
import { SpotService } from "../services/spot.service";

export function UseSpots() {
  return useQuery({
      queryKey: ['spots'],
      queryFn: SpotService.listAll
  })
}