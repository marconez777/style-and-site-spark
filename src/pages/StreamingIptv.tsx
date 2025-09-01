import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SimpleBreadcrumb } from "@/components/ui/SimpleBreadcrumb";
import { Button } from "@/components/ui/button";
import { Smartphone, Tv, Monitor, Tablet } from "lucide-react";
import Pricing from "@/components/Pricing";

const StreamingIptv = () => {
  return (
    <>
      <Helmet>
        <title>Streaming IPTV – A Evolução da TV Online</title>
        <meta name="description" content="Transforme sua forma de assistir TV com nosso streaming IPTV. Tenha acesso aos melhores canais, filmes e séries em alta qualidade. Teste grátis agora mesmo!" />
        <meta name="keywords" content="streaming iptv, serviço de iptv, melhor iptv, iptv online, canais iptv, iptv p2p" />
        <meta name="author" content="Ar Play Digital" />
        
        <meta property="og:title" content="Streaming IPTV – A Evolução da TV Online" />
        <meta property="og:description" content="Transforme sua forma de assistir TV com nosso streaming IPTV. Tenha acesso aos melhores canais, filmes e séries em alta qualidade. Teste grátis agora mesmo!" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/placeholder.svg" />
        <meta property="og:url" content="https://arplaydigital.com/streaming-iptv" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Streaming IPTV – A Evolução da TV Online" />
        <meta name="twitter:description" content="Transforme sua forma de assistir TV com nosso streaming IPTV. Tenha acesso aos melhores canais!" />
        <meta name="twitter:image" content="/placeholder.svg" />
        
        <link rel="canonical" href="https://arplaydigital.com/streaming-iptv" />
      </Helmet>

      <div className="min-h-screen bg-black">
        <Header />
        <section className="bg-muted/10 py-4">
          <div className="container mx-auto px-4">
            <SimpleBreadcrumb currentPage="Streaming IPTV" />
          </div>
        </section>
        
        <main className="pt-0">

          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-primary/20 to-secondary/20">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Streaming IPTV
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transforme sua forma de assistir TV com qualidade superior e variedade infinita!
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
                    alt="Streaming IPTV" 
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-white mb-6">
                    Streaming Completo
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
                        Tecnologia P2P avançada
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
                    Está cansado de pacotes caros, cheios de canais que você nunca assiste? O streaming IPTV é a solução moderna, prática e econômica para transformar a forma como você consome entretenimento. Basta ter internet estável para assistir filmes, séries e canais ao vivo com qualidade Full HD e até 4K, diretamente no seu dispositivo preferido.
                  </p>

                  <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">
                    O que é um Serviço de IPTV?
                  </h2>
                  <p>
                    Um serviço de IPTV (Internet Protocol Television) utiliza a internet para transmitir programação televisiva, sem precisar de cabos ou antenas. Isso significa que você pode acessar milhares de conteúdos exclusivos em qualquer lugar, seja na Smart TV, no celular, no computador ou até em TV Box. É liberdade e flexibilidade na palma da sua mão.
                  </p>

                  <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">
                    Por que escolher o melhor IPTV?
                  </h2>
                  <p>
                    Existem muitas opções no mercado, mas se você busca estabilidade, qualidade de imagem e variedade de conteúdo, precisa conhecer o melhor IPTV disponível. Nosso sistema foi desenvolvido para entregar velocidade, praticidade e uma experiência sem travamentos, mesmo durante transmissões ao vivo de esportes ou eventos especiais.
                  </p>
                  <p>
                    Com o streaming IPTV, você aproveita:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Mais de 100 mil conteúdos entre filmes, séries e programas de TV</li>
                    <li>Transmissões em HD, Full HD e até 4K</li>
                    <li>Catálogo sempre atualizado com novidades e lançamentos</li>
                    <li>Suporte técnico ágil, disponível sempre que precisar</li>
                  </ul>

                  <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">
                    IPTV Online: assista onde e quando quiser
                  </h2>
                  <p>
                    A grande vantagem do IPTV online é que você não fica preso a um único dispositivo. Instale o aplicativo oficial em sua Smart TV, notebook, celular ou tablet e assista em qualquer lugar. Tudo o que você precisa é de uma boa conexão de internet para acessar a programação em tempo real ou sob demanda.
                  </p>

                  <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">
                    Canais IPTV para todos os gostos
                  </h2>
                  <p>
                    Com o nosso streaming IPTV, você tem acesso a uma seleção ampla de canais IPTV, que vão desde esportes, filmes e séries até notícias, variedades e programação internacional. A ideia é oferecer um pacote completo e personalizável, onde você escolhe o que realmente deseja assistir.
                  </p>

                  <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">
                    IPTV P2P: estabilidade garantida
                  </h2>
                  <p>
                    Além do sistema tradicional, oferecemos também a tecnologia IPTV P2P, que garante maior estabilidade nas transmissões ao vivo. Esse recurso distribui o conteúdo de forma inteligente pela rede, evitando sobrecarga nos servidores e proporcionando uma experiência mais fluida e sem interrupções.
                  </p>

                  <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">
                    Experimente agora mesmo
                  </h2>
                  <p>
                    O streaming IPTV é compatível com praticamente todos os dispositivos modernos:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>📺 Smart TVs (Samsung, LG, Android TV e mais)</li>
                    <li>📱 Smartphones e tablets Android e iOS</li>
                    <li>💻 Notebooks e PCs Windows ou Mac</li>
                    <li>📦 TV Box, Fire Stick e Chromecast</li>
                  </ul>
                  <p>
                    Basta instalar o aplicativo, inserir seus dados e começar a assistir. Simples assim!
                  </p>

                  <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">
                    Depoimentos de quem já testou
                  </h2>
                  <blockquote className="border-l-4 border-primary pl-4 italic">
                    "Depois que conheci o streaming IPTV, não consigo mais usar TV a cabo. Muito mais qualidade e liberdade." – André, São Paulo
                  </blockquote>
                  <blockquote className="border-l-4 border-primary pl-4 italic">
                    "O catálogo é incrível e os canais de IPTV funcionam sem travar. Recomendo para toda família." – Mariana, Curitiba
                  </blockquote>

                  <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">
                    Assuma o controle do seu entretenimento
                  </h2>
                  <p>
                    Chega de pagar caro por pouco conteúdo. Com nosso streaming IPTV, você escolhe o que assistir e quando assistir, sem limitações. Clique abaixo e solicite agora mesmo seu teste gratuito.
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

export default StreamingIptv;