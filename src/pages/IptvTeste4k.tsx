import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Smartphone, Tv, Monitor, Cpu } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SimpleBreadcrumb } from "@/components/ui/SimpleBreadcrumb";
import Pricing from "@/components/Pricing";

const IptvTeste4k = () => {
  return (
    <>
      <Helmet>
        <title>IPTV 4K Teste – Descubra a Qualidade Máxima da TV Online</title>
        <meta name="description" content="Assista filmes, séries e canais ao vivo em alta qualidade com nosso iptv 4k teste. Aproveite teste grátis IPTV e descubra o melhor serviço IPTV 4K." />
        <meta name="keywords" content="iptv 4k teste, serviço iptv 4k, teste grátis iptv, lista iptv 4k, iptv com canais 4k, melhor iptv 4k teste, iptv gatis" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://arplay.lovable.app/iptv-4k-teste" />
        <meta property="og:title" content="IPTV 4K Teste – Descubra a Qualidade Máxima da TV Online" />
        <meta property="og:description" content="Assista filmes, séries e canais ao vivo em alta qualidade com nosso iptv 4k teste. Aproveite teste grátis IPTV e descubra o melhor serviço IPTV 4K." />
        <meta property="og:image" content="https://arplay.lovable.app/placeholder.svg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://arplay.lovable.app/iptv-4k-teste" />
        <meta property="twitter:title" content="IPTV 4K Teste – Descubra a Qualidade Máxima da TV Online" />
        <meta property="twitter:description" content="Assista filmes, séries e canais ao vivo em alta qualidade com nosso iptv 4k teste. Aproveite teste grátis IPTV e descubra o melhor serviço IPTV 4K." />
        <meta property="twitter:image" content="https://arplay.lovable.app/placeholder.svg" />

        <link rel="canonical" href="https://arplay.lovable.app/iptv-4k-teste" />
      </Helmet>

      <div className="min-h-screen bg-black">
        <Header />
        <section className="bg-muted/10 py-4">
          <div className="container mx-auto px-4">
            <SimpleBreadcrumb currentPage="IPTV 4K Teste" />
          </div>
        </section>
        
        <main className="pt-0">
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-primary/20 to-secondary/20">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                IPTV 4K Teste
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Descubra a qualidade máxima da TV online com nosso teste gratuito. Assista filmes, séries e canais ao vivo em resolução 4K Ultra HD!
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
                    alt="IPTV 4K Teste" 
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
                    Se você busca alta definição, estabilidade e variedade, o iptv 4k teste é a porta de entrada para uma nova experiência de entretenimento. Imagine ver filmes, séries e esportes ao vivo com imagens nítidas, cores vibrantes e som imersivo, tudo isso sem precisar de TV a cabo.
                  </p>

                  <p>
                    Nosso sistema oferece acesso rápido a milhares de conteúdos, compatível com Smart TVs, TV Box, celulares e computadores. Com poucos cliques, sua tela se transforma em um verdadeiro cinema em casa.
                  </p>

                  <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">
                    O que é um serviço IPTV 4K?
                  </h2>
              
                  <p>
                    Um serviço IPTV 4K transmite conteúdo via internet em altíssima qualidade, dispensando antenas ou cabos. Ele garante fluidez e estabilidade mesmo em transmissões ao vivo, como jogos de futebol ou eventos esportivos internacionais.
                  </p>

                  <p>
                    Além de filmes e séries, você também tem acesso a canais de notícias, variedades, infantis e muito mais. É um pacote completo que atende toda a família.
                  </p>

                  <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">
                    Vantagens do IPTV 4K Teste
                  </h2>

                  <ul className="list-disc pl-6 space-y-2">
                    <li>Imagem nítida em 4K Ultra HD</li>
                    <li>Mais de 100 mil conteúdos, incluindo lançamentos</li>
                    <li>Canais nacionais e internacionais sempre atualizados</li>
                    <li>Compatibilidade com Smart TVs, celulares, tablets e TV Box</li>
                    <li>Suporte rápido e fácil configuração</li>
                  </ul>

                  <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">
                    Lista de IPTV 4K
                  </h2>

                  <p>
                    Com o iptv 4k teste, você pode acessar uma lista de IPTV 4K exclusiva, contendo os melhores canais, desde esportes até filmes em estreia. Tudo organizado e atualizado regularmente para que você não perca nada.
                  </p>

                  <p>
                    Essa lista garante que o usuário tenha sempre novas opções e um catálogo diversificado, sem precisar recorrer a soluções complicadas.
                  </p>

                  <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">
                    Teste grátis IPTV – Sem compromisso
                  </h2>

                  <p>
                    Ainda tem dúvidas se vale a pena? Oferecemos um teste grátis IPTV para que você comprove a qualidade antes de contratar. Assim, você experimenta o desempenho da plataforma, confere a estabilidade e avalia a variedade de conteúdos.
                  </p>

                  <p>
                    Muitos clientes que começam pelo período gratuito acabam escolhendo continuar, justamente porque percebem a diferença na qualidade de imagem e no atendimento.
                  </p>

                  <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">
                    IPTV com canais 4K
                  </h2>

                  <p>
                    Um dos grandes atrativos é o iptv com canais 4K, que entrega esportes, filmes e séries com a mesma qualidade de um Blu-ray, mas via streaming. Isso significa que, se você tem uma TV moderna, vai aproveitar ao máximo cada detalhe da imagem.
                  </p>

                  <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">
                    Melhor IPTV 4K Teste – Por que escolher o nosso?
                  </h2>

                  <p>
                    Quem busca o melhor IPTV 4K teste precisa de algo além de imagem nítida. É fundamental contar com suporte rápido, servidor estável e catálogo amplo. Nosso sistema une tudo isso em uma experiência única, desenvolvida para não travar e oferecer conteúdo de ponta em qualquer dispositivo.
                  </p>

                  <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">
                    IPTV gatis: primeiro passo para conhecer
                  </h2>

                  <p>
                    Se você procura por iptv gatis, saiba que o nosso teste gratuito cumpre esse papel com excelência. É a chance de assistir canais premium sem pagar nada no início, garantindo segurança e confiança na hora de escolher seu plano definitivo.
                  </p>

                  <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">
                    Pronto para começar?
                  </h2>

                  <p>
                    Chegou a hora de transformar sua forma de assistir TV. Com o iptv 4k teste, você tem liberdade para explorar conteúdos em qualidade máxima, sem limites e sem custos iniciais.
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

export default IptvTeste4k;