import { Car } from './types';

export const CAR_DATA: Car[] = [
  {
    id: '1',
    make: 'Mercedes-Benz',
    model: 'S-Class',
    year: 2024,
    priceBuy: 180000,
    priceRent: 6600,
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=1200',
    category: 'Luxury',
    location: 'Greater Accra',
    seats: 4,
    luggage: 4,
    doors: 4,
    description: 'The pinnacle of automotive luxury and technological sophistication.',
    specs: {
      engine: '3.0L Inline-6 Turbo',
      acceleration: '4.8s (0-60 mph)',
      topSpeed: '155 mph',
      transmission: 'Automatic'
    }
  },
  {
    id: '2',
    make: 'Toyota',
    model: 'RAV 4',
    year: 2024,
    priceBuy: 45000,
    priceRent: 1050,
    image: 'https://images.unsplash.com/photo-1590362891991-f776e747a518?auto=format&fit=crop&q=80&w=1200',
    category: 'SUV',
    location: 'Greater Accra',
    seats: 5,
    luggage: 3,
    doors: 4,
    description: 'A versatile and reliable SUV for all your urban and rural adventures.',
    specs: {
      engine: '2.5L 4-Cylinder',
      acceleration: '8.1s (0-60 mph)',
      topSpeed: '120 mph',
      transmission: 'Automatic'
    }
  },
  {
    id: '3',
    make: 'Kia',
    model: 'Sorento',
    year: 2024,
    priceBuy: 48000,
    priceRent: 1050,
    image: 'https://images.unsplash.com/photo-1623156637375-3733075b8e96?auto=format&fit=crop&q=80&w=1200',
    category: 'SUV',
    location: 'Greater Accra',
    seats: 7,
    luggage: 5,
    doors: 4,
    description: 'Spacious 3-row SUV perfect for group travel and families.',
    specs: {
      engine: '2.5L Turbo 4-Cylinder',
      acceleration: '7.4s (0-60 mph)',
      topSpeed: '130 mph',
      transmission: 'Automatic'
    }
  },
  {
    id: '4',
    make: 'Honda',
    model: 'CRV',
    year: 2024,
    priceBuy: 42000,
    priceRent: 1050,
    image: 'https://images.unsplash.com/photo-1594502184342-2e12f877aa73?auto=format&fit=crop&q=80&w=1200',
    category: 'SUV',
    location: 'Greater Accra',
    seats: 5,
    luggage: 5,
    doors: 4,
    description: 'Refined performance and advanced safety features in a compact SUV.',
    specs: {
      engine: '1.5L Turbo 4-Cylinder',
      acceleration: '7.8s (0-60 mph)',
      topSpeed: '124 mph',
      transmission: 'Automatic'
    }
  }
];
