export interface Car {
  id: string;
  make: string;
  model: string;
  year: number;
  priceBuy: number;
  priceRent: number;
  image: string;
  category: 'Luxury' | 'Sports' | 'SUV' | 'Electric' | 'Economy';
  location: string;
  seats: number;
  luggage: number;
  doors: number;
  description: string;
  specs: {
    engine: string;
    acceleration: string;
    topSpeed: string;
    transmission: string;
  };
}
