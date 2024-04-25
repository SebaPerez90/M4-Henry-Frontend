import { IProduct } from '@/interfaces/product.interface';

export const productsToPreLoad: IProduct[] = [
  {
    id: 1,
    name: 'iPhone 11',
    price: 30000,
    discount: 25,
    category: 'phones',
    express: 'ENVIO GRATIS',
    imgURL:
      'https://http2.mlstatic.com/D_NQ_NP_809326-MLA46115014340_052021-O.webp',
  },
  {
    id: 2,
    name: 'MacBook Air',
    price: 15000,
    category: 'laptops',
    imgURL:
      'https://http2.mlstatic.com/D_NQ_NP_868385-MLA52463970075_112022-O.webp',
  },
  {
    id: 3,
    name: 'iPad Pro',
    price: 12000,
    discount: 10,
    category: 'ipads',
    express: 'ENVIO GRATIS',
    imgURL:
      'https://http2.mlstatic.com/D_NQ_NP_814559-MLA53970921150_022023-O.webp',
  },
  {
    id: 4,
    name: 'Apple Watch Series 6',
    price: 8000,
    category: 'laptops',
    imgURL:
      'https://http2.mlstatic.com/D_NQ_NP_733580-MLA72063241888_102023-O.webp',
  },
  {
    id: 5,
    name: 'AirPods Pro',
    price: 2000,
    discount: 30,
    category: 'ipads',
    express: 'ENVIO GRATIS',
    imgURL:
      'https://http2.mlstatic.com/D_NQ_NP_606698-MLU74678792835_022024-O.webp',
  },
  {
    id: 6,
    name: 'HomePod mini',
    price: 64000,
    category: 'ipads',
    imgURL:
      'https://http2.mlstatic.com/D_NQ_NP_800774-MLA45740145234_042021-O.webp',
  },
];
