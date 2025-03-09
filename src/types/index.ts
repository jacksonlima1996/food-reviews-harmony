
export interface Review {
  id: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
  imageUrl?: string;
}

export interface Store {
  id: string;
  name: string;
  logo: string;
  salesVolume: string;
  averageRating: number;
  reviewCount: number;
}

export interface BagOffer {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  discount: number;
  description: string;
  imageUrl: string;
  rating?: number;
  storeId?: string;
  storeName?: string;
  category?: 'sweet' | 'savory' | 'mixed';
}

