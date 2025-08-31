import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SimpleBreadcrumb } from "@/components/ui/SimpleBreadcrumb";
import { Button } from "@/components/ui/button";
import { Tv, Film, Music, Baby } from "lucide-react";

const Canais = () => {
  return (
    <>
      <Helmet>
        <title>Lista +100 Mil Canais IPTV - ESPN, SporTV, HBO | Ar Play</title>
        <meta name="description" content="Mais de 100 mil canais IPTV Ar Play: ESPN, SporTV, HBO, Netflix, Globo, Band e muito mais! Qualidade HD/4K, EPG completo. Veja a lista!" />
        <meta name="keywords" content="lista canais iptv, canais esportes iptv, espn iptv, globo iptv, canais hd iptv, programação iptv" />
        <link rel="canonical" href="https://arplaydigital.com/canais" />
      </Helmet>

      <div className="min-h-screen bg-black">
        <Header />
        <section className="bg-muted/10 py-4">
          <div className="container mx-auto px-4">
            <SimpleBreadcrumb currentPage="Canais" />
          </div>
        </section>
        
        <main className="pt-0">

          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-primary/20 to-secondary/20">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                +10.000 Canais Disponíveis
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                A maior variedade de canais em alta qualidade. Esportes, filmes, séries e muito mais!
              </p>
              <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg">
                TESTE GRÁTIS AGORA
              </Button>
            </div>
          </section>

          {/* Content Section */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <img 
                    src="/placeholder.svg" 
                    alt="Lista de canais IPTV" 
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-white mb-6">
                    Variedade Completa
                  </h2>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-card/10 p-4 rounded-lg border border-primary/20">
                      <Tv className="h-8 w-8 text-primary mb-2" />
                      <h3 className="text-white font-semibold mb-1">Esportes</h3>
                      <p className="text-gray-400 text-sm">ESPN, SporTV, Fox Sports</p>
                    </div>
                    
                    <div className="bg-card/10 p-4 rounded-lg border border-primary/20">
                      <Film className="h-8 w-8 text-primary mb-2" />
                      <h3 className="text-white font-semibold mb-1">Filmes & Séries</h3>
                      <p className="text-gray-400 text-sm">HBO, Netflix, Prime</p>
                    </div>
                    
                    <div className="bg-card/10 p-4 rounded-lg border border-primary/20">
                      <Music className="h-8 w-8 text-primary mb-2" />
                      <h3 className="text-white font-semibold mb-1">Música</h3>
                      <p className="text-gray-400 text-sm">MTV, Music Box</p>
                    </div>
                    
                    <div className="bg-card/10 p-4 rounded-lg border border-primary/20">
                      <Baby className="h-8 w-8 text-primary mb-2" />
                      <h3 className="text-white font-semibold mb-1">Infantil</h3>
                      <p className="text-gray-400 text-sm">Cartoon Network, Disney</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-white">Categorias Disponíveis:</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        Canais abertos nacionais
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        Canais fechados premium
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        Canais internacionais
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        24h de programação
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Canais;