import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">TV</span>
            </div>
            <span className="text-xl font-bold text-foreground">IPTV Pro</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">
              Início
            </a>
            <a href="#features" className="text-foreground hover:text-primary transition-colors">
              Recursos
            </a>
            <a href="#plans" className="text-foreground hover:text-primary transition-colors">
              Planos
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contato
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline">Login</Button>
            <Button>Assinar Agora</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <nav className="flex flex-col space-y-4 pt-4">
              <a href="#home" className="text-foreground hover:text-primary transition-colors">
                Início
              </a>
              <a href="#features" className="text-foreground hover:text-primary transition-colors">
                Recursos
              </a>
              <a href="#plans" className="text-foreground hover:text-primary transition-colors">
                Planos
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">
                Contato
              </a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline" className="w-full">Login</Button>
                <Button className="w-full">Assinar Agora</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;