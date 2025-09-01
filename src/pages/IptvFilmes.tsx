import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Smartphone, Tv, Monitor, Cpu } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SimpleBreadcrumb } from "@/components/ui/SimpleBreadcrumb";
import Pricing from "@/components/Pricing";

const IptvFilmes = () => {
  return (
    <>
      <Helmet>
        <title>IPTV Filmes – Tenha Cinema em Casa com Um Clique</title>
        <meta name="description" content="Assista aos melhores títulos com o iptv filmes. Tenha acesso a filmes on demand, canais 24h e catálogo completo em alta qualidade. Teste grátis disponível!" />
        <meta name="keywords" content="iptv filmes, melhores filmes iptv, lista de filmes iptv, iptv com filmes on demand, canais de filmes iptv, aplicativo de filmes iptv, preço iptv" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://arplay.lovable.app/iptv-filmes" />
        <meta property="og:title" content="IPTV Filmes – Tenha Cinema em Casa com Um Clique" />
        <meta property="og:description" content="Assista aos melhores títulos com o iptv filmes. Tenha acesso a filmes on demand, canais 24h e catálogo completo em alta qualidade. Teste grátis disponível!" />
        <meta property="og:image" content="https://arplay.lovable.app/placeholder.svg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://arplay.lovable.app/iptv-filmes" />
        <meta property="twitter:title" content="IPTV Filmes – Tenha Cinema em Casa com Um Clique" />
        <meta property="twitter:description" content="Assista aos melhores títulos com o iptv filmes. Tenha acesso a filmes on demand, canais 24h e catálogo completo em alta qualidade. Teste grátis disponível!" />
        <meta property="twitter:image" content="https://arplay.lovable.app/placeholder.svg" />

        <link rel="canonical" href="https://arplay.lovable.app/iptv-filmes" />
      </Helmet>

      <Header />
      
      <main>
        <SimpleBreadcrumb currentPage="IPTV Filmes" />

        {/* Hero Section */}
        <section className="bg-black text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                IPTV Filmes
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              Tenha cinema em casa com um clique! Assista aos melhores títulos 
              em alta qualidade, catálogo completo e filmes on demand.
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
                Com o iptv filmes, sua televisão, celular ou computador se transforma em uma verdadeira sala de cinema. Basta instalar um aplicativo compatível e ter internet estável para acessar milhares de títulos atualizados, em alta qualidade e sem limitações. Esqueça filas, mensalidades caras e a programação limitada da TV por assinatura.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Melhores filmes IPTV
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-12">
                Nosso catálogo reúne os melhores filmes IPTV, desde grandes lançamentos até clássicos que marcaram gerações. Você pode escolher entre gêneros como ação, comédia, drama, romance, terror e muito mais. Tudo isso disponível sob demanda, para assistir quando e onde quiser.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Lista de filmes IPTV
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-12">
                Uma das grandes vantagens é ter acesso a uma lista de filmes IPTV organizada e atualizada diariamente. Com isso, você não perde tempo procurando opções, já que o conteúdo fica separado por categorias, popularidade ou novidades.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                IPTV com filmes on demand
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-12">
                O modelo tradicional de TV sempre limitou os horários de exibição. Com o IPTV com filmes on demand, essa barreira desaparece. Agora, você escolhe o que assistir, pausa, avança ou retoma exatamente de onde parou. Mais liberdade, mais conveniência e muito mais entretenimento.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Canais de filmes IPTV
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-12">
                Além dos conteúdos sob demanda, você também pode acompanhar canais de filmes IPTV que transmitem programação ao vivo, 24 horas por dia. Assim, quem prefere a experiência de "zappear" entre canais também encontra diversão sem fim.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Aplicativo de filmes IPTV
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-12">
                Para que tudo isso funcione, basta instalar um aplicativo de filmes IPTV. Ele é compatível com celulares Android e iOS, Smart TVs, TV Box e computadores. A interface é simples e amigável, pensada para qualquer usuário acessar rapidamente seu conteúdo preferido sem dificuldades.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Benefícios do IPTV Filmes
              </h2>

              <ul className="text-lg text-gray-700 leading-relaxed mb-12 space-y-3">
                <li>• Acesso a milhares de títulos, incluindo lançamentos.</li>
                <li>• Filmes sob demanda e canais 24h de cinema.</li>
                <li>• Qualidade de imagem em HD, Full HD e até 4K.</li>
                <li>• Compatível com diferentes dispositivos.</li>
                <li>• Atualizações constantes no catálogo.</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Preço IPTV acessível
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-12">
                Muitos acreditam que ter uma biblioteca tão completa custa caro, mas o preço IPTV é bem mais acessível que qualquer serviço de TV convencional. Você paga menos e recebe muito mais opções, sem contratos longos ou cobranças escondidas.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                IPTV Filmes: entretenimento sem limites
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Imagine reunir a família, preparar a pipoca e escolher entre milhares de opções de cinema na sua tela. É isso que o iptv filmes oferece: liberdade de escolha, qualidade de imagem impecável e conveniência absoluta.
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

export default IptvFilmes;