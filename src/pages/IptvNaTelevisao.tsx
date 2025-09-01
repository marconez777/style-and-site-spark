import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Smartphone, Tv, Monitor, Cpu } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SimpleBreadcrumb } from "@/components/ui/SimpleBreadcrumb";
import Pricing from "@/components/Pricing";

const IptvNaTelevisao = () => {
  return (
    <>
      <Helmet>
        <title>IPTV na Televisão – Transforme sua TV em uma Central de</title>
        <meta name="description" content="Assista filmes, séries e canais ao vivo em qualidade máxima com iptv na televisão. Compatível com Smart TV, TV Box e apps dedicados. Teste grátis disponível!" />
        <meta name="keywords" content="iptv na televisão, iptv para smart tv, como usar iptv na tv, iptv para tv box, configurar iptv na tv, aplicativo iptv para tv, iptv com canais 4k" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://arplay.lovable.app/iptv-na-televisao" />
        <meta property="og:title" content="IPTV na Televisão – Transforme sua TV em uma Central de" />
        <meta property="og:description" content="Assista filmes, séries e canais ao vivo em qualidade máxima com iptv na televisão. Compatível com Smart TV, TV Box e apps dedicados. Teste grátis disponível!" />
        <meta property="og:image" content="https://arplay.lovable.app/placeholder.svg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://arplay.lovable.app/iptv-na-televisao" />
        <meta property="twitter:title" content="IPTV na Televisão – Transforme sua TV em uma Central de" />
        <meta property="twitter:description" content="Assista filmes, séries e canais ao vivo em qualidade máxima com iptv na televisão. Compatível com Smart TV, TV Box e apps dedicados. Teste grátis disponível!" />
        <meta property="twitter:image" content="https://arplay.lovable.app/placeholder.svg" />

        <link rel="canonical" href="https://arplay.lovable.app/iptv-na-televisao" />
      </Helmet>

      <div className="min-h-screen bg-black">
        <Header />
        <section className="bg-muted/10 py-4">
          <div className="container mx-auto px-4">
            <SimpleBreadcrumb currentPage="IPTV na televisão" />
          </div>
        </section>
        
        <main className="pt-0">
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-primary/20 to-secondary/20">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                IPTV na televisão
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transforme sua TV em uma central de entretenimento completa. Assista filmes, séries e canais ao vivo em qualidade máxima!
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
                    alt="IPTV na televisão" 
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
                    O iptv na televisão revolucionou a maneira como consumimos filmes, séries e canais ao vivo. Não há mais necessidade de antenas, cabos complicados ou pacotes caros de TV por assinatura. Com internet estável e um aplicativo compatível, sua Smart TV se transforma em uma plataforma completa de entretenimento, oferecendo praticidade e liberdade para toda a família.
                  </p>

                  <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">
                    IPTV para Smart TV
                  </h2>
                  
                  <p>
                    Quem possui uma TV moderna pode instalar um IPTV para Smart TV em minutos. Basta baixar o aplicativo recomendado, inserir a lista de canais e pronto: a programação aparece direto na tela da sua sala. Filmes em alta definição, esportes ao vivo e canais internacionais ficam a um clique de distância.
                  </p>

                  <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">
                    Como usar IPTV na TV
                  </h2>

                  <p>
                    Ainda não sabe como usar IPTV na TV? O processo é simples:
                  </p>

                  <ul className="list-disc pl-6 space-y-2">
                    <li>Conecte sua TV à internet.</li>
                    <li>Instale um aplicativo de IPTV.</li>
                    <li>Configure com seus dados ou arquivo M3U.</li>
                    <li>Escolha o canal e assista em tempo real.</li>
                  </ul>

                  <p>
                    Com esses poucos passos, o iptv na televisão fica pronto para uso e garante qualidade de imagem em HD, Full HD e até 4K.
                  </p>

                  <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">
                    IPTV para TV Box
                  </h2>

                  <p>
                    Se a sua TV não for compatível com aplicativos modernos, não há problema. Basta instalar um IPTV para TV Box e conectar via HDMI. Essa alternativa é perfeita para transformar qualquer aparelho antigo em uma TV inteligente, com acesso a milhares de conteúdos sob demanda.
                  </p>

                  <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">
                    Configurar IPTV na TV é rápido
                  </h2>

                  <p>
                    Uma das maiores vantagens está na facilidade. Hoje, qualquer pessoa consegue configurar IPTV na TV sem precisar de ajuda técnica. O aplicativo já traz menus intuitivos, guias de programação e até suporte remoto. É só seguir as instruções e aproveitar.
                  </p>

                  <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">
                    Aplicativo de IPTV para TV
                  </h2>

                  <p>
                    O segredo está em usar um aplicativo de IPTV para TV confiável. Ele garante estabilidade e compatibilidade com diferentes listas de canais. Nosso player, por exemplo, é leve e seguro, evitando travamentos e garantindo a melhor experiência em transmissões ao vivo.
                  </p>

                  <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">
                    IPTV com canais 4K
                  </h2>

                  <p>
                    Quem investiu em uma TV moderna não quer qualidade inferior. Por isso, o iptv com canais 4K se destaca, oferecendo esportes, filmes e séries com detalhes impressionantes e som imersivo. Essa tecnologia coloca você dentro da ação, transformando a sala em uma verdadeira sala de cinema.
                  </p>

                  <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">
                    Por que escolher o IPTV na televisão
                  </h2>

                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Variedade:</strong> milhares de canais nacionais e internacionais.</li>
                    <li><strong>Entretenimento completo:</strong> filmes, séries, esportes e muito mais.</li>
                    <li><strong>Praticidade:</strong> configuração rápida e fácil.</li>
                    <li><strong>Liberdade:</strong> assista quando e onde quiser, sem limitações.</li>
                    <li><strong>Qualidade máxima:</strong> imagens em HD, Full HD e 4K.</li>
                  </ul>

                  <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">
                    Experimente hoje mesmo
                  </h2>

                  <p>
                    Chega de pacotes engessados e programações limitadas. Com o iptv na televisão, você tem controle total sobre o que assiste, personaliza sua lista de canais e garante qualidade incomparável.
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

export default IptvNaTelevisao;