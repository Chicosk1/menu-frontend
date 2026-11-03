
import { api } from '@/lib/axios'
import type { OrderDTO } from '../dtos/order.dto'

const ENDPOINT = '/orders'

export const OrderService = {
  async listAll(): Promise<OrderDTO[]> {
    const result = await api.get<OrderDTO[]>(ENDPOINT)
    return result.data
  },

  async findOne(id: string): Promise<OrderDTO> {
    const result = await api.get<OrderDTO>(`${ENDPOINT}/${id}`)
    return result.data
  },
}