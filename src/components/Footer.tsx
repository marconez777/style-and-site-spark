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
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">TV</span>
              </div>
              <span className="text-xl font-bold text-foreground">IPTV Pro</span>
            </div>
            
            <p className="text-muted-foreground">
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
            <h3 className="text-lg font-semibold text-foreground mb-4">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-muted-foreground hover:text-primary transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">
                  Recursos
                </a>
              </li>
              <li>
                <a href="#plans" className="text-muted-foreground hover:text-primary transition-colors">
                  Planos
                </a>
              </li>
              <li>
                <a href="#support" className="text-muted-foreground hover:text-primary transition-colors">
                  Suporte
                </a>
              </li>
              <li>
                <a href="#faq" className="text-muted-foreground hover:text-primary transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Suporte</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-muted-foreground">
                <Phone className="w-4 h-4 mr-3" />
                <span>(11) 99999-9999</span>
              </li>
              <li className="flex items-center text-muted-foreground">
                <Mail className="w-4 h-4 mr-3" />
                <span>contato@iptvpro.com.br</span>
              </li>
              <li className="flex items-start text-muted-foreground">
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
            <h3 className="text-lg font-semibold text-foreground mb-4">Newsletter</h3>
            <p className="text-muted-foreground mb-4">
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

            <div className="mt-4 text-sm text-muted-foreground">
              ✓ Promoções exclusivas<br />
              ✓ Sem spam garantido
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © 2024 IPTV Pro. Todos os direitos reservados.
            </div>
            
            <div className="flex flex-wrap items-center gap-6 text-sm">
              <a href="#privacy" className="text-muted-foreground hover:text-primary transition-colors">
                Política de Privacidade
              </a>
              <a href="#terms" className="text-muted-foreground hover:text-primary transition-colors">
                Termos de Uso
              </a>
              <a href="#cookies" className="text-muted-foreground hover:text-primary transition-colors">
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