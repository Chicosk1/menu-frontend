import type { GuestCheckDTO } from '@/cases/guest-checks/dtos/guest-check.dto';
import type { ProductDTO } from '@/cases/products/dtos/product.dto';

export type OrderStatus = 'NEW' | 'PREPARING' | 'READY' | 'DELIVERY'

export interface OrderItemDTO {
    id: string;
    product: ProductDTO;
    quantity: number;
    price: number;
    total: number;
    subtotal: number;
}

export interface OrderDTO {
    id: string;
    createdAt: string;
    guestCheck: GuestCheckDTO;
    total: number;
    status: OrderStatus;
    items: OrderItemDTO[];
}