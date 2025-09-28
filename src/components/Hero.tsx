import { Button } from "@/components/ui/button";
import { ChevronRight, Star, Award, Users } from "lucide-react";
import heroCarImage from "@/assets/hero-car.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroCarImage} 
          alt="Carro de luxo" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-carbon-black via-carbon-black/80 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-8 animate-slide-up">
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 px-4 py-2 bg-luxury-red/10 border border-luxury-red/20 rounded-full">
                  <Star className="w-4 h-4 text-luxury-red" />
                  <span className="text-sm text-luxury-red font-medium">Excelência em Automóveis</span>
                </div>
                
                <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight">
                  Encontre o
                  <span className="text-transparent bg-gradient-red bg-clip-text"> Carro </span>
                  dos Seus Sonhos
                </h1>
                
                <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                  Na Magrinho Automóveis, oferecemos veículos de qualidade excepcional com a confiança de mais de uma década no mercado.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" className="group">
                  Ver Nossos Carros
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg">
                  Agendar Test Drive
                </Button>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
                <div className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-luxury-red/10 rounded-lg mb-2">
                    <Award className="w-6 h-6 text-luxury-red" />
                  </div>
                  <div className="text-2xl font-bold text-foreground">10+</div>
                  <div className="text-sm text-muted-foreground">Anos de Experiência</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-luxury-red/10 rounded-lg mb-2">
                    <Users className="w-6 h-6 text-luxury-red" />
                  </div>
                  <div className="text-2xl font-bold text-foreground">1000+</div>
                  <div className="text-sm text-muted-foreground">Clientes Satisfeitos</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-luxury-red/10 rounded-lg mb-2">
                    <Star className="w-6 h-6 text-luxury-red" />
                  </div>
                  <div className="text-2xl font-bold text-foreground">5.0</div>
                  <div className="text-sm text-muted-foreground">Avaliação Média</div>
                </div>
              </div>
            </div>
            
            {/* Right Column - Visual Elements */}
            <div className="hidden lg:block relative animate-fade-in">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-red rounded-2xl blur-3xl opacity-20 animate-glow"></div>
                <div className="relative bg-gradient-card p-8 rounded-2xl border border-border shadow-luxury">
                  <div className="space-y-6">
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-foreground mb-2">Atendimento Premium</h3>
                      <p className="text-muted-foreground">Consultoria especializada para encontrar o veículo perfeito</p>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-luxury-red rounded-full"></div>
                        <span className="text-foreground">Financiamento facilitado</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-luxury-red rounded-full"></div>
                        <span className="text-foreground">Garantia estendida</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-luxury-red rounded-full"></div>
                        <span className="text-foreground">Revisão completa inclusa</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-luxury-red rounded-full"></div>
                        <span className="text-foreground">Suporte pós-venda</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Action */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-luxury-red rounded-full flex justify-center">
          <div className="w-1 h-3 bg-luxury-red rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;