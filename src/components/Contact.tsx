import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      info: "(11) 9 9999-9999",
      subtitle: "Ligue agora para falar conosco"
    },
    {
      icon: Mail,
      title: "E-mail",
      info: "contato@magrinhoautos.com.br",
      subtitle: "Resposta em até 2 horas"
    },
    {
      icon: MapPin,
      title: "Endereço",
      info: "Av. Principal, 1234 - São Paulo, SP",
      subtitle: "Venha nos visitar"
    },
    {
      icon: Clock,
      title: "Funcionamento",
      info: "Seg à Sex: 8h às 18h | Sáb: 8h às 14h",
      subtitle: "Domingo: Fechado"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-luxury-red/10 border border-luxury-red/20 rounded-full mb-6">
            <MessageCircle className="w-4 h-4 text-luxury-red" />
            <span className="text-sm text-luxury-red font-medium">Fale Conosco</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Vamos <span className="text-transparent bg-gradient-red bg-clip-text">Conversar</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Estamos prontos para ajudar você a encontrar o carro perfeito. Entre em contato conosco!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-foreground">Entre em Contato</h3>
              <p className="text-lg text-muted-foreground">
                Nossa equipe está sempre disponível para esclarecer suas dúvidas e ajudar você na escolha do veículo ideal.
              </p>
            </div>

            <div className="grid gap-6">
              {contactInfo.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <Card 
                    key={index}
                    className="group hover:shadow-red-glow transition-all duration-300 border-border bg-background/50 backdrop-blur-sm"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-luxury-red/10 border border-luxury-red/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="w-6 h-6 text-luxury-red" />
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-foreground group-hover:text-luxury-red transition-colors">
                            {item.title}
                          </h4>
                          <p className="text-foreground font-medium">{item.info}</p>
                          <p className="text-sm text-muted-foreground">{item.subtitle}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Quick Actions */}
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-foreground">Ações Rápidas</h4>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" className="flex-1">
                  <Phone className="w-4 h-4 mr-2" />
                  Ligar Agora
                </Button>
                <Button variant="outline" className="flex-1">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-scale-in">
            <Card className="border-border bg-background shadow-luxury">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="text-center space-y-2">
                    <h3 className="text-2xl font-bold text-foreground">Envie uma Mensagem</h3>
                    <p className="text-muted-foreground">Preencha o formulário e entraremos em contato</p>
                  </div>

                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Nome</label>
                        <Input placeholder="Seu nome completo" className="bg-muted/30 border-border" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Telefone</label>
                        <Input placeholder="(11) 9 9999-9999" className="bg-muted/30 border-border" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">E-mail</label>
                      <Input placeholder="seu@email.com" type="email" className="bg-muted/30 border-border" />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Interesse</label>
                      <Input placeholder="Que tipo de veículo procura?" className="bg-muted/30 border-border" />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Mensagem</label>
                      <Textarea 
                        placeholder="Conte-nos mais sobre o que você procura..."
                        className="bg-muted/30 border-border min-h-[120px]"
                      />
                    </div>

                    <Button variant="hero" size="lg" className="w-full">
                      Enviar Mensagem
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      Ao enviar, você concorda com nossos termos de privacidade
                    </p>
                  </form>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;