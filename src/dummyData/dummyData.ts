export const navbarDetails = [
  { id: 1, name: 'Electronics' },
  { id: 2, name: 'Tv & Appliances' },
  { id: 3, name: 'Men' },
  { id: 4, name: 'Women' },
  { id: 5, name: 'Baby & kids' },
  { id: 6, name: 'Home & Furniture' },
  { id: 7, name: 'Sports,Books & More' }
]
export const loginDetails = [
  { id: 1, name: 'New customer? signup' },
  { id: 2, name: 'my Profile' },
  { id: 3, name: 'Flipcart Plus Zone' },
  { id: 4, name: 'Orders' },
  { id: 5, name: 'Wishlists' },
  { id: 6, name: 'Rewards' },
  { id: 7, name: 'Giftcards' }
]
export const categoryHeadingList = [

  { id: 1, name: 'Best of Electronics' },
  { id: 2, name: 'Beauty,Food,Toys and More' },
  { id: 3, name: 'Best Value Fashion' },
  { id: 4, name: 'Festive Special ,Curated For You' },
  { id: 5, name: 'sports, HealthCare and more' },
  { id: 6, name: 'Home Kitchen and Essential' },
  { id: 7, name: 'Grooming,Books,Auto & more' },
  { id: 8, name: 'Fashion Top Deals' }
]

export const categorySubList = [

  { id: 1, name: 'Items1',price:1000,rating:2.5 },
  { id: 1, name: 'Items2',price:1000,rating:2.5 },
  { id: 2, name: 'Items3',price:1000,rating:2.5 },
  { id: 3, name: 'Items4',price:1000,rating:2.5 },
  { id: 4, name: 'Items5',price:1000,rating:2.5 },
  { id: 5, name: 'Items6',price:1000,rating:2.5 },
  { id: 6, name: 'Items7',price:1000,rating:2.5 },
  { id: 7, name: 'Items8',price:1000,rating:2.5 }
]

export const itemOneList = [

  { id: 1, name: 'Item1' },
  { id: 1, name: 'Item1' },
  { id: 2, name: 'Item1' },
  { id: 3, name: 'Item1' },
  { id: 4, name: 'Item1' },
  { id: 5, name: 'Item1' },
  { id: 6, name: 'Item1' },
  { id: 7, name: 'Item1' }
]
export const itemTwoList = [

  { id: 1, name: 'Item1' },
  { id: 1, name: 'Item1' },
  { id: 2, name: 'Item1' },
  { id: 3, name: 'Item1' },
  { id: 4, name: 'Item1' },
  { id: 5, name: 'Item1' },
  { id: 6, name: 'Item1' },
  { id: 7, name: 'Item1' }
]
export function getData(): any[] {
  return [
    {
      make: 'Toyota',
      model: 'Celica',
      price: 35000,
      zombies: 'Elly',
      style: 'Smooth',
      clothes: 'Jeans',
    },
    {
      make: 'Ford',
      model: 'Mondeo',
      price: 32000,
      zombies: 'Shane',
      style: 'Filthy',
      clothes: 'Shorts',
    },
    {
      make: 'Porsche',
      model: 'Boxster',
      price: 72000,
      zombies: 'Jack',
      style: 'Dirty',
      clothes: 'Padded',
    },
  ];
}

export interface IRow {
  value: string | number;
  type: 'brand' | 'model' | 'price';
}

export function getDatas(): IRow[] {
  return [
    { value: 14, type: 'price' },
    // { value: 'Toyota', type: 'brand' },
    // { value: 'gg', type: 'model' },
    { value: 21, type: 'price' },
    // { value: 'Male', type: 'gender' },
    // { value: 'Sad', type: 'mood' },
  ];
}

export const productPrice = [
  { id: 1, price: 2000 },
  { id: 2, price: 3000 },
  { id: 3, price: 2000 },
  { id: 4, price: 1700 },
  { id: 5, price: 2000 },
  { id: 6, price: 3000 },
  { id: 7, price: 3000 },
  { id: 8, price: 3000 },
]
export const  productRating = [
  { id: 1, rating: 1 },
  { id: 2, rating: 2 },
  { id: 3, rating: 2.5 },
  { id: 4, rating: 5 },
  { id: 5, rating: 3},
  { id: 6, rating: 1 },
  { id: 7, rating: 3},
  { id: 8, rating: 4.5},
]
