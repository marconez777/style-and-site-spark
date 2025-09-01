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

      <Header />
      
      <main>
        <SimpleBreadcrumb currentPage="IPTV 4K Teste" />

        {/* Hero Section */}
        <section className="bg-black text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                IPTV 4K Teste
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              Descubra a qualidade máxima da TV online com nosso teste gratuito. 
              Assista filmes, séries e canais ao vivo em resolução 4K Ultra HD!
            </p>
            <Button className="text-lg px-8 py-6 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white rounded-lg font-semibold">
              Começar Teste Grátis
            </Button>
          </div>
        </section>

        {/* Compatibility Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              Compatível com Todos os Seus Dispositivos
            </h2>
            
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  icon: <Smartphone className="w-12 h-12 text-purple-600 mb-4" />,
                  title: "Smartphones e Tablets",
                  description: "Android e iOS - Assista onde estiver"
                },
                {
                  icon: <Tv className="w-12 h-12 text-purple-600 mb-4" />,
                  title: "Smart TVs",
                  description: "Samsung, LG, Android TV e mais"
                },
                {
                  icon: <Monitor className="w-12 h-12 text-purple-600 mb-4" />,
                  title: "Computadores",
                  description: "Windows, Mac e Linux compatível"
                },
                {
                  icon: <Cpu className="w-12 h-12 text-purple-600 mb-4" />,
                  title: "TV Box e Devices",
                  description: "Chromecast, Fire Stick, Apple TV"
                }
              ].map((device, index) => (
                <div key={index} className="text-center p-6 bg-white rounded-lg shadow-lg">
                  <div className="flex justify-center">{device.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{device.title}</h3>
                  <p className="text-gray-600">{device.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <Pricing />

        {/* Content Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Se você busca alta definição, estabilidade e variedade, o iptv 4k teste é a porta de entrada para uma nova experiência de entretenimento. Imagine ver filmes, séries e esportes ao vivo com imagens nítidas, cores vibrantes e som imersivo, tudo isso sem precisar de TV a cabo.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-12">
                Nosso sistema oferece acesso rápido a milhares de conteúdos, compatível com Smart TVs, TV Box, celulares e computadores. Com poucos cliques, sua tela se transforma em um verdadeiro cinema em casa.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                O que é um serviço IPTV 4K?
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Um serviço IPTV 4K transmite conteúdo via internet em altíssima qualidade, dispensando antenas ou cabos. Ele garante fluidez e estabilidade mesmo em transmissões ao vivo, como jogos de futebol ou eventos esportivos internacionais.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-12">
                Além de filmes e séries, você também tem acesso a canais de notícias, variedades, infantis e muito mais. É um pacote completo que atende toda a família.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Vantagens do IPTV 4K Teste
              </h2>

              <ul className="text-lg text-gray-700 leading-relaxed mb-12 space-y-3">
                <li>• Imagem nítida em 4K Ultra HD</li>
                <li>• Mais de 100 mil conteúdos, incluindo lançamentos</li>
                <li>• Canais nacionais e internacionais sempre atualizados</li>
                <li>• Compatibilidade com Smart TVs, celulares, tablets e TV Box</li>
                <li>• Suporte rápido e fácil configuração</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Lista de IPTV 4K
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Com o iptv 4k teste, você pode acessar uma lista de IPTV 4K exclusiva, contendo os melhores canais, desde esportes até filmes em estreia. Tudo organizado e atualizado regularmente para que você não perca nada.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-12">
                Essa lista garante que o usuário tenha sempre novas opções e um catálogo diversificado, sem precisar recorrer a soluções complicadas.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Teste grátis IPTV – Sem compromisso
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Ainda tem dúvidas se vale a pena? Oferecemos um teste grátis IPTV para que você comprove a qualidade antes de contratar. Assim, você experimenta o desempenho da plataforma, confere a estabilidade e avalia a variedade de conteúdos.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-12">
                Muitos clientes que começam pelo período gratuito acabam escolhendo continuar, justamente porque percebem a diferença na qualidade de imagem e no atendimento.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                IPTV com canais 4K
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-12">
                Um dos grandes atrativos é o iptv com canais 4K, que entrega esportes, filmes e séries com a mesma qualidade de um Blu-ray, mas via streaming. Isso significa que, se você tem uma TV moderna, vai aproveitar ao máximo cada detalhe da imagem.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Melhor IPTV 4K Teste – Por que escolher o nosso?
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-12">
                Quem busca o melhor IPTV 4K teste precisa de algo além de imagem nítida. É fundamental contar com suporte rápido, servidor estável e catálogo amplo. Nosso sistema une tudo isso em uma experiência única, desenvolvida para não travar e oferecer conteúdo de ponta em qualquer dispositivo.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                IPTV gatis: primeiro passo para conhecer
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-12">
                Se você procura por iptv gatis, saiba que o nosso teste gratuito cumpre esse papel com excelência. É a chance de assistir canais premium sem pagar nada no início, garantindo segurança e confiança na hora de escolher seu plano definitivo.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Pronto para começar?
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Chegou a hora de transformar sua forma de assistir TV. Com o iptv 4k teste, você tem liberdade para explorar conteúdos em qualidade máxima, sem limites e sem custos iniciais.
              </p>

              <div className="text-center mt-12">
                <Button className="text-lg px-8 py-6 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white rounded-lg font-semibold">
                  Iniciar Teste Gratuito
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default IptvTeste4k;