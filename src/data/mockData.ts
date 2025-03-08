
import { Store, Review } from '../types';

export const mockStore: Store = {
  id: "store-1",
  name: "Green Market",
  logo: "https://images.unsplash.com/photo-1506617564039-2f3b650b7010?q=80&w=200&h=200&auto=format&fit=crop",
  salesVolume: "250+ vendas",
  averageRating: 4.7,
  reviewCount: 28
};

export const mockReviews: Review[] = [
  {
    id: "review-1",
    userName: "Ana Silva",
    rating: 5,
    comment: "Adorei a sacola surpresa! Muitos produtos frescos e de qualidade. Definitivamente comprarei novamente.",
    date: "2023-10-15",
    imageUrl: "https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=384&auto=format&fit=crop"
  },
  {
    id: "review-2",
    userName: "Carlos Mendes",
    rating: 4,
    comment: "Boa variedade de produtos. Algumas frutas estavam um pouco maduras demais, mas pelo preço valeu muito a pena.",
    date: "2023-10-10",
    imageUrl: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80&w=384&auto=format&fit=crop"
  },
  {
    id: "review-3",
    userName: "Mariana Costa",
    rating: 5,
    comment: "Superou minhas expectativas! A sacola tinha muito mais itens do que eu esperava e todos estavam em ótimo estado.",
    date: "2023-10-05",
    imageUrl: "https://images.unsplash.com/photo-1534531173927-aeb928d54385?q=80&w=384&auto=format&fit=crop"
  },
  {
    id: "review-4",
    userName: "Pedro Alves",
    rating: 4,
    comment: "Muito bom para o preço. Recebi uma variedade interessante de vegetais que normalmente não compraria.",
    date: "2023-09-30"
  },
  {
    id: "review-5",
    userName: "Juliana Ferreira",
    rating: 5,
    comment: "Esta é minha terceira compra e continuo impressionada com a qualidade. Os alimentos estão sempre frescos e a seleção é ótima.",
    date: "2023-09-25",
    imageUrl: "https://images.unsplash.com/photo-1573246123716-6b1782bfc499?q=80&w=384&auto=format&fit=crop"
  },
  {
    id: "review-6",
    userName: "Usuário Anônimo",
    rating: 3,
    comment: "Experiência mista. Alguns produtos estavam excelentes, outros nem tanto. Mas pelo valor, não posso reclamar muito.",
    date: "2023-09-20"
  }
];

export const aiSummary = "Os clientes costumam avaliar positivamente as sacolas surpresas deste estabelecimento, destacando a qualidade e a variedade das sacolas mistas.";
