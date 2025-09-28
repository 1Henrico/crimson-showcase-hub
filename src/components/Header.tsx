import { Button } from "@/components/ui/button";
import logoMagrinho from "@/assets/logo-magrinho.jpg";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img 
              src={logoMagrinho} 
              alt="Magrinho Automóveis" 
              className="h-12 w-auto object-contain"
            />
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors duration-300">
              Início
            </a>
            <a href="#vehicles" className="text-foreground hover:text-primary transition-colors duration-300">
              Veículos
            </a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors duration-300">
              Serviços
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors duration-300">
              Sobre
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors duration-300">
              Contato
            </a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Button variant="outline" className="hidden md:inline-flex">
              Agendar Visita
            </Button>
            <Button variant="hero">
              Fale Conosco
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;