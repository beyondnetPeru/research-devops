import { Order } from '../models';

const url = 'http://localhost:3002/api';

export const getOrders = async (): Promise<Order[]> => {
  const response = await fetch(`${url}/orders`);
  const data = await response.json();

  return data.map((order: Order) => {
    return new Order(
      order.id,
      order.customerName,
      order.total,
      order.status,
      order.createdDate,
      order.updatedDate,
      order.items
    );
  });
};
