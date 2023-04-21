export class Order {
  id: string;
  customerName: string;
  total: number;
  status: string;
  createdDate: string;
  updatedDate: string;
  items: OrderItem[];

  constructor(
    id: string,
    customerName: string,
    total: number,
    status: string,
    createdDate: string,
    updatedDate: string,
    items: OrderItem[]
  ) {
    this.id = id;
    this.customerName = customerName;
    this.total = total;
    this.status = status;
    this.createdDate = createdDate;
    this.updatedDate = updatedDate;
    this.items = items;
  }
}

export class OrderItem {
  id: string;
  orderId: string;
  productId: string;
  productName: string;
  quantity: number;
  unitPrice: number;
  total: number;

  constructor(
    id: string,
    orderId: string,
    productId: string,
    productName: string,
    quantity: number,
    unitPrice: number,
    total: number
  ) {
    this.id = id;
    this.orderId = orderId;
    this.productId = productId;
    this.productName = productName;
    this.quantity = quantity;
    this.unitPrice = unitPrice;
    this.total = total;
  }
}
