export interface IProduct {
  id: number;
  imgURL: string;
  name: string;
  price: number;
  category: string;
  discount?: number;
  old_price?: number;
  express?: string;
}
