import { Card, CardContent } from "@/components/ui/card";
import { Shield, Wrench, CreditCard, Users, Phone, Award } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: "Garantia Estendida",
      description: "Proteção completa para seu investimento com garantia de até 2 anos em todos os nossos veículos."
    },
    {
      icon: Wrench,
      title: "Manutenção Completa",
      description: "Oficina especializada com técnicos certificados para manter seu carro sempre em perfeito estado."
    },
    {
      icon: CreditCard,
      title: "Financiamento Facilitado",
      description: "Parcerias com os melhores bancos para oferecer as condições mais vantajosas do mercado."
    },
    {
      icon: Users,
      title: "Consultoria Especializada",
      description: "Equipe experiente para te ajudar a encontrar o veículo ideal para suas necessidades."
    },
    {
      icon: Phone,
      title: "Suporte 24/7",
      description: "Atendimento completo sempre que você precisar, com canal direto para emergências."
    },
    {
      icon: Award,
      title: "Certificação de Qualidade",
      description: "Todos os veículos passam por rigorosa inspeção antes de chegarem até você."
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-luxury-red/10 border border-luxury-red/20 rounded-full mb-6">
            <span className="text-sm text-luxury-red font-medium">Nossos Serviços</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Experiência <span className="text-transparent bg-gradient-red bg-clip-text">Completa</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos muito mais que vendas. Nossa missão é garantir sua satisfação em cada etapa da jornada.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index}
                className="group hover:shadow-luxury transition-all duration-500 border-border bg-background/50 backdrop-blur-sm animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center space-y-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-red rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                    <div className="relative w-16 h-16 bg-gradient-card border border-luxury-red/20 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-luxury-red" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground group-hover:text-luxury-red transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;