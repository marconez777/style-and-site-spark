import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";
import { Play, Download, Monitor, Wifi } from "lucide-react";

const Streamings = () => {
  return (
    <>
      <Helmet>
        <title>Streamings e VOD - IPTV VERIOS</title>
        <meta name="description" content="Acesse milhares de filmes e séries em streaming. Netflix, Prime Video, Disney+ e muito mais em um só lugar." />
        <meta name="keywords" content="streaming IPTV, VOD, filmes online, séries streaming" />
        <link rel="canonical" href="/streamings" />
      </Helmet>

      <div className="min-h-screen bg-black">
        <Header />
        
        <main className="pt-20">
          {/* Breadcrumbs */}
          <section className="bg-muted/10 py-4">
            <div className="container mx-auto px-4">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link to="/" className="text-muted-foreground hover:text-primary">
                        Início
                      </Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage className="text-white">Streamings</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </section>

          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-primary/20 to-secondary/20">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Streamings Ilimitados
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Todos os principais streamings em um só lugar. Filmes, séries e documentários sem limite!
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
                    alt="Streamings disponíveis no IPTV" 
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-white mb-6">
                    Biblioteca Completa
                  </h2>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-card/10 p-4 rounded-lg border border-primary/20">
                      <Play className="h-8 w-8 text-primary mb-2" />
                      <h3 className="text-white font-semibold mb-1">Netflix</h3>
                      <p className="text-gray-400 text-sm">Séries e filmes originais</p>
                    </div>
                    
                    <div className="bg-card/10 p-4 rounded-lg border border-primary/20">
                      <Download className="h-8 w-8 text-primary mb-2" />
                      <h3 className="text-white font-semibold mb-1">Prime Video</h3>
                      <p className="text-gray-400 text-sm">Amazon Originals</p>
                    </div>
                    
                    <div className="bg-card/10 p-4 rounded-lg border border-primary/20">
                      <Monitor className="h-8 w-8 text-primary mb-2" />
                      <h3 className="text-white font-semibold mb-1">Disney+</h3>
                      <p className="text-gray-400 text-sm">Marvel, Star Wars</p>
                    </div>
                    
                    <div className="bg-card/10 p-4 rounded-lg border border-primary/20">
                      <Wifi className="h-8 w-8 text-primary mb-2" />
                      <h3 className="text-white font-semibold mb-1">HBO Max</h3>
                      <p className="text-gray-400 text-sm">Conteúdo premium</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-white">Vantagens do Streaming:</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        Catálogo sempre atualizado
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        Qualidade 4K disponível
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        Sem anúncios ou interrupções
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        Múltiplas legendas e idiomas
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

export default Streamings;