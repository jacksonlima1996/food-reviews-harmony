
import React from 'react';
import { Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AISummaryProps {
  summary: string;
  className?: string;
}

const AISummary: React.FC<AISummaryProps> = ({ summary, className }) => {
  return (
    <div className={cn("glass-card w-full rounded-xl p-5 space-y-2 animate-fade-up", className)}>
      <div className="flex items-center gap-2 mb-2">
        <Sparkles size={18} className="text-food-orange" />
        <h3 className="font-medium text-gray-700">Resumo das Avaliações</h3>
      </div>
      <p className="text-gray-600 leading-relaxed text-left">{summary}</p>
    </div>
  );
};

export default AISummary;
