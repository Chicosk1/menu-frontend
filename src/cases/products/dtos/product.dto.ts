import type { CategoryDTO } from '@/cases/categories/dtos/category.dto';

export interface ProductDTO {
    id: string;
    name: string;
    active: boolean;
    description: string | null;
    price: number;
    picture: string | null;
    category: CategoryDTO | null;
}