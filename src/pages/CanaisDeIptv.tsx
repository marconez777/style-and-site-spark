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

      <Header />
      
      <main>
        <SimpleBreadcrumb currentPage="Canais de IPTV" />

        {/* Hero Section */}
        <section className="bg-black text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                Canais de IPTV
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              Assista tudo em um só lugar! Filmes, séries, esportes e muito mais 
              com a melhor lista de canais IPTV do mercado.
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
              <p className="text-lg text-gray-700 leading-relaxed mb-12">
                Os canais de iptv mudaram a forma de consumir entretenimento. Agora, em vez de depender de pacotes engessados, você pode montar sua própria programação e assistir ao que realmente gosta. Com qualidade em HD, Full HD e até 4K, a experiência se torna muito mais completa e acessível.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Lista de canais IPTV sempre atualizada
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-12">
                Ao ativar o serviço, você recebe acesso a uma lista de canais IPTV completa e organizada, com conteúdos nacionais e internacionais. São filmes, séries, esportes, notícias, programas infantis e muito mais, todos prontos para serem assistidos na hora que quiser.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Canais gratuitos IPTV
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-12">
                Além das opções premium, você também encontra canais gratuitos IPTV, ideais para quem está começando e deseja testar a qualidade do sistema. Assim é possível experimentar transmissões ao vivo sem custo inicial, garantindo confiança antes de contratar um plano definitivo.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Melhores canais IPTV para toda a família
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Entre os destaques, estão os melhores canais IPTV, que reúnem programação variada para atender todos os gostos:
              </p>

              <ul className="text-lg text-gray-700 leading-relaxed mb-8 space-y-3">
                <li>🎬 Filmes de diferentes gêneros e épocas.</li>
                <li>📺 Séries completas, incluindo lançamentos.</li>
                <li>⚽ Esportes ao vivo, nacionais e internacionais.</li>
                <li>📰 Notícias em tempo real.</li>
                <li>👨‍👩‍👧 Programação infantil educativa e divertida.</li>
              </ul>

              <p className="text-lg text-gray-700 leading-relaxed mb-12">
                Tudo isso em uma única plataforma, disponível no celular, Smart TV, computador ou TV Box.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Canais de TV online com máxima qualidade
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-12">
                Com os canais de TV online via IPTV, você não precisa de antena, parabólica ou cabos. Basta ter uma boa conexão de internet e um aplicativo compatível para acessar milhares de conteúdos com fluidez. A tecnologia IPTV garante estabilidade mesmo em transmissões ao vivo.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                IPTV ao vivo
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-12">
                Para quem não abre mão de acompanhar jogos, novelas e programas em tempo real, o IPTV ao vivo é um dos maiores diferenciais. Você acompanha a programação no mesmo horário em que é exibida, sem atrasos e com qualidade superior à TV tradicional.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Preço IPTV acessível
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-12">
                Outra vantagem é o preço IPTV, muito mais econômico do que pacotes convencionais de TV por assinatura. Em vez de pagar caro por canais que você não assiste, aqui você investe apenas em uma solução personalizada e flexível, com mais conteúdos e menos custos.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Por que escolher canais de IPTV?
              </h2>

              <ul className="text-lg text-gray-700 leading-relaxed mb-12 space-y-3">
                <li>• Mais liberdade para montar sua programação.</li>
                <li>• Transmissões estáveis e imagem em alta definição.</li>
                <li>• Opções gratuitas e pacotes premium acessíveis.</li>
                <li>• Compatibilidade com diferentes dispositivos.</li>
                <li>• Conteúdo variado que agrada toda a família.</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Experimente hoje mesmo
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Com os canais de iptv, você assume o controle da sua programação. Tenha acesso imediato a filmes, séries, notícias e esportes, pagando menos e assistindo mais.
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

export default CanaisDeIptv;