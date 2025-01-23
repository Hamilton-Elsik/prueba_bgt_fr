export class Products {
  id?: number;
  nameProduct: string;
  category: string;
  price: number;
  quantityStock: number;

  constructor(
    id: number,
    nameProduct: string,
    category: string,
    price: number,
    quantityStock: number
  ) {
    this.id = id;
    this.nameProduct = nameProduct;
    this.category = category;
    this.price = price;
    this.quantityStock = quantityStock;
  }
}
