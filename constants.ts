import { Product } from './types';

export const SHOP_NAME = "RamDev Shop";
export const OWNER_WHATSAPP = "919867637326"; 
export const OWNER_PHONE = "9867637326";
export const UPI_ID = "pawanponnam-1@okicici";

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Special Kaju Katli',
    description: 'Premium cashew fudge made with real silver leaf.',
    price: 50,
    category: 'Sweets',
    image: 'images/Sweets/kajukatli.jpg'
  },
  {
    id: '2',
    name: 'Ladoo',
    description: 'Soft and delicious laddoos prepared with fresh ingredients.',
    price: 50,
    category: 'Sweets',
    image: 'images/Sweets/ladoo.jpg'
  },
  {
    id: '3',
    name: 'Motichoor Ladoo',
    description: 'Fine motichoor pearls cooked in pure ghee for rich taste.',
    price: 50,
    category: 'Sweets',
    image: 'images/Sweets/motichoor.jpg'
  },
  {
    id: '4',
    name: 'Peda',
    description: 'Classic milk peda with authentic flavor and smooth texture.',
    price: 50,
    category: 'Sweets',
    image: 'images/Sweets/peda.jpg'
  },
  {
    id: '5',
    name: 'Thumbs Up',
    description: 'Refreshing Thumbs Up cola beverage.',
    price: 40,
    category: 'Drinks',
    image: 'images/Drinks/thumbsup.jpg'
  },
  {
    id: '6',
    name: 'Coke',
    description: 'Classic Coca-Cola chilled beverage.',
    price: 40,
    category: 'Drinks',
    image: 'images/Drinks/coke.jpg'
  },
  {
    id: '7',
    name: 'Chocolate Truffle Cake',
    description: 'Rich dark chocolate layers with silk ganache finish.',
    price: 650,
    category: 'Cakes',
    image: 'images/Cakes/truffle.jpg'
  }
];