export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  popular: boolean;
  vegetarian: boolean;
}

export interface Testimonial {
  id: number;
  name: string;
  rating: number;
  comment: string;
  avatar: string;
  date: string;
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
}