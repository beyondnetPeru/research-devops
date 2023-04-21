export class Product {
  id: string;
  name: string;
  price: number;
  quantity: number;
  description: string;
  image: string;

  constructor(
    id: string,
    name: string,
    price: number,
    quantity: number,
    description: string,
    image: string
  ) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.description = description;
    this.image = image;
  }
}
