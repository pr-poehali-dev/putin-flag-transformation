import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMorphed, setIsMorphed] = useState(false);

  const handleToggle = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setIsMorphed(!isMorphed);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4 overflow-hidden">
      <div className="max-w-6xl w-full mx-auto text-center space-y-12">
        
        <div className="space-y-4 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight">
            Интерактивная морфинг-анимация
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Нажмите на изображение, чтобы увидеть плавную трансформацию
          </p>
        </div>

        <div className="relative flex items-center justify-center py-12">
          <div 
            onClick={handleToggle}
            className={`
              relative cursor-pointer transition-all duration-2000 ease-in-out
              ${isAnimating ? 'scale-95' : 'hover:scale-105'}
            `}
            style={{
              width: '100%',
              maxWidth: '800px',
              aspectRatio: '3/2'
            }}
          >
            <div 
              className={`
                absolute inset-0 transition-all duration-2000 ease-in-out
                ${isMorphed ? 'opacity-0 scale-50 rotate-180' : 'opacity-100 scale-100 rotate-0'}
              `}
            >
              <svg 
                viewBox="0 0 900 600" 
                className="w-full h-full drop-shadow-2xl"
                style={{ filter: 'drop-shadow(0 25px 50px rgba(0,0,0,0.5))' }}
              >
                <rect width="900" height="200" fill="hsl(var(--flag-white))" />
                <rect y="200" width="900" height="200" fill="hsl(var(--flag-blue))" />
                <rect y="400" width="900" height="200" fill="hsl(var(--flag-red))" />
              </svg>
            </div>

            <div 
              className={`
                absolute inset-0 transition-all duration-2000 ease-in-out
                ${isMorphed ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-50 -rotate-180'}
              `}
            >
              <img 
                src="https://v3b.fal.media/files/b/zebra/gFokogs8oNbRZqUNB9tyH_output.png"
                alt="Morphed portrait"
                className="w-full h-full object-contain drop-shadow-2xl"
                style={{ filter: 'drop-shadow(0 25px 50px rgba(0,0,0,0.5))' }}
              />
            </div>

            {isAnimating && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin" />
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
          <Button
            onClick={handleToggle}
            disabled={isAnimating}
            size="lg"
            className="text-lg px-8 py-6 transition-all hover:scale-105"
          >
            <Icon name={isMorphed ? "Undo2" : "Play"} className="mr-2" size={24} />
            {isMorphed ? 'Вернуть флаг' : 'Запустить анимацию'}
          </Button>
          
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Icon name="Info" size={16} />
            <span>Кликните на изображение для переключения</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 animate-fade-in">
          <div className="p-6 rounded-lg bg-card border border-border hover:border-primary transition-all hover:scale-105">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
              <Icon name="Sparkles" className="text-primary" size={24} />
            </div>
            <h3 className="text-lg font-semibold mb-2">Плавная анимация</h3>
            <p className="text-sm text-muted-foreground">
              2 секунды безупречного морфинга с rotation и scale эффектами
            </p>
          </div>

          <div className="p-6 rounded-lg bg-card border border-border hover:border-primary transition-all hover:scale-105">
            <div className="w-12 h-12 rounded-full bg-flagBlue/10 flex items-center justify-center mb-4 mx-auto">
              <Icon name="MousePointer2" className="text-flagBlue" size={24} />
            </div>
            <h3 className="text-lg font-semibold mb-2">Интерактивность</h3>
            <p className="text-sm text-muted-foreground">
              Полный контроль через клик или кнопку управления
            </p>
          </div>

          <div className="p-6 rounded-lg bg-card border border-border hover:border-primary transition-all hover:scale-105">
            <div className="w-12 h-12 rounded-full bg-flagRed/10 flex items-center justify-center mb-4 mx-auto">
              <Icon name="Palette" className="text-flagRed" size={24} />
            </div>
            <h3 className="text-lg font-semibold mb-2">Современный дизайн</h3>
            <p className="text-sm text-muted-foreground">
              Чистая композиция в духе minimalism с акцентом на анимации
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Index;
