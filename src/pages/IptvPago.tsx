import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SimpleBreadcrumb } from "@/components/ui/SimpleBreadcrumb";
import { Button } from "@/components/ui/button";
import { Smartphone, Tv, Monitor, Tablet } from "lucide-react";
import Pricing from "@/components/Pricing";

const IptvPago = () => {
  return (
    <>
      <Helmet>
        <title>IPTV Pago – Mais Qualidade, Mais Conteúdo</title>
        <meta name="description" content="Descubra as vantagens do iptv pago. Assista filmes, séries e canais ao vivo com qualidade HD e 4K. Assinatura IPTV sem fidelidade e pacotes acessíveis." />
        <meta name="keywords" content="iptv pago, provedor de iptv, melhores iptv pagos, assinatura de iptv, pacote de canais iptv, plano iptv" />
        <meta name="author" content="IPTV Service" />
        
        <meta property="og:title" content="IPTV Pago – Mais Qualidade, Mais Conteúdo" />
        <meta property="og:description" content="Descubra as vantagens do iptv pago. Assista filmes, séries e canais ao vivo com qualidade HD e 4K. Assinatura IPTV sem fidelidade e pacotes acessíveis." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/placeholder.svg" />
        <meta property="og:url" content="https://seudominio.com/iptv-pago" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="IPTV Pago – Mais Qualidade, Mais Conteúdo" />
        <meta name="twitter:description" content="Descubra as vantagens do iptv pago. Assista filmes, séries e canais ao vivo com qualidade HD e 4K. Assinatura IPTV sem fidelidade e pacotes acessíveis." />
        <meta name="twitter:image" content="/placeholder.svg" />
        
        <link rel="canonical" href="https://seudominio.com/iptv-pago" />
      </Helmet>

      <div className="min-h-screen bg-black">
        <Header />
        <section className="bg-muted/10 py-4">
          <div className="container mx-auto px-4">
            <SimpleBreadcrumb currentPage="IPTV Pago" />
          </div>
        </section>
        
        <main className="pt-0">

          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-primary/20 to-secondary/20">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                IPTV Pago
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Mais qualidade, mais conteúdo! Descubra as vantagens do IPTV pago com assinatura sem fidelidade e pacotes acessíveis.
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
                    alt="IPTV Pago" 
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
                    Muitos usuários começam testando listas gratuitas, mas logo percebem limitações: instabilidade, poucos canais e qualidade de imagem inferior. É aí que entra o iptv pago. Ao optar por um serviço profissional, você garante acesso a uma biblioteca completa, servidores estáveis e suporte técnico sempre disponível.
                  </p>

                  <p>
                    Enquanto versões gratuitas funcionam como um "teste", o serviço de IPTV pago foi criado para quem busca uma solução confiável, segura e de longo prazo.
                  </p>

                  <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">
                    Provedor de IPTV confiável
                  </h2>
                  
                  <p>
                    Escolher um bom provedor de IPTV é fundamental para ter a melhor experiência. Nosso sistema oferece suporte dedicado, atualizações constantes e compatibilidade com Smart TVs, TV Box, celulares e computadores.
                  </p>

                  <p>
                    Com um único login, você pode assistir onde quiser, sem travamentos ou quedas de conexão.
                  </p>

                  <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">
                    Melhores IPTV pagos
                  </h2>

                  <p>
                    O mercado está cheio de opções, mas os melhores IPTV pagos se destacam pela qualidade de transmissão em HD, Full HD e até 4K, além da variedade de canais. Filmes, séries, esportes, notícias, infantis, música e muito mais ficam disponíveis em uma única plataforma.
                  </p>

                  <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">
                    Assinatura de IPTV sem burocracia
                  </h2>

                  <p>
                    Nossa assinatura de IPTV é simples e sem fidelidade. Você escolhe o plano, ativa na hora e já pode começar a assistir. Se quiser interromper, basta cancelar sem taxas escondidas. A ideia é oferecer liberdade total ao usuário.
                  </p>

                  <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">
                    Pacote de canais IPTV
                  </h2>

                  <p>
                    Cada cliente tem necessidades diferentes. Por isso, você pode personalizar seu pacote de canais IPTV de acordo com seus interesses. Quer mais esportes? Prefere filmes e séries? Ou canais infantis para os pequenos? Aqui você monta o plano ideal para sua rotina.
                  </p>

                  <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">
                    Plano IPTV que cabe no seu bolso
                  </h2>

                  <p>
                    Outra vantagem é a flexibilidade. Oferecemos plano IPTV mensal, trimestral, semestral e anual, com valores acessíveis e benefícios extras. Assim, você escolhe de acordo com seu orçamento, sem abrir mão da qualidade.
                  </p>

                  <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">
                    Vantagens do IPTV Pago
                  </h2>

                  <ul className="list-disc pl-6 space-y-2">
                    <li>Mais de 100 mil conteúdos disponíveis.</li>
                    <li>Servidores estáveis e transmissão em alta definição.</li>
                    <li>Catálogo atualizado com lançamentos de filmes e séries.</li>
                    <li>Programação nacional e internacional.</li>
                    <li>Pagamento seguro via Pix, cartão ou boleto.</li>
                  </ul>

                  <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">
                    Por que investir em um IPTV pago?
                  </h2>

                  <p>
                    Porque você passa a ter controle total da sua programação sem abrir mão da qualidade. O iptv pago garante acesso ilimitado, suporte 24 horas e uma experiência superior à TV convencional, com custo muito menor.
                  </p>

                  <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">
                    Faça o teste e comprove
                  </h2>

                  <p>
                    Não fique preso às limitações das listas gratuitas. Descubra agora como é ter milhares de canais e filmes ao seu alcance com o iptv pago.
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

export default IptvPago;