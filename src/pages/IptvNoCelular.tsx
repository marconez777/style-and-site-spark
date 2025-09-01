import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Smartphone, Tv, Monitor, Cpu } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SimpleBreadcrumb } from "@/components/ui/SimpleBreadcrumb";
import Pricing from "@/components/Pricing";

const IptvNoCelular = () => {
  return (
    <>
      <Helmet>
        <title>IPTV no Celular – TV, Séries e Filmes Sempre com Você</title>
        <meta name="description" content="Assista filmes, séries e canais ao vivo com iptv no celular. Compatível com Android e iOS, fácil de configurar e pronto para usar. Peça seu teste grátis!" />
        <meta name="keywords" content="iptv no celular, reprodutor iptv android, aplicativo iptv ios, como assistir iptv no celular, configurar iptv no smartphone, iptv mobile, melhor iptv online" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://arplay.lovable.app/iptv-no-celular" />
        <meta property="og:title" content="IPTV no Celular – TV, Séries e Filmes Sempre com Você" />
        <meta property="og:description" content="Assista filmes, séries e canais ao vivo com iptv no celular. Compatível com Android e iOS, fácil de configurar e pronto para usar. Peça seu teste grátis!" />
        <meta property="og:image" content="https://arplay.lovable.app/placeholder.svg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://arplay.lovable.app/iptv-no-celular" />
        <meta property="twitter:title" content="IPTV no Celular – TV, Séries e Filmes Sempre com Você" />
        <meta property="twitter:description" content="Assista filmes, séries e canais ao vivo com iptv no celular. Compatível com Android e iOS, fácil de configurar e pronto para usar. Peça seu teste grátis!" />
        <meta property="twitter:image" content="https://arplay.lovable.app/placeholder.svg" />

        <link rel="canonical" href="https://arplay.lovable.app/iptv-no-celular" />
      </Helmet>

      <Header />
      
      <main>
        <SimpleBreadcrumb currentPage="IPTV no celular" />

        {/* Hero Section */}
        <section className="bg-black text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                IPTV no celular
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              Transforme seu smartphone em uma televisão portátil. 
              Assista filmes, séries e canais ao vivo sempre com você!
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
                Com o iptv no celular, você transforma seu smartphone em uma verdadeira televisão portátil. Basta baixar um aplicativo compatível, inserir sua lista de canais e aproveitar transmissões ao vivo, filmes e séries de qualquer lugar. Seja no ônibus, no intervalo do trabalho ou em casa, o entretenimento fica sempre ao alcance dos dedos.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Reprodutor IPTV Android
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-12">
                Quem usa sistema Android pode instalar facilmente um reprodutor IPTV Android direto da Play Store. Ele permite rodar listas M3U, organizar canais e ainda salvar favoritos. Tudo com interface simples e intuitiva para não perder tempo com configurações complexas.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Aplicativo IPTV iOS
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-12">
                Usuários de iPhone também não ficam de fora. Com um aplicativo IPTV iOS, é possível acessar os mesmos conteúdos com desempenho otimizado para iOS, garantindo imagens fluidas e estáveis em qualquer modelo de iPhone ou iPad.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Como assistir IPTV no celular
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Muitos acreditam que a configuração é complicada, mas aprender como assistir IPTV no celular é simples:
              </p>

              <ul className="text-lg text-gray-700 leading-relaxed mb-8 space-y-3">
                <li>• Tenha conexão estável de internet.</li>
                <li>• Baixe o aplicativo IPTV recomendado para seu sistema.</li>
                <li>• Insira sua lista de canais IPTV mobile.</li>
                <li>• Comece a assistir a filmes, esportes e séries ao vivo.</li>
              </ul>

              <p className="text-lg text-gray-700 leading-relaxed mb-12">
                Em poucos minutos o iptv no celular estará pronto, funcionando sem travamentos.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Configurar IPTV no smartphone é fácil
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-12">
                Seja em Android ou iOS, hoje os apps são desenvolvidos para simplificar a experiência. Em apenas quatro ou cinco toques na tela, você consegue configurar IPTV no smartphone e liberar todo o catálogo disponível.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                O que você encontra no IPTV no celular
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Ao instalar o player e ativar o serviço, você tem acesso imediato a:
              </p>

              <ul className="text-lg text-gray-700 leading-relaxed mb-12 space-y-3">
                <li>• Séries completas, lançamentos e clássicos.</li>
                <li>• Filmes nacionais e internacionais em Full HD e 4K.</li>
                <li>• Programação esportiva ao vivo.</li>
                <li>• Canais de notícias, variedades e muito mais.</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Melhor IPTV online para assistir sem travar
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-12">
                Nem todos os serviços entregam estabilidade. Por isso, escolher o melhor IPTV online faz diferença. Nossa plataforma oferece suporte dedicado, servidores de alta performance e atualizações frequentes, garantindo que o iptv no celular funcione de forma estável e com máxima qualidade de imagem.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Pronto para testar agora?
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Não dependa mais da televisão tradicional. Com o iptv no celular, você tem liberdade total para assistir o que quiser, quando quiser, sem cabos e sem pacotes caros.
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

export default IptvNoCelular;