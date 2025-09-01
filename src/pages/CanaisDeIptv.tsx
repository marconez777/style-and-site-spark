import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Smartphone, Tv, Monitor, Cpu } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SimpleBreadcrumb } from "@/components/ui/SimpleBreadcrumb";
import Pricing from "@/components/Pricing";

const CanaisDeIptv = () => {
  return (
    <>
      <Helmet>
        <title>Canais de IPTV – Assista Tudo em Um Só Lugar</title>
        <meta name="description" content="Assista filmes, séries e esportes em alta qualidade com os canais de iptv. Tenha acesso a lista completa de canais IPTV e aproveite teste grátis hoje mesmo!" />
        <meta name="keywords" content="canais de iptv, lista de canais iptv, canais gratuitos iptv, melhores canais iptv, canais de tv online, iptv ao vivo, preço iptv" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://arplay.lovable.app/canais-de-iptv" />
        <meta property="og:title" content="Canais de IPTV – Assista Tudo em Um Só Lugar" />
        <meta property="og:description" content="Assista filmes, séries e esportes em alta qualidade com os canais de iptv. Tenha acesso a lista completa de canais IPTV e aproveite teste grátis hoje mesmo!" />
        <meta property="og:image" content="https://arplay.lovable.app/placeholder.svg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://arplay.lovable.app/canais-de-iptv" />
        <meta property="twitter:title" content="Canais de IPTV – Assista Tudo em Um Só Lugar" />
        <meta property="twitter:description" content="Assista filmes, séries e esportes em alta qualidade com os canais de iptv. Tenha acesso a lista completa de canais IPTV e aproveite teste grátis hoje mesmo!" />
        <meta property="twitter:image" content="https://arplay.lovable.app/placeholder.svg" />

        <link rel="canonical" href="https://arplay.lovable.app/canais-de-iptv" />
      </Helmet>

      <div className="min-h-screen bg-black">
        <Header />
        <section className="bg-muted/10 py-4">
          <div className="container mx-auto px-4">
            <SimpleBreadcrumb currentPage="Canais de IPTV" />
          </div>
        </section>
        
        <main className="pt-0">
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-primary/20 to-secondary/20">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Canais de IPTV
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Assista tudo em um só lugar! Filmes, séries, esportes e muito mais com a melhor lista de canais IPTV do mercado.
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
                    alt="Canais de IPTV" 
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
                      <Cpu className="h-8 w-8 text-primary mb-2" />
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
                    Os canais de iptv mudaram a forma de consumir entretenimento. Agora, em vez de depender de pacotes engessados, você pode montar sua própria programação e assistir ao que realmente gosta. Com qualidade em HD, Full HD e até 4K, a experiência se torna muito mais completa e acessível.
                  </p>

                  <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">
                    Lista de canais IPTV sempre atualizada
                  </h2>
                  
                  <p>
                    Ao ativar o serviço, você recebe acesso a uma lista de canais IPTV completa e organizada, com conteúdos nacionais e internacionais. São filmes, séries, esportes, notícias, programas infantis e muito mais, todos prontos para serem assistidos na hora que quiser.
                  </p>

                  <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">
                    Canais gratuitos IPTV
                  </h2>

                  <p>
                    Além das opções premium, você também encontra canais gratuitos IPTV, ideais para quem está começando e deseja testar a qualidade do sistema. Assim é possível experimentar transmissões ao vivo sem custo inicial, garantindo confiança antes de contratar um plano definitivo.
                  </p>

                  <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">
                    Melhores canais IPTV para toda a família
                  </h2>

                  <p>
                    Entre os destaques, estão os melhores canais IPTV, que reúnem programação variada para atender todos os gostos:
                  </p>

                  <ul className="list-disc pl-6 space-y-2">
                    <li>Filmes de diferentes gêneros e épocas.</li>
                    <li>Séries completas, incluindo lançamentos.</li>
                    <li>Esportes ao vivo, nacionais e internacionais.</li>
                    <li>Notícias em tempo real.</li>
                    <li>Programação infantil educativa e divertida.</li>
                  </ul>

                  <p>
                    Tudo isso em uma única plataforma, disponível no celular, Smart TV, computador ou TV Box.
                  </p>

                  <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">
                    Canais de TV online com máxima qualidade
                  </h2>

                  <p>
                    Com os canais de TV online via IPTV, você não precisa de antena, parabólica ou cabos. Basta ter uma boa conexão de internet e um aplicativo compatível para acessar milhares de conteúdos com fluidez. A tecnologia IPTV garante estabilidade mesmo em transmissões ao vivo.
                  </p>

                  <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">
                    IPTV ao vivo
                  </h2>

                  <p>
                    Para quem não abre mão de acompanhar jogos, novelas e programas em tempo real, o IPTV ao vivo é um dos maiores diferenciais. Você acompanha a programação no mesmo horário em que é exibida, sem atrasos e com qualidade superior à TV tradicional.
                  </p>

                  <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">
                    Preço IPTV acessível
                  </h2>

                  <p>
                    Outra vantagem é o preço IPTV, muito mais econômico do que pacotes convencionais de TV por assinatura. Em vez de pagar caro por canais que você não assiste, aqui você investe apenas em uma solução personalizada e flexível, com mais conteúdos e menos custos.
                  </p>

                  <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">
                    Por que escolher canais de IPTV?
                  </h2>

                  <ul className="list-disc pl-6 space-y-2">
                    <li>Mais liberdade para montar sua programação.</li>
                    <li>Transmissões estáveis e imagem em alta definição.</li>
                    <li>Opções gratuitas e pacotes premium acessíveis.</li>
                    <li>Compatibilidade com diferentes dispositivos.</li>
                    <li>Conteúdo variado que agrada toda a família.</li>
                  </ul>

                  <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">
                    Experimente hoje mesmo
                  </h2>

                  <p>
                    Com os canais de iptv, você assume o controle da sua programação. Tenha acesso imediato a filmes, séries, notícias e esportes, pagando menos e assistindo mais.
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

export default CanaisDeIptv;