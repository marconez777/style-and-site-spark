import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SimpleBreadcrumb } from "@/components/ui/SimpleBreadcrumb";
import { Button } from "@/components/ui/button";
import { Smartphone, Tv, Monitor, Tablet } from "lucide-react";
import Pricing from "@/components/Pricing";

const IptvPlayerOnline = () => {
  return (
    <>
      <Helmet>
        <title>Teste Agora IPTV Player Online Grátis</title>
        <meta name="description" content="Assista filmes, séries e canais ao vivo em alta qualidade com nosso iptv player online grátis. Teste sem compromisso e descubra a nova forma de assistir TV online." />
        <meta name="keywords" content="iptv player online grátis, assistir tv online grátis, streaming iptv, players de iptv, canais de tv gratuitos" />
        <meta name="author" content="IPTV Service" />
        
        <meta property="og:title" content="Teste Agora IPTV Player Online Grátis" />
        <meta property="og:description" content="Assista filmes, séries e canais ao vivo em alta qualidade com nosso iptv player online grátis. Teste sem compromisso e descubra a nova forma de assistir TV online." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/placeholder.svg" />
        <meta property="og:url" content="https://seudominio.com/iptv-player-online" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Teste Agora IPTV Player Online Grátis" />
        <meta name="twitter:description" content="Assista filmes, séries e canais ao vivo em alta qualidade com nosso iptv player online grátis. Teste sem compromisso!" />
        <meta name="twitter:image" content="/placeholder.svg" />
        
        <link rel="canonical" href="https://seudominio.com/iptv-player-online" />
      </Helmet>

      <div className="min-h-screen bg-black">
        <Header />
        <section className="bg-muted/10 py-4">
          <div className="container mx-auto px-4">
            <SimpleBreadcrumb currentPage="IPTV Player Online" />
          </div>
        </section>
        
        <main className="pt-0">

          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-primary/20 to-secondary/20">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                IPTV Player Online Grátis
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Assista filmes, séries e canais ao vivo em alta qualidade. Teste sem compromisso!
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
                    alt="IPTV Player Online Grátis" 
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
                    Está em busca de praticidade, qualidade e liberdade para assistir seus canais favoritos? O iptv player online grátis é a solução perfeita para quem deseja transformar qualquer dispositivo em uma central de entretenimento. Com ele, você pode acessar canais ao vivo, filmes, séries e muito mais sem complicações e sem pagar caro.
                  </p>

                  <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">
                    O que é IPTV e por que você deve testar?
                  </h2>
                  <p>
                    O IPTV (Internet Protocol Television) é a tecnologia que substituiu antenas e cabos. Basta ter uma conexão estável de internet e um aplicativo de IPTV compatível para assistir TV em alta definição. Diferente da TV tradicional, o streaming iptv oferece flexibilidade total: você escolhe o que assistir, quando e onde quiser, sem limites.
                  </p>
                  <p>
                    Nosso iptv player online grátis permite que você experimente a plataforma antes de contratar. É o jeito mais fácil de conhecer a qualidade do serviço sem compromissos.
                  </p>

                  <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">
                    Vantagens exclusivas do nosso player
                  </h2>
                  <p>
                    Ao testar o iptv player online grátis, você tem acesso a um mundo de conteúdos:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Mais de 100 mil opções entre filmes, séries e esportes</li>
                    <li>Canais nacionais e internacionais, abertos e fechados</li>
                    <li>Transmissão em qualidade HD, Full HD e até 4K</li>
                    <li>Compatível com Smart TVs, celulares, notebooks e TV Box</li>
                    <li>Suporte rápido e confiável sempre que precisar</li>
                  </ul>
                  <p>
                    Além disso, você pode assistir TV online grátis durante o período de teste, aproveitando toda a programação ao vivo e sob demanda.
                  </p>

                  <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">
                    Melhores players de IPTV no mesmo lugar
                  </h2>
                  <p>
                    Com o avanço da tecnologia, surgiram diversos players, mas poucos oferecem estabilidade e variedade como o nosso. Quem já testou garante que ele está entre os melhores players de IPTV, unindo praticidade e desempenho. A instalação é simples: baixe o app, insira o login e comece a assistir imediatamente.
                  </p>

                  <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">
                    Canais de TV gratuitos e muito mais
                  </h2>
                  <p>
                    Além de conteúdos premium, o iptv player online grátis disponibiliza também canais de TV gratuitos, garantindo que você tenha sempre opções de qualidade sem precisar gastar nada. Isso significa mais liberdade de escolha e entretenimento para toda a família.
                  </p>

                  <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">
                    Como começar agora mesmo
                  </h2>
                  <p>
                    Para ter acesso, você só precisa de:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Uma conexão de internet estável (mínimo 10 Mbps)</li>
                    <li>Um dispositivo compatível (Smart TV, celular, notebook ou TV Box)</li>
                    <li>O download do nosso aplicativo IPTV oficial</li>
                  </ul>
                  <p>
                    Com esses passos, você já pode iniciar o teste gratuito e conhecer a nova forma de assistir TV.
                  </p>

                  <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">
                    Depoimentos de quem já testou
                  </h2>
                  <blockquote className="border-l-4 border-primary pl-4 italic">
                    "Experimentei o iptv player online grátis e fiquei impressionado com a qualidade dos canais e a estabilidade do app. Vale muito a pena!" – João, São Paulo
                  </blockquote>
                  <blockquote className="border-l-4 border-primary pl-4 italic">
                    "Adorei a possibilidade de montar meu próprio pacote e pagar apenas pelo que assisto. Recomendo para quem busca economia e variedade." – Carla, Rio de Janeiro
                  </blockquote>

                  <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">
                    Faça parte do futuro da TV
                  </h2>
                  <p>
                    Não dependa mais de cabos ou pacotes cheios de canais que você não usa. Com nosso iptv player online grátis, você tem controle total do seu entretenimento. Clique abaixo e solicite agora mesmo seu teste gratuito.
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

export default IptvPlayerOnline;