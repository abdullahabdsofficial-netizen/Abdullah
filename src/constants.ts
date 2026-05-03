import { Category, Restaurant } from './types';

export const CATEGORIES: Category[] = [
  { id: '1', name: 'Burgers', icon: '🍔' },
  { id: '2', name: 'Pizza', icon: '🍕' },
  { id: '3', name: 'Biryani', icon: '🍲' },
  { id: '4', name: 'BBQ', icon: '🍖' },
  { id: '5', name: 'Chinese', icon: '🥡' },
  { id: '6', name: 'Desserts', icon: '🍰' },
  { id: '7', name: 'Drinks', icon: '🥤' },
];

export const RESTAURANTS: Restaurant[] = [
  {
    id: 'res_1',
    name: 'Burger King Royale',
    image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=800&q=80',
    rating: 4.5,
    deliveryTime: '25-30 min',
    deliveryFee: 1.99,
    categories: ['Burgers', 'Drinks'],
    menu: [
      {
        id: 'food_1',
        name: 'Whopper Classic',
        price: 8.99,
        description: 'Flame-grilled beef patty with juicy tomatoes and fresh lettuce.',
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80',
        rating: 4.8,
        calories: '660 kcal'
      },
      {
        id: 'food_2',
        name: 'Cheese Burger XL',
        price: 10.49,
        description: 'Extra Large patty with melted cheddar and caramelized onions.',
        image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=800&q=80',
        rating: 4.6,
        calories: '820 kcal'
      }
    ]
  },
  {
    id: 'res_2',
    name: 'Pizza Hut Express',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=80',
    rating: 4.2,
    deliveryTime: '30-40 min',
    deliveryFee: 2.50,
    categories: ['Pizza', 'Drinks'],
    menu: [
      {
        id: 'food_3',
        name: 'Pepperoni Overload',
        price: 12.99,
        description: 'Loaded with spicy pepperoni and mozzarella cheese.',
        image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=800&q=80',
        rating: 4.5
      }
    ]
  },
  {
    id: 'res_3',
    name: 'Desi Biryani House',
    image: 'https://images.unsplash.com/photo-1589302168068-1c498202f750?w=800&q=80',
    rating: 4.8,
    deliveryTime: '20-25 min',
    deliveryFee: 0.99,
    categories: ['Biryani'],
    menu: [
      {
        id: 'food_4',
        name: 'Chicken Dum Biryani',
        price: 14.99,
        description: 'Fragrant basmati rice cooked with tender chicken and spices.',
        image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&q=80',
        rating: 4.9
      }
    ]
  }
];
