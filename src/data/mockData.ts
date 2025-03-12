import { Store, Review, BagOffer } from '../types';

export const mockStore: Store = {
  id: "store-1",
  name: "Padaria Aroma Fresco",
  logo: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?q=80&w=200&h=200&auto=format&fit=crop",
  salesVolume: "320+ vendas",
  averageRating: 4.8,
  reviewCount: 42
};

export const mockBags: BagOffer[] = [
  {
    id: "bag-1",
    name: "Sacola Surpresa - Mista",
    price: 19.90,
    originalPrice: 39.80,
    discount: 50,
    description: "Panificação",
    imageUrl: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?q=80&w=500&auto=format&fit=crop"
  },
  {
    id: "bag-2",
    name: "Sacola Surpresa - Doce",
    price: 22.90,
    originalPrice: 45.80,
    discount: 50,
    description: "Confeitaria",
    imageUrl: "https://images.unsplash.com/photo-1603532648955-039310d9ed75?q=80&w=500&auto=format&fit=crop"
  },
  {
    id: "bag-3",
    name: "Sacola surpresa - Salgada",
    price: 25.90,
    originalPrice: 51.80,
    discount: 50,
    description: "Panificação",
    imageUrl: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=500&auto=format&fit=crop"
  }
];

export const mockReviews: Review[] = [
  {
    id: "review-1",
    userName: "Ana Silva",
    rating: 5,
    comment: "Adorei a sacola de pães! Todos estavam frescos e muito saborosos. A relação custo-benefício é excelente.",
    date: "2023-10-15",
    imageUrl: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?q=80&w=384&auto=format&fit=crop"
  },
  {
    id: "review-2",
    userName: "Carlos Mendes",
    rating: 4,
    comment: "Os doces estavam deliciosos! Só não dou 5 estrelas porque um dos croissants estava um pouco amassado, mas o sabor compensou.",
    date: "2023-10-10",
    imageUrl: "https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?q=80&w=384&auto=format&fit=crop"
  },
  {
    id: "review-3",
    userName: "Mariana Costa",
    rating: 5,
    comment: "Superou minhas expectativas! A sacola mix para café da manhã tinha muito mais itens do que eu esperava. Tudo muito fresco e saboroso.",
    date: "2023-05-05",
    imageUrl: "https://images.unsplash.com/photo-1608835291093-394b0c943a75?q=80&w=384&auto=format&fit=crop"
  },
  {
    id: "review-4",
    userName: "Pedro Alves",
    rating: 4,
    comment: "Muito bom custo-benefício. Os pães estavam excelentes, principalmente o de fermentação natural.",
    date: "2023-09-30"
  },
  {
    id: "review-5",
    userName: "Juliana Ferreira",
    rating: 5,
    comment: "Esta é minha terceira compra e continuo impressionada com a qualidade. Os pães e doces estão sempre frescos e a seleção é ótima.",
    date: "2023-09-25",
    imageUrl: "https://images.unsplash.com/photo-1517433367423-c7e5b0f35086?q=80&w=384&auto=format&fit=crop"
  }
];

export const aiSummary = "Os clientes destacam a qualidade e a variedade dos produtos que o estabelecimento fornece. A relação custo-benefício das sacolas surpresa é frequentemente elogiada.";

export const mockStores: Store[] = [
  {
    id: "store-1",
    name: "Padaria Aroma Fresco",
    logo: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?q=80&w=200&h=200&auto=format&fit=crop",
    salesVolume: "320+ vendas",
    averageRating: 4.8,
    reviewCount: 42
  },
  {
    id: "store-2",
    name: "Mercado Natural",
    logo: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?q=80&w=200&h=200&auto=format&fit=crop",
    salesVolume: "280+ vendas",
    averageRating: 4.6,
    reviewCount: 38
  },
  {
    id: "store-3",
    name: "Doces da Vovó",
    logo: "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?q=80&w=200&h=200&auto=format&fit=crop",
    salesVolume: "210+ vendas",
    averageRating: 4.9,
    reviewCount: 56
  },
  {
    id: "store-4",
    name: "Sabor Natural",
    logo: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=200&h=200&auto=format&fit=crop",
    salesVolume: "150+ vendas",
    averageRating: 4.5,
    reviewCount: 29
  },
  {
    id: "store-5",
    name: "Café Especial",
    logo: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&w=200&h=200&auto=format&fit=crop",
    salesVolume: "180+ vendas",
    averageRating: 4.7,
    reviewCount: 32
  }
];

export const featuredBags: BagOffer[] = [
  {
    id: "featured-1",
    name: "Doce",
    price: 18.90,
    originalPrice: 37.80,
    discount: 50,
    description: "Confeitaria",
    imageUrl: "",
    category: "sweet",
    storeId: "store-3",
    storeName: "Doces da Vovó",
    rating: 4.9
  },
  {
    id: "featured-2",
    name: "Salgada",
    price: 21.50,
    originalPrice: 43.00,
    discount: 50,
    description: "Comida Caseira",
    imageUrl: "",
    category: "savory",
    storeId: "store-4",
    storeName: "Sabor Natural",
    rating: 4.7
  },
  {
    id: "featured-3",
    name: "Mista",
    price: 24.90,
    originalPrice: 49.80,
    discount: 50,
    description: "Panificação / Confeitaria",
    imageUrl: "",
    category: "mixed",
    storeId: "store-5",
    storeName: "Café Especial",
    rating: 4.8
  }
];
