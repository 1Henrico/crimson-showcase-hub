import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Fuel, Gauge, Calendar, MapPin, Loader2 } from "lucide-react";
import { useVehicles } from "@/hooks/useVehicles";

const FeaturedVehicles = () => {
  const { vehicles, loading } = useVehicles();

  if (loading) {
    return (
      <section id="vehicles" className="py-24 bg-background">
        <div className="container mx-auto px-4 flex items-center justify-center">
          <div className="flex items-center space-x-2">
            <Loader2 className="w-6 h-6 animate-spin" />
            <span className="text-muted-foreground">Carregando veículos...</span>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="vehicles" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-luxury-red/10 border border-luxury-red/20 rounded-full mb-6">
            <span className="text-sm text-luxury-red font-medium">Veículos em Destaque</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Nossos <span className="text-transparent bg-gradient-red bg-clip-text">Melhores</span> Ofertas
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Selecionamos cuidadosamente cada veículo para garantir a melhor experiência de compra
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vehicles.map((vehicle, index) => (
            <Card 
              key={vehicle.id} 
              className={`group hover:shadow-luxury transition-all duration-500 border-border bg-gradient-card overflow-hidden animate-scale-in ${
                vehicle.featured ? 'ring-2 ring-luxury-red/30' : ''
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {vehicle.featured && (
                <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-gradient-red text-foreground text-xs font-semibold rounded-full">
                  DESTAQUE
                </div>
              )}
              
              <div className="relative overflow-hidden">
                <img 
                  src={vehicle.image} 
                  alt={vehicle.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-carbon-black/60 via-transparent to-transparent"></div>
              </div>

              <CardContent className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-luxury-red transition-colors">
                    {vehicle.name}
                  </h3>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-luxury-red">{vehicle.price}</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-luxury-red" />
                    <span>{vehicle.year}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Gauge className="w-4 h-4 text-luxury-red" />
                    <span>{vehicle.km}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Fuel className="w-4 h-4 text-luxury-red" />
                    <span>{vehicle.fuel}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-luxury-red" />
                    <span>{vehicle.location}</span>
                  </div>
                </div>

                <div className="flex gap-2 pt-4">
                  <Button variant="outline" className="flex-1">
                    Ver Detalhes
                  </Button>
                  <Button variant="premium" className="flex-1">
                    Test Drive
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="hero" size="lg">
            Ver Todos os Veículos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedVehicles;