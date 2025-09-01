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

      <Header />
      
      <main>
        <SimpleBreadcrumb currentPage="IPTV na televisão" />

        {/* Hero Section */}
        <section className="bg-black text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                IPTV na televisão
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              Transforme sua TV em uma central de entretenimento completa. 
              Assista filmes, séries e canais ao vivo em qualidade máxima!
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
                O iptv na televisão revolucionou a maneira como consumimos filmes, séries e canais ao vivo. Não há mais necessidade de antenas, cabos complicados ou pacotes caros de TV por assinatura. Com internet estável e um aplicativo compatível, sua Smart TV se transforma em uma plataforma completa de entretenimento, oferecendo praticidade e liberdade para toda a família.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                IPTV para Smart TV
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-12">
                Quem possui uma TV moderna pode instalar um IPTV para Smart TV em minutos. Basta baixar o aplicativo recomendado, inserir a lista de canais e pronto: a programação aparece direto na tela da sua sala. Filmes em alta definição, esportes ao vivo e canais internacionais ficam a um clique de distância.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Como usar IPTV na TV
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Ainda não sabe como usar IPTV na TV? O processo é simples:
              </p>

              <ul className="text-lg text-gray-700 leading-relaxed mb-8 space-y-3">
                <li>• Conecte sua TV à internet.</li>
                <li>• Instale um aplicativo de IPTV.</li>
                <li>• Configure com seus dados ou arquivo M3U.</li>
                <li>• Escolha o canal e assista em tempo real.</li>
              </ul>

              <p className="text-lg text-gray-700 leading-relaxed mb-12">
                Com esses poucos passos, o iptv na televisão fica pronto para uso e garante qualidade de imagem em HD, Full HD e até 4K.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                IPTV para TV Box
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-12">
                Se a sua TV não for compatível com aplicativos modernos, não há problema. Basta instalar um IPTV para TV Box e conectar via HDMI. Essa alternativa é perfeita para transformar qualquer aparelho antigo em uma TV inteligente, com acesso a milhares de conteúdos sob demanda.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Configurar IPTV na TV é rápido
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-12">
                Uma das maiores vantagens está na facilidade. Hoje, qualquer pessoa consegue configurar IPTV na TV sem precisar de ajuda técnica. O aplicativo já traz menus intuitivos, guias de programação e até suporte remoto. É só seguir as instruções e aproveitar.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Aplicativo de IPTV para TV
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-12">
                O segredo está em usar um aplicativo de IPTV para TV confiável. Ele garante estabilidade e compatibilidade com diferentes listas de canais. Nosso player, por exemplo, é leve e seguro, evitando travamentos e garantindo a melhor experiência em transmissões ao vivo.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                IPTV com canais 4K
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-12">
                Quem investiu em uma TV moderna não quer qualidade inferior. Por isso, o iptv com canais 4K se destaca, oferecendo esportes, filmes e séries com detalhes impressionantes e som imersivo. Essa tecnologia coloca você dentro da ação, transformando a sala em uma verdadeira sala de cinema.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Por que escolher o IPTV na televisão
              </h2>

              <ul className="text-lg text-gray-700 leading-relaxed mb-12 space-y-3">
                <li>📺 <strong>Variedade:</strong> milhares de canais nacionais e internacionais.</li>
                <li>🎬 <strong>Entretenimento completo:</strong> filmes, séries, esportes e muito mais.</li>
                <li>⚡ <strong>Praticidade:</strong> configuração rápida e fácil.</li>
                <li>🌍 <strong>Liberdade:</strong> assista quando e onde quiser, sem limitações.</li>
                <li>💡 <strong>Qualidade máxima:</strong> imagens em HD, Full HD e 4K.</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Experimente hoje mesmo
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Chega de pacotes engessados e programações limitadas. Com o iptv na televisão, você tem controle total sobre o que assiste, personaliza sua lista de canais e garante qualidade incomparável.
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

export default IptvNaTelevisao;