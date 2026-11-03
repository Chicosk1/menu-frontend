import type { SpotDTO } from '@/cases/spots/dtos/spot.dto';

export type GuestCheckStatus = 'open' | 'closed' | 'canceled'

export interface GuestCheckDTO {
    id: string;
    createdAt: string;
    Status: GuestCheckStatus;
    spot: SpotDTO;
}