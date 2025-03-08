
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
