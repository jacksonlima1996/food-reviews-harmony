
import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent } from './ui/dialog';
import { Button } from './ui/button';
import { Sparkles, ShoppingBag, MessageSquare } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from '@/hooks/use-local-storage';

interface GuidedTourModalProps {
  onClose: () => void;
  onComplete: () => void;
  currentPage?: 'landing' | 'reviews';
}

export const GuidedTourModal: React.FC<GuidedTourModalProps> = ({
  onClose,
  onComplete,
  currentPage = 'landing'
}) => {
  const [step, setStep] = useState<number>(0);
  const [showModal, setShowModal] = useState<boolean>(true);
  const navigate = useNavigate();
  
  // Steps: 0 = welcome, 1-3 = tour steps, 4 = conclusion
  const totalSteps = 3;
  
  const nextStep = () => {
    if (step < totalSteps + 1) {
      // If we're on step 1 and on the landing page, navigate to reviews page
      if (step === 1 && currentPage === 'landing') {
        navigate('/reviews/1?tour=true', { state: { fromTour: true } });
        // We don't increment step here as the Reviews component will show the tour modal
      } else {
        setStep(step + 1);
      }
    }
  };

  const startTour = () => {
    setStep(1);
  };

  const handleClose = () => {
    setShowModal(false);
    onClose();
  };

  const handleComplete = () => {
    setShowModal(false);
    onComplete();
  };

  // Welcome dialog content
  const renderWelcomeContent = () => (
    <div className="text-center space-y-4 py-4">
      <h3 className="text-xl font-bold flex items-center justify-center gap-2">
        🚀 Novidades fresquinhas no app!
      </h3>
      <p className="text-gray-600 px-2 text-left">
        Agora ficou ainda mais fácil escolher sua sacola com confiança!
        <br /><br />
        Estamos lançando duas novidades:
      </p>
      <ul className="text-left px-4 space-y-3">
        <li className="flex items-start gap-2">
          <ShoppingBag className="text-food-orange mt-1 flex-shrink-0" size={18} />
          <span><strong>Sacolas recomendadas:</strong> veja as sacolas mais bem avaliadas por outros usuários.</span>
        </li>
        <li className="flex items-start gap-2">
          <MessageSquare className="text-food-orange mt-1 flex-shrink-0" size={18} />
          <span><strong>Nova área de avaliações:</strong> leia comentários, veja fotos reais e um resumo gerado por IA com os principais pontos de cada parceiro.</span>
        </li>
      </ul>
      <p className="text-gray-600 px-2 mt-4 text-left">
        Descubra como aproveitar ao máximo essas novidades!
      </p>
      <div className="flex gap-2 pt-4">
        <Button
          variant="outline"
          className="flex-1"
          onClick={handleClose}
        >
          Fechar
        </Button>
        <Button
          className="flex-1 bg-food-orange hover:bg-food-orange-dark"
          onClick={startTour}
        >
          Me mostre as novidades
        </Button>
      </div>
    </div>
  );

  // Tour steps content
  const renderTourStep = () => {
    const steps = [
      {
        highlight: '.featured-bags-section',
        title: 'Sacolas Recomendadas',
        description: 'Agora você pode ver as sacolas mais bem recomendadas, não fique de fora!',
        icon: <ShoppingBag size={20} className="text-food-orange" />,
        page: 'landing'
      },
      {
        highlight: '.reviews-section',
        title: 'Área de Avaliações',
        description: 'Aqui você pode comentar, incluir fotos e ver o comentário da comunidade, tudo isso para você ter a melhor experiência.',
        icon: <MessageSquare size={20} className="text-food-orange" />,
        page: 'reviews'
      },
      {
        highlight: '.ai-summary-section',
        title: 'Resumo por IA',
        description: 'A nossa inteligência artificial resume tudo para você!',
        icon: <Sparkles size={20} className="text-food-orange" />,
        page: 'reviews'
      }
    ];

    // Get current step based on the step number and current page
    const currentStepIndex = step - 1;
    
    // Only show steps that match the current page
    const currentStep = steps[currentStepIndex];
    
    // If we're on the wrong page for this step, don't render the step content
    if (currentStep.page !== currentPage) {
      return null;
    }
    
    return (
      <div className="py-4">
        {/* Step indicator */}
        <div className="flex justify-center mb-4">
          {steps.map((_, idx) => (
            <div 
              key={idx} 
              className={`h-2 w-8 mx-1 rounded-full ${idx === currentStepIndex ? 'bg-food-orange' : 'bg-gray-200'}`}
            />
          ))}
        </div>
        
        <div className="flex items-center gap-2 mb-3">
          {currentStep.icon}
          <h3 className="font-bold">{currentStep.title}</h3>
        </div>
        
        <p className="text-gray-600 mb-6">{currentStep.description}</p>
        
        <div className="text-xs text-gray-500 mb-4 text-center">
          Passo {step}/{totalSteps}
        </div>
        
        <div className="flex gap-2">
          <Button
            variant="outline"
            className="flex-1"
            onClick={handleClose}
          >
            Fechar
          </Button>
          <Button
            className="flex-1 bg-food-orange hover:bg-food-orange-dark"
            onClick={nextStep}
          >
            {step === totalSteps ? 'Concluir' : 'Avançar'}
          </Button>
        </div>
      </div>
    );
  };

  // Conclusion content
  const renderConclusionContent = () => (
    <div className="text-center space-y-4 py-4">
      <div className="flex justify-center mb-2">
        <div className="h-16 w-16 bg-food-orange/10 rounded-full flex items-center justify-center">
          <Sparkles size={32} className="text-food-orange" />
        </div>
      </div>
      
      <h3 className="text-xl font-bold">Pronto!</h3>
      
      <p className="text-gray-600 px-2">
        Agora você conhece as novidades. Aproveite para explorar as sacolas recomendadas e fazer sua próxima compra com mais segurança.
      </p>
      
      <div className="pt-4">
        <Button
          className="w-full bg-food-orange hover:bg-food-orange-dark"
          onClick={handleComplete}
        >
          Explorar e comprar agora
        </Button>
      </div>
    </div>
  );

  // Render content based on current step
  const renderContent = () => {
    if (step === 0) return renderWelcomeContent();
    if (step >= 1 && step <= totalSteps) return renderTourStep();
    return renderConclusionContent();
  };

  const getHighlightedElements = () => {
    if (step === 0 || step > totalSteps) return null;
    
    const steps = [
      {
        highlight: '.featured-bags-section',
        page: 'landing'
      },
      {
        highlight: '.reviews-section',
        page: 'reviews'
      },
      {
        highlight: '.ai-summary-section',
        page: 'reviews'
      }
    ];
    
    const currentStepIndex = step - 1;
    const currentStep = steps[currentStepIndex];
    
    // Only show highlight if we're on the correct page for this step
    if (currentStep.page !== currentPage) {
      return null;
    }
    
    // Landing page highlight
    if (currentPage === 'landing' && step === 1) {
      return (
        <div className="fixed inset-0 pointer-events-none z-40">
          <div className="absolute inset-0 bg-black/30">
            <div className="featured-bags-section-highlight absolute top-[210px] left-[50%] transform -translate-x-1/2 w-[90%] max-w-screen-md h-[150px] border-4 border-yellow-400 rounded-xl animate-pulse"></div>
          </div>
        </div>
      );
    } 
    
    // Reviews page highlights
    else if (currentPage === 'reviews') {
      if (step === 2) {
        return (
          <div className="fixed inset-0 pointer-events-none z-40">
            <div className="absolute inset-0 bg-black/30">
              <div className="reviews-section-highlight absolute top-[380px] left-[50%] transform -translate-x-1/2 w-[90%] max-w-screen-md h-[350px] border-4 border-yellow-400 rounded-xl animate-pulse"></div>
            </div>
          </div>
        );
      } else if (step === 3) {
        return (
          <div className="fixed inset-0 pointer-events-none z-40">
            <div className="absolute inset-0 bg-black/30">
              <div className="ai-summary-highlight absolute top-[280px] left-[50%] transform -translate-x-1/2 w-[90%] max-w-screen-md h-[120px] border-4 border-yellow-400 rounded-xl animate-pulse"></div>
            </div>
          </div>
        );
      }
    }
    
    return null;
  };

  return (
    <>
      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className="sm:max-w-md bg-white/90 backdrop-blur-md">
          {renderContent()}
        </DialogContent>
      </Dialog>

      {/* Highlight elements */}
      {getHighlightedElements()}
    </>
  );
};

export default GuidedTourModal;
