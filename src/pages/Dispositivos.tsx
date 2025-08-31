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
import { Smartphone, Tv, Monitor, Tablet } from "lucide-react";

const Dispositivos = () => {
  return (
    <>
      <Helmet>
        <title>Dispositivos Compatíveis - IPTV VERIOS</title>
        <meta name="description" content="Confira todos os dispositivos compatíveis com nosso serviço IPTV. Smart TV, Android, iOS, PC e muito mais." />
        <meta name="keywords" content="IPTV dispositivos, Smart TV, Android TV, iOS, streaming dispositivos" />
        <link rel="canonical" href="/dispositivos" />
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
                    <BreadcrumbPage className="text-white">Dispositivos</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </section>

          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-primary/20 to-secondary/20">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Dispositivos Compatíveis
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Nosso IPTV funciona em praticamente todos os dispositivos. Assista onde e quando quiser!
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
                    alt="Dispositivos compatíveis com IPTV" 
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-white mb-6">
                    Compatibilidade Universal
                  </h2>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-card/10 p-4 rounded-lg border border-primary/20">
                      <Smartphone className="h-8 w-8 text-primary mb-2" />
                      <h3 className="text-white font-semibold mb-1">Android/iOS</h3>
                      <p className="text-gray-400 text-sm">Smartphones e tablets</p>
                    </div>
                    
                    <div className="bg-card/10 p-4 rounded-lg border border-primary/20">
                      <Tv className="h-8 w-8 text-primary mb-2" />
                      <h3 className="text-white font-semibold mb-1">Smart TV</h3>
                      <p className="text-gray-400 text-sm">Samsung, LG, Sony</p>
                    </div>
                    
                    <div className="bg-card/10 p-4 rounded-lg border border-primary/20">
                      <Monitor className="h-8 w-8 text-primary mb-2" />
                      <h3 className="text-white font-semibold mb-1">PC/Mac</h3>
                      <p className="text-gray-400 text-sm">Windows e macOS</p>
                    </div>
                    
                    <div className="bg-card/10 p-4 rounded-lg border border-primary/20">
                      <Tablet className="h-8 w-8 text-primary mb-2" />
                      <h3 className="text-white font-semibold mb-1">TV Box</h3>
                      <p className="text-gray-400 text-sm">Android TV Box</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-white">Principais Recursos:</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        Instalação simples e rápida
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        Interface otimizada para cada dispositivo
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        Sincronização entre dispositivos
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        Suporte técnico completo
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

export default Dispositivos;