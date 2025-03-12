
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import AnimatedRating from './AnimatedRating';
import { Image, Send } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

interface ReviewDialogProps {
  onSubmit: (review: {
    rating: number;
    comment: string;
    imageUrl?: string;
  }) => void;
}

const ReviewDialog: React.FC<ReviewDialogProps> = ({ onSubmit }) => {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [imageUrl, setImageUrl] = useState<string>();
  const [open, setOpen] = useState(false);
  const { toast } = useToast();

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    if (!comment.trim()) {
      toast({
        title: "Erro",
        description: "Por favor, escreva um comentário.",
        variant: "destructive",
      });
      return;
    }

    onSubmit({
      rating,
      comment,
      imageUrl,
    });
    
    setComment('');
    setRating(5);
    setImageUrl(undefined);
    setOpen(false);
    
    toast({
      title: "Sucesso",
      description: "Sua avaliação foi enviada com sucesso!",
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-food-orange hover:bg-food-orange-dark text-white px-6 py-3 rounded-full shadow-lg transition-colors z-50">
          Realizar uma avaliação
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-lg">
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Sua avaliação</h3>
            <div className="flex items-center gap-2">
              <AnimatedRating
                rating={rating}
                size={24}
                animated={false}
                className="cursor-pointer"
              />
              <select
                value={rating}
                onChange={(e) => setRating(Number(e.target.value))}
                className="ml-2 border rounded px-2 py-1"
              >
                {[5, 4, 3, 2, 1].map((value) => (
                  <option key={value} value={value}>
                    {value}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Escreva seu comentário aqui..."
              className="w-full h-32 p-3 border rounded-lg resize-none"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="cursor-pointer flex items-center gap-2 text-gray-600 hover:text-gray-800">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
              <div className="flex items-center gap-2 border rounded-lg px-4 py-2">
                <Image size={20} />
                <span>Inserir anexo</span>
              </div>
            </label>
            {imageUrl && (
              <div className="relative w-24 h-24">
                <img
                  src={imageUrl}
                  alt="Preview"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            )}
          </div>

          <button
            onClick={handleSubmit}
            className="w-full bg-food-orange hover:bg-food-orange-dark text-white px-4 py-2 rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <Send size={20} />
            <span>Enviar</span>
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ReviewDialog;
