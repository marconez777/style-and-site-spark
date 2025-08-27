import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60 sticky top-0 z-50 border-b border-gray-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-primary text-primary-foreground px-2 py-1 rounded font-bold text-lg">
              IPTV
            </div>
            <div className="bg-primary text-primary-foreground px-2 py-1 rounded font-bold text-lg">
              VERIOS
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-white hover:text-primary transition-colors">
              Início
            </a>
            <a href="#features" className="text-white hover:text-primary transition-colors">
              Recursos
            </a>
            <a href="#plans" className="text-white hover:text-primary transition-colors">
              Planos
            </a>
            <a href="#about" className="text-white hover:text-primary transition-colors">
              Sobre
            </a>
            <a href="#blog" className="text-white hover:text-primary transition-colors">
              Blog
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6">
              TESTE IPTV GRÁTIS
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-white hover:text-primary"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-800">
            <nav className="flex flex-col space-y-4 pt-4">
              <a href="#home" className="text-white hover:text-primary transition-colors">
                Início
              </a>
              <a href="#features" className="text-white hover:text-primary transition-colors">
                Recursos
              </a>
              <a href="#plans" className="text-white hover:text-primary transition-colors">
                Planos
              </a>
              <a href="#about" className="text-white hover:text-primary transition-colors">
                Sobre
              </a>
              <a href="#blog" className="text-white hover:text-primary transition-colors">
                Blog
              </a>
              <div className="pt-4">
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full">
                  TESTE IPTV GRÁTIS
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;