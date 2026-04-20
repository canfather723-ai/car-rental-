import { Car } from './types';

export const CAR_DATA: Car[] = [
  {
    id: '1',
    make: 'Porsche',
    model: '911 Carrera',
    year: 2024,
    priceBuy: 120000,
    priceRent: 450,
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200',
    category: 'Sports',
    description: 'The definitive sports car experiences. Unmatched balance and driving dynamics.',
    specs: {
      engine: '3.0L Twin-Turbo Flat-6',
      acceleration: '4.0s (0-60 mph)',
      topSpeed: '182 mph',
      transmission: '8-speed PDK'
    }
  },
  {
    id: '2',
    make: 'Mercedes-Benz',
    model: 'S-Class',
    year: 2024,
    priceBuy: 114000,
    priceRent: 380,
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=1200',
    category: 'Luxury',
    description: 'The pinnacle of automotive luxury and technological sophistication.',
    specs: {
      engine: '3.0L Inline-6 Turbo',
      acceleration: '4.8s (0-60 mph)',
      topSpeed: '155 mph',
      transmission: '9G-TRONIC'
    }
  },
  {
    id: '3',
    make: 'Tesla',
    model: 'Model S Plaid',
    year: 2024,
    priceBuy: 89000,
    priceRent: 320,
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=1200',
    category: 'Electric',
    description: 'Beyond ludricrous. The quickest accelerating car in production today.',
    specs: {
      engine: 'Tri-Motor AWD',
      acceleration: '1.99s (0-60 mph)',
      topSpeed: '200 mph',
      transmission: 'Single Speed'
    }
  },
  {
    id: '4',
    make: 'Range Rover',
    model: 'Autobiography',
    year: 2024,
    priceBuy: 141000,
    priceRent: 500,
    image: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&q=80&w=1200',
    category: 'SUV',
    description: 'Commanding presence and peerless refinement in every terrain.',
    specs: {
      engine: '4.4L V8 Twin Turbo',
      acceleration: '4.4s (0-60 mph)',
      topSpeed: '155 mph',
      transmission: '8-speed Automatic'
    }
  },
    {
    id: '5',
    make: 'Lamborghini',
    model: 'Huracán STO',
    year: 2024,
    priceBuy: 330000,
    priceRent: 1200,
    image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&q=80&w=1200',
    category: 'Sports',
    description: 'A track-focused beast brought to the road. Built for pure performance.',
    specs: {
      engine: '5.2L V10',
      acceleration: '3.0s (0-60 mph)',
      topSpeed: '193 mph',
      transmission: '7-speed LDF'
    }
  }
];
