import { OrderItem } from './order-item.model';

export class Order {

  // @required
  firstName: string = '';

  items: OrderItem[] = [];
}
