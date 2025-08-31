import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isRecursosOpen, setIsRecursosOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-white">
          IPTV VERIOS
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-white hover:text-primary transition-colors">
            Início
          </Link>
          <div className="relative group">
            <button 
              className="text-white hover:text-primary transition-colors flex items-center gap-1"
              onMouseEnter={() => setIsRecursosOpen(true)}
              onMouseLeave={() => setIsRecursosOpen(false)}
            >
              Recursos
              <ChevronDown size={16} />
            </button>
            {isRecursosOpen && (
              <div 
                className="absolute top-full left-0 mt-2 w-48 bg-gray-900 border border-gray-700 rounded-lg shadow-lg py-2 z-50"
                onMouseEnter={() => setIsRecursosOpen(true)}
                onMouseLeave={() => setIsRecursosOpen(false)}
              >
                <Link to="/dispositivos" className="block px-4 py-2 text-white hover:bg-gray-800 hover:text-primary transition-colors">
                  Dispositivos
                </Link>
                <Link to="/canais" className="block px-4 py-2 text-white hover:bg-gray-800 hover:text-primary transition-colors">
                  Canais
                </Link>
                <Link to="/streamings" className="block px-4 py-2 text-white hover:bg-gray-800 hover:text-primary transition-colors">
                  Streamings
                </Link>
              </div>
            )}
          </div>
          <Link to="/planos" className="text-white hover:text-primary transition-colors">
            Planos
          </Link>
          <Link to="/sobre" className="text-white hover:text-primary transition-colors">
            Sobre
          </Link>
          <Link to="/blog" className="text-white hover:text-primary transition-colors">
            Blog
          </Link>
        </nav>

        {/* CTA Button */}
        <Button className="hidden md:block bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2">
          TESTE IPTV GRÁTIS
        </Button>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black border-t border-gray-800">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link to="/" className="text-white hover:text-primary transition-colors">
              Início
            </Link>
            <div className="space-y-2">
              <div className="text-white font-medium">Recursos</div>
              <div className="pl-4 space-y-2">
                <Link to="/dispositivos" className="block text-gray-300 hover:text-primary transition-colors">
                  Dispositivos
                </Link>
                <Link to="/canais" className="block text-gray-300 hover:text-primary transition-colors">
                  Canais
                </Link>
                <Link to="/streamings" className="block text-gray-300 hover:text-primary transition-colors">
                  Streamings
                </Link>
              </div>
            </div>
            <Link to="/planos" className="text-white hover:text-primary transition-colors">
              Planos
            </Link>
            <Link to="/sobre" className="text-white hover:text-primary transition-colors">
              Sobre
            </Link>
            <Link to="/blog" className="text-white hover:text-primary transition-colors">
              Blog
            </Link>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 w-full">
              TESTE IPTV GRÁTIS
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;