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

      <div className="min-h-screen bg-black">
        <Header />
        <section className="bg-muted/10 py-4">
          <div className="container mx-auto px-4">
            <SimpleBreadcrumb currentPage="IPTV no celular" />
          </div>
        </section>
        
        <main className="pt-0">
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-primary/20 to-secondary/20">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                IPTV no celular
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transforme seu smartphone em uma televisão portátil. Assista filmes, séries e canais ao vivo sempre com você!
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
                    alt="IPTV no celular" 
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
                    Com o iptv no celular, você transforma seu smartphone em uma verdadeira televisão portátil. Basta baixar um aplicativo compatível, inserir sua lista de canais e aproveitar transmissões ao vivo, filmes e séries de qualquer lugar. Seja no ônibus, no intervalo do trabalho ou em casa, o entretenimento fica sempre ao alcance dos dedos.
                  </p>

                  <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">
                    Reprodutor IPTV Android
                  </h2>
                  
                  <p>
                    Quem usa sistema Android pode instalar facilmente um reprodutor IPTV Android direto da Play Store. Ele permite rodar listas M3U, organizar canais e ainda salvar favoritos. Tudo com interface simples e intuitiva para não perder tempo com configurações complexas.
                  </p>

                  <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">
                    Aplicativo IPTV iOS
                  </h2>

                  <p>
                    Usuários de iPhone também não ficam de fora. Com um aplicativo IPTV iOS, é possível acessar os mesmos conteúdos com desempenho otimizado para iOS, garantindo imagens fluidas e estáveis em qualquer modelo de iPhone ou iPad.
                  </p>

                  <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">
                    Como assistir IPTV no celular
                  </h2>

                  <p>
                    Muitos acreditam que a configuração é complicada, mas aprender como assistir IPTV no celular é simples:
                  </p>

                  <ul className="list-disc pl-6 space-y-2">
                    <li>Tenha conexão estável de internet.</li>
                    <li>Baixe o aplicativo IPTV recomendado para seu sistema.</li>
                    <li>Insira sua lista de canais IPTV mobile.</li>
                    <li>Comece a assistir a filmes, esportes e séries ao vivo.</li>
                  </ul>

                  <p>
                    Em poucos minutos o iptv no celular estará pronto, funcionando sem travamentos.
                  </p>

                  <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">
                    Configurar IPTV no smartphone é fácil
                  </h2>

                  <p>
                    Seja em Android ou iOS, hoje os apps são desenvolvidos para simplificar a experiência. Em apenas quatro ou cinco toques na tela, você consegue configurar IPTV no smartphone e liberar todo o catálogo disponível.
                  </p>

                  <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">
                    O que você encontra no IPTV no celular
                  </h2>

                  <p>
                    Ao instalar o player e ativar o serviço, você tem acesso imediato a:
                  </p>

                  <ul className="list-disc pl-6 space-y-2">
                    <li>Séries completas, lançamentos e clássicos.</li>
                    <li>Filmes nacionais e internacionais em Full HD e 4K.</li>
                    <li>Programação esportiva ao vivo.</li>
                    <li>Canais de notícias, variedades e muito mais.</li>
                  </ul>

                  <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">
                    Melhor IPTV online para assistir sem travar
                  </h2>

                  <p>
                    Nem todos os serviços entregam estabilidade. Por isso, escolher o melhor IPTV online faz diferença. Nossa plataforma oferece suporte dedicado, servidores de alta performance e atualizações frequentes, garantindo que o iptv no celular funcione de forma estável e com máxima qualidade de imagem.
                  </p>

                  <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">
                    Pronto para testar agora?
                  </h2>

                  <p>
                    Não dependa mais da televisão tradicional. Com o iptv no celular, você tem liberdade total para assistir o que quiser, quando quiser, sem cabos e sem pacotes caros.
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

export default IptvNoCelular;