import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SimpleBreadcrumb } from "@/components/ui/SimpleBreadcrumb";
import { Button } from "@/components/ui/button";
import { Smartphone, Tv, Monitor, Tablet } from "lucide-react";
import Pricing from "@/components/Pricing";

const IptvFilmes = () => {
  return (
    <>
      <Helmet>
        <title>IPTV Filmes – Tenha Cinema em Casa com Um Clique</title>
        <meta name="description" content="Assista aos melhores títulos com o iptv filmes. Tenha acesso a filmes on demand, canais 24h e catálogo completo em alta qualidade. Teste grátis disponível!" />
        <meta name="keywords" content="iptv filmes, melhores filmes iptv, lista de filmes iptv, iptv com filmes on demand, canais de filmes iptv, aplicativo de filmes iptv, preço iptv" />
        <meta name="author" content="IPTV Service" />
        
        <meta property="og:title" content="IPTV Filmes – Tenha Cinema em Casa com Um Clique" />
        <meta property="og:description" content="Assista aos melhores títulos com o iptv filmes. Tenha acesso a filmes on demand, canais 24h e catálogo completo em alta qualidade. Teste grátis disponível!" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/placeholder.svg" />
        <meta property="og:url" content="https://seudominio.com/iptv-filmes" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="IPTV Filmes – Tenha Cinema em Casa com Um Clique" />
        <meta name="twitter:description" content="Assista aos melhores títulos com o iptv filmes. Tenha acesso a filmes on demand, canais 24h e catálogo completo em alta qualidade. Teste grátis disponível!" />
        <meta name="twitter:image" content="/placeholder.svg" />
        
        <link rel="canonical" href="https://seudominio.com/iptv-filmes" />
      </Helmet>

      <div className="min-h-screen bg-black">
        <Header />
        <section className="bg-muted/10 py-4">
          <div className="container mx-auto px-4">
            <SimpleBreadcrumb currentPage="IPTV Filmes" />
          </div>
        </section>
        
        <main className="pt-0">

          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-primary/20 to-secondary/20">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                IPTV Filmes
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Tenha cinema em casa com um clique! Assista aos melhores títulos em alta qualidade, catálogo completo e filmes on demand.
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
                    alt="IPTV Filmes" 
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-white mb-6">
                    Player Completo
                  </h2>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-card/10 p-4 rounded-lg border border-primary/20">
                      <Smartphone className="h-8 w-8 text-primary mb-2" />
                      <h3 className="text-white font-semibold mb-1">Mobile</h3>
                      <p className="text-gray-400 text-sm">Android e iOS</p>
                    </div>
                    
                    <div className="bg-card/10 p-4 rounded-lg border border-primary/20">
                      <Tv className="h-8 w-8 text-primary mb-2" />
                      <h3 className="text-white font-semibold mb-1">Smart TV</h3>
                      <p className="text-gray-400 text-sm">Todas as marcas</p>
                    </div>
                    
                    <div className="bg-card/10 p-4 rounded-lg border border-primary/20">
                      <Monitor className="h-8 w-8 text-primary mb-2" />
                      <h3 className="text-white font-semibold mb-1">PC/Mac</h3>
                      <p className="text-gray-400 text-sm">Computadores</p>
                    </div>
                    
                    <div className="bg-card/10 p-4 rounded-lg border border-primary/20">
                      <Tablet className="h-8 w-8 text-primary mb-2" />
                      <h3 className="text-white font-semibold mb-1">TV Box</h3>
                      <p className="text-gray-400 text-sm">Android TV</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-white">Principais Recursos:</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        Mais de 100 mil conteúdos
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        Qualidade HD, Full HD e 4K
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        Canais nacionais e internacionais
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        Suporte técnico especializado
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <Pricing />

          {/* Text Content Section */}
          <section className="py-16 bg-muted/5">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto prose prose-invert">
                <div className="text-gray-300 space-y-6 text-base leading-relaxed">
                  <p className="text-lg">
                    Com o iptv filmes, sua televisão, celular ou computador se transforma em uma verdadeira sala de cinema. Basta instalar um aplicativo compatível e ter internet estável para acessar milhares de títulos atualizados, em alta qualidade e sem limitações. Esqueça filas, mensalidades caras e a programação limitada da TV por assinatura.
                  </p>

                  <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">
                    Melhores filmes IPTV
                  </h2>
                  
                  <p>
                    Nosso catálogo reúne os melhores filmes IPTV, desde grandes lançamentos até clássicos que marcaram gerações. Você pode escolher entre gêneros como ação, comédia, drama, romance, terror e muito mais. Tudo isso disponível sob demanda, para assistir quando e onde quiser.
                  </p>

                  <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">
                    Lista de filmes IPTV
                  </h2>

                  <p>
                    Uma das grandes vantagens é ter acesso a uma lista de filmes IPTV organizada e atualizada diariamente. Com isso, você não perde tempo procurando opções, já que o conteúdo fica separado por categorias, popularidade ou novidades.
                  </p>

                  <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">
                    IPTV com filmes on demand
                  </h2>

                  <p>
                    O modelo tradicional de TV sempre limitou os horários de exibição. Com o IPTV com filmes on demand, essa barreira desaparece. Agora, você escolhe o que assistir, pausa, avança ou retoma exatamente de onde parou. Mais liberdade, mais conveniência e muito mais entretenimento.
                  </p>

                  <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">
                    Canais de filmes IPTV
                  </h2>

                  <p>
                    Além dos conteúdos sob demanda, você também pode acompanhar canais de filmes IPTV que transmitem programação ao vivo, 24 horas por dia. Assim, quem prefere a experiência de "zappear" entre canais também encontra diversão sem fim.
                  </p>

                  <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">
                    Aplicativo de filmes IPTV
                  </h2>

                  <p>
                    Para que tudo isso funcione, basta instalar um aplicativo de filmes IPTV. Ele é compatível com celulares Android e iOS, Smart TVs, TV Box e computadores. A interface é simples e amigável, pensada para qualquer usuário acessar rapidamente seu conteúdo preferido sem dificuldades.
                  </p>

                  <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">
                    Benefícios do IPTV Filmes
                  </h2>

                  <ul className="list-disc pl-6 space-y-2">
                    <li>Acesso a milhares de títulos, incluindo lançamentos.</li>
                    <li>Filmes sob demanda e canais 24h de cinema.</li>
                    <li>Qualidade de imagem em HD, Full HD e até 4K.</li>
                    <li>Compatível com diferentes dispositivos.</li>
                    <li>Atualizações constantes no catálogo.</li>
                  </ul>

                  <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">
                    Preço IPTV acessível
                  </h2>

                  <p>
                    Muitos acreditam que ter uma biblioteca tão completa custa caro, mas o preço IPTV é bem mais acessível que qualquer serviço de TV convencional. Você paga menos e recebe muito mais opções, sem contratos longos ou cobranças escondidas.
                  </p>

                  <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">
                    IPTV Filmes: entretenimento sem limites
                  </h2>

                  <p>
                    Imagine reunir a família, preparar a pipoca e escolher entre milhares de opções de cinema na sua tela. É isso que o iptv filmes oferece: liberdade de escolha, qualidade de imagem impecável e conveniência absoluta.
                  </p>

                  <div className="text-center mt-8">
                    <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg">
                      SOLICITAR TESTE GRATUITO
                    </Button>
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

export default IptvFilmes;