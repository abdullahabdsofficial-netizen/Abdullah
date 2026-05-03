export interface Category {
  id: string;
  name: string;
  icon: string;
}

export interface FoodItem {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  rating: number;
  calories?: string;
}

export interface Restaurant {
  id: string;
  name: string;
  image: string;
  rating: number;
  deliveryTime: string;
  deliveryFee: number;
  categories: string[];
  menu: FoodItem[];
}

export interface CartItem extends FoodItem {
  quantity: number;
  restaurantId: string;
  restaurantName: string;
}

export type Screen = 
  | 'splash' 
  | 'onboarding' 
  | 'login' 
  | 'home' 
  | 'menu' 
  | 'cart' 
  | 'checkout' 
  | 'tracking' 
  | 'history' 
  | 'profile';
