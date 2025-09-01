import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>Página Não Encontrada - 404 | Ar Play Digital</title>
        <meta name="description" content="Página não encontrada. Volte para a página inicial do Ar Play Digital e continue navegando pelos nossos conteúdos e serviços IPTV." />
        <meta name="author" content="Ar Play Digital" />
        
        <meta property="og:title" content="Página Não Encontrada - 404 | Ar Play Digital" />
        <meta property="og:description" content="Página não encontrada. Volte para a página inicial do Ar Play Digital e continue navegando pelos nossos conteúdos e serviços IPTV." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/placeholder.svg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Página Não Encontrada - 404" />
        <meta name="twitter:description" content="Página não encontrada. Volte para a página inicial do Ar Play Digital!" />
        <meta name="twitter:image" content="/placeholder.svg" />
      </Helmet>

      <div className="min-h-screen bg-black flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-6xl md:text-8xl font-bold text-primary mb-4">404</h1>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Página Não Encontrada</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-md mx-auto">
              Oops! A página que você está procurando não existe ou foi movida.
            </p>
            <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg">
              <a href="/" className="flex items-center">
                Voltar ao Início
              </a>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default NotFound;
