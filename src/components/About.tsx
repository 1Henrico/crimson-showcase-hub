import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Trophy, Heart, Target } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Paixão por Carros",
      description: "Cada veículo é tratado com o carinho que merece"
    },
    {
      icon: Trophy,
      title: "Excelência",
      description: "Sempre buscamos superar expectativas"
    },
    {
      icon: Target,
      title: "Transparência",
      description: "Honestidade em cada negociação"
    }
  ];

  const achievements = [
    "Mais de 10 anos no mercado automotivo",
    "Mais de 1.000 clientes satisfeitos",
    "Parcerias com as melhores instituições financeiras",
    "Equipe especializada e certificada",
    "Atendimento personalizado para cada cliente",
    "Processos transparentes e seguros"
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-luxury-red/10 border border-luxury-red/20 rounded-full">
                <span className="text-sm text-luxury-red font-medium">Nossa História</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
                Sobre a <span className="text-transparent bg-gradient-red bg-clip-text">Magrinho</span> Automóveis
              </h2>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Nascemos da paixão por automóveis e do desejo de oferecer a melhor experiência de compra no mercado. 
                Com mais de uma década de experiência, nos especializamos em conectar pessoas aos carros dos seus sonhos.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nossa missão é transformar o processo de compra de veículos em uma experiência excepcional, 
                combinando qualidade, transparência e atendimento personalizado.
              </p>
            </div>

            {/* Achievements */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground mb-6">Por que escolher a Magrinho?</h3>
              <div className="grid gap-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-luxury-red flex-shrink-0" />
                    <span className="text-foreground">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>

            <Button variant="hero" size="lg">
              Conheça Nossa História
            </Button>
          </div>

          {/* Right Column - Values Cards */}
          <div className="space-y-6 animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-red rounded-3xl blur-3xl opacity-10"></div>
              <div className="relative space-y-6">
                <h3 className="text-3xl font-bold text-foreground text-center mb-8">Nossos Valores</h3>
                
                {values.map((value, index) => {
                  const IconComponent = value.icon;
                  return (
                    <Card 
                      key={index}
                      className="group hover:shadow-red-glow transition-all duration-500 border-border bg-gradient-card"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-luxury-red/10 border border-luxury-red/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <IconComponent className="w-6 h-6 text-luxury-red" />
                          </div>
                          <div>
                            <h4 className="text-lg font-bold text-foreground group-hover:text-luxury-red transition-colors">
                              {value.title}
                            </h4>
                            <p className="text-muted-foreground">
                              {value.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Stats */}
            <Card className="bg-gradient-red border-0 shadow-luxury">
              <CardContent className="p-8 text-center">
                <h4 className="text-2xl font-bold text-foreground mb-2">
                  Compromisso com a Excelência
                </h4>
                <p className="text-foreground/80 mb-6">
                  Cada cliente é único e merece um atendimento especial
                </p>
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-foreground">98%</div>
                    <div className="text-sm text-foreground/80">Satisfação</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-foreground">24h</div>
                    <div className="text-sm text-foreground/80">Suporte</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;