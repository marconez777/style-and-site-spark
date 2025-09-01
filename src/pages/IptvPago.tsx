import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Smartphone, Tv, Monitor, Cpu } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SimpleBreadcrumb } from "@/components/ui/SimpleBreadcrumb";
import Pricing from "@/components/Pricing";

const IptvPago = () => {
  return (
    <>
      <Helmet>
        <title>IPTV Pago – Mais Qualidade, Mais Conteúdo</title>
        <meta name="description" content="Descubra as vantagens do iptv pago. Assista filmes, séries e canais ao vivo com qualidade HD e 4K. Assinatura IPTV sem fidelidade e pacotes acessíveis." />
        <meta name="keywords" content="iptv pago, provedor de iptv, melhores iptv pagos, assinatura de iptv, pacote de canais iptv, plano iptv" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://arplay.lovable.app/iptv-pago" />
        <meta property="og:title" content="IPTV Pago – Mais Qualidade, Mais Conteúdo" />
        <meta property="og:description" content="Descubra as vantagens do iptv pago. Assista filmes, séries e canais ao vivo com qualidade HD e 4K. Assinatura IPTV sem fidelidade e pacotes acessíveis." />
        <meta property="og:image" content="https://arplay.lovable.app/placeholder.svg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://arplay.lovable.app/iptv-pago" />
        <meta property="twitter:title" content="IPTV Pago – Mais Qualidade, Mais Conteúdo" />
        <meta property="twitter:description" content="Descubra as vantagens do iptv pago. Assista filmes, séries e canais ao vivo com qualidade HD e 4K. Assinatura IPTV sem fidelidade e pacotes acessíveis." />
        <meta property="twitter:image" content="https://arplay.lovable.app/placeholder.svg" />

        <link rel="canonical" href="https://arplay.lovable.app/iptv-pago" />
      </Helmet>

      <Header />
      
      <main>
        <SimpleBreadcrumb currentPage="IPTV Pago" />

        {/* Hero Section */}
        <section className="bg-black text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                IPTV Pago
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              Mais qualidade, mais conteúdo! Descubra as vantagens do IPTV pago 
              com assinatura sem fidelidade e pacotes acessíveis.
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
                Muitos usuários começam testando listas gratuitas, mas logo percebem limitações: instabilidade, poucos canais e qualidade de imagem inferior. É aí que entra o iptv pago. Ao optar por um serviço profissional, você garante acesso a uma biblioteca completa, servidores estáveis e suporte técnico sempre disponível.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-12">
                Enquanto versões gratuitas funcionam como um "teste", o serviço de IPTV pago foi criado para quem busca uma solução confiável, segura e de longo prazo.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Provedor de IPTV confiável
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Escolher um bom provedor de IPTV é fundamental para ter a melhor experiência. Nosso sistema oferece suporte dedicado, atualizações constantes e compatibilidade com Smart TVs, TV Box, celulares e computadores.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-12">
                Com um único login, você pode assistir onde quiser, sem travamentos ou quedas de conexão.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Melhores IPTV pagos
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-12">
                O mercado está cheio de opções, mas os melhores IPTV pagos se destacam pela qualidade de transmissão em HD, Full HD e até 4K, além da variedade de canais. Filmes, séries, esportes, notícias, infantis, música e muito mais ficam disponíveis em uma única plataforma.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Assinatura de IPTV sem burocracia
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-12">
                Nossa assinatura de IPTV é simples e sem fidelidade. Você escolhe o plano, ativa na hora e já pode começar a assistir. Se quiser interromper, basta cancelar sem taxas escondidas. A ideia é oferecer liberdade total ao usuário.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Pacote de canais IPTV
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-12">
                Cada cliente tem necessidades diferentes. Por isso, você pode personalizar seu pacote de canais IPTV de acordo com seus interesses. Quer mais esportes? Prefere filmes e séries? Ou canais infantis para os pequenos? Aqui você monta o plano ideal para sua rotina.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Plano IPTV que cabe no seu bolso
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-12">
                Outra vantagem é a flexibilidade. Oferecemos plano IPTV mensal, trimestral, semestral e anual, com valores acessíveis e benefícios extras. Assim, você escolhe de acordo com seu orçamento, sem abrir mão da qualidade.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Vantagens do IPTV Pago
              </h2>

              <ul className="text-lg text-gray-700 leading-relaxed mb-12 space-y-3">
                <li>📺 Mais de 100 mil conteúdos disponíveis.</li>
                <li>⚡ Servidores estáveis e transmissão em alta definição.</li>
                <li>🎬 Catálogo atualizado com lançamentos de filmes e séries.</li>
                <li>🌍 Programação nacional e internacional.</li>
                <li>💳 Pagamento seguro via Pix, cartão ou boleto.</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Por que investir em um IPTV pago?
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-12">
                Porque você passa a ter controle total da sua programação sem abrir mão da qualidade. O iptv pago garante acesso ilimitado, suporte 24 horas e uma experiência superior à TV convencional, com custo muito menor.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Faça o teste e comprove
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Não fique preso às limitações das listas gratuitas. Descubra agora como é ter milhares de canais e filmes ao seu alcance com o iptv pago.
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

export default IptvPago;