
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
    name: "Sacola Surpresa - Pães Artesanais",
    price: 19.90,
    originalPrice: 39.80,
    discount: 50,
    description: "Sacola com uma variedade de pães artesanais que estariam próximos ao vencimento. Pode incluir pães de fermentação natural, ciabatta, multigrãos e outros.",
    imageUrl: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?q=80&w=500&auto=format&fit=crop"
  },
  {
    id: "bag-2",
    name: "Sacola Surpresa - Doces Variados",
    price: 22.90,
    originalPrice: 45.80,
    discount: 50,
    description: "Uma seleção de doces e bolos que estariam próximos ao vencimento. Pode incluir croissants, fatias de torta, donuts e outros doces da padaria.",
    imageUrl: "https://images.unsplash.com/photo-1603532648955-039310d9ed75?q=80&w=500&auto=format&fit=crop"
  },
  {
    id: "bag-3",
    name: "Sacola Mix - Café da Manhã",
    price: 25.90,
    originalPrice: 51.80,
    discount: 50,
    description: "Combinação de pães e doces perfeitos para um café da manhã completo. Itens próximos ao vencimento com qualidade garantida.",
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
    date: "2023-10-05",
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
  },
  {
    id: "review-6",
    userName: "Usuário Anônimo",
    rating: 3,
    comment: "Experiência mista. Alguns produtos estavam excelentes, outros nem tanto. Mas pelo valor, ainda é uma boa opção.",
    date: "2023-09-20"
  }
];

export const aiSummary = "Os clientes destacam a qualidade e frescor dos produtos da padaria, especialmente os pães artesanais e a variedade de doces. A relação custo-benefício das sacolas surpresa é frequentemente elogiada.";
