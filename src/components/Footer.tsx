import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin 
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="bg-primary text-primary-foreground px-2 py-1 rounded font-bold text-lg">
                IPTV
              </div>
              <div className="bg-primary text-primary-foreground px-2 py-1 rounded font-bold text-lg">
                VERIOS
              </div>
            </div>
            
            <p className="text-gray-300">
              A melhor experiência IPTV do Brasil. Milhares de canais em qualidade 4K, 
              filmes, séries e esportes ao vivo na palma da sua mão.
            </p>

            <div className="flex space-x-4">
              <Button size="icon" variant="outline">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button size="icon" variant="outline">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button size="icon" variant="outline">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button size="icon" variant="outline">
                <Youtube className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-300 hover:text-primary transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#features" className="text-gray-300 hover:text-primary transition-colors">
                  Recursos
                </a>
              </li>
              <li>
                <a href="#plans" className="text-gray-300 hover:text-primary transition-colors">
                  Planos
                </a>
              </li>
              <li>
                <a href="#support" className="text-gray-300 hover:text-primary transition-colors">
                  Suporte
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-300 hover:text-primary transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Suporte</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-300">
                <Phone className="w-4 h-4 mr-3" />
                <span>(11) 99999-9999</span>
              </li>
              <li className="flex items-center text-gray-300">
                <Mail className="w-4 h-4 mr-3" />
                <span>contato@iptvpro.com.br</span>
              </li>
              <li className="flex items-start text-gray-300">
                <MapPin className="w-4 h-4 mr-3 mt-0.5" />
                <span>São Paulo, SP<br />Brasil</span>
              </li>
            </ul>
            
            <div className="mt-6">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 border border-accent/20">
                <span className="text-sm font-medium text-accent">Atendimento 24/7</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Receba ofertas exclusivas e novidades sobre nossos serviços.
            </p>
            
            <div className="space-y-3">
              <Input 
                placeholder="Seu e-mail" 
                type="email"
                className="bg-background"
              />
              <Button className="w-full">
                Inscrever-se
              </Button>
            </div>

            <div className="mt-4 text-sm text-gray-300">
              ✓ Promoções exclusivas<br />
              ✓ Sem spam garantido
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-300">
              © 2024 IPTV VERIOS. Todos os direitos reservados.
            </div>
            
            <div className="flex flex-wrap items-center gap-6 text-sm">
              <a href="#privacy" className="text-gray-300 hover:text-primary transition-colors">
                Política de Privacidade
              </a>
              <a href="#terms" className="text-gray-300 hover:text-primary transition-colors">
                Termos de Uso
              </a>
              <a href="#cookies" className="text-gray-300 hover:text-primary transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;