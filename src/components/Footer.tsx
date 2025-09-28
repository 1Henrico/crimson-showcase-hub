import { Facebook, Instagram, Youtube, MapPin, Phone, Mail } from "lucide-react";
import logoMagrinho from "@/assets/logo-magrinho.jpg";

const Footer = () => {
  return (
    <footer className="bg-carbon-black border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <img 
                src={logoMagrinho} 
                alt="Magrinho Automóveis" 
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Há mais de 10 anos conectando pessoas aos carros dos seus sonhos. 
              Qualidade, confiança e transparência em cada negociação.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-luxury-red/10 border border-luxury-red/20 rounded-lg flex items-center justify-center hover:bg-luxury-red hover:border-luxury-red transition-all duration-300 group">
                <Facebook className="w-5 h-5 text-luxury-red group-hover:text-foreground" />
              </a>
              <a href="#" className="w-10 h-10 bg-luxury-red/10 border border-luxury-red/20 rounded-lg flex items-center justify-center hover:bg-luxury-red hover:border-luxury-red transition-all duration-300 group">
                <Instagram className="w-5 h-5 text-luxury-red group-hover:text-foreground" />
              </a>
              <a href="#" className="w-10 h-10 bg-luxury-red/10 border border-luxury-red/20 rounded-lg flex items-center justify-center hover:bg-luxury-red hover:border-luxury-red transition-all duration-300 group">
                <Youtube className="w-5 h-5 text-luxury-red group-hover:text-foreground" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-foreground">Links Rápidos</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-muted-foreground hover:text-luxury-red transition-colors">Início</a></li>
              <li><a href="#vehicles" className="text-muted-foreground hover:text-luxury-red transition-colors">Veículos</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-luxury-red transition-colors">Serviços</a></li>
              <li><a href="#about" className="text-muted-foreground hover:text-luxury-red transition-colors">Sobre</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-luxury-red transition-colors">Contato</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-foreground">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-luxury-red flex-shrink-0" />
                <span className="text-muted-foreground text-sm">
                  Av. Principal, 1234<br />São Paulo, SP
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-luxury-red flex-shrink-0" />
                <span className="text-muted-foreground text-sm">(11) 9 9999-9999</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-luxury-red flex-shrink-0" />
                <span className="text-muted-foreground text-sm">contato@magrinhoautos.com.br</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2024 Magrinho Automóveis. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-luxury-red transition-colors">Política de Privacidade</a>
              <a href="#" className="text-muted-foreground hover:text-luxury-red transition-colors">Termos de Uso</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;