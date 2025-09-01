import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SimpleBreadcrumb } from "@/components/ui/SimpleBreadcrumb";
import { Button } from "@/components/ui/button";
import { Smartphone, Tv, Monitor, Tablet } from "lucide-react";
import Pricing from "@/components/Pricing";

const AplicativoIptvGratuito = () => {
  return (
    <>
      <Helmet>
        <title>Aplicativo IPTV Gratuito – Tenha TV e Filmes no Seu Bolso</title>
        <meta name="description" content="Aplicativo IPTV gratuito e assista filmes, séries e canais ao vivo em alta qualidade. Compatível com PC, Android e Smart TV. Teste grátis agora mesmo!" />
        <meta name="keywords" content="aplicativo iptv gratuito, iptv para pc, reprodutor iptv android, apps iptv grátis, baixar iptv player grátis, lista canais grátis iptv" />
        <meta name="author" content="Ar Play Digital" />
        
        <meta property="og:title" content="Aplicativo IPTV Gratuito – Tenha TV e Filmes no Seu Bolso" />
        <meta property="og:description" content="Aplicativo IPTV gratuito e assista filmes, séries e canais ao vivo em alta qualidade. Compatível com PC, Android e Smart TV. Teste grátis agora mesmo!" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/placeholder.svg" />
        <meta property="og:url" content="https://arplaydigital.com/aplicativo-iptv-gratuito" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Aplicativo IPTV Gratuito – Tenha TV e Filmes no Seu Bolso" />
        <meta name="twitter:description" content="Aplicativo IPTV gratuito e assista filmes, séries e canais ao vivo em alta qualidade!" />
        <meta name="twitter:image" content="/placeholder.svg" />
        
        <link rel="canonical" href="https://arplaydigital.com/aplicativo-iptv-gratuito" />
      </Helmet>

      <div className="min-h-screen bg-black">
        <Header />
        <section className="bg-muted/10 py-4">
          <div className="container mx-auto px-4">
            <SimpleBreadcrumb currentPage="Aplicativo IPTV Gratuito" />
          </div>
        </section>
        
        <main className="pt-0">

          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-primary/20 to-secondary/20">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Aplicativo IPTV Gratuito
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Tenha TV e filmes no seu bolso com qualidade premium!
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
                    alt="Aplicativo IPTV Gratuito" 
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-white mb-6">
                    App Completo Gratuito
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
                        Aplicativo 100% gratuito
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        Interface amigável e rápida
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        Compatível com todos dispositivos
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        Lista de canais grátis incluída
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
                    O que antes era privilégio de quem tinha pacotes caros de TV por assinatura agora está disponível de forma simples e prática. O aplicativo IPTV gratuito permite assistir filmes, séries e canais ao vivo com apenas alguns cliques, direto da sua Smart TV, celular ou computador.
                  </p>
                  <p>
                    Imagine poder abrir um único app e encontrar desde jogos de futebol ao vivo até o último episódio daquela série que você ama. É exatamente isso que o IPTV oferece: liberdade, variedade e custo zero para começar.
                  </p>

                  <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">
                    Muito além de um simples player
                  </h2>
                  <p>
                    Quem baixa um aplicativo IPTV gratuito descobre rapidamente que ele não é só um reprodutor de vídeos. Ele conecta você a uma verdadeira central de entretenimento, sem precisar de cabos ou antenas.
                  </p>
                  <p>
                    E para quem gosta de versatilidade:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Existe aplicativo IPTV para PC, ideal para assistir na tela grande do notebook ou desktop.</li>
                    <li>Há também o reprodutor de IPTV para Android, perfeito para levar seus canais no bolso.</li>
                    <li>E claro, compatibilidade com TV Box e Smart TVs modernas.</li>
                  </ul>

                  <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">
                    Melhores apps de IPTV grátis
                  </h2>
                  <p>
                    O mercado está cheio de opções, mas os melhores apps de IPTV grátis se destacam pela estabilidade, imagem em alta definição e interface amigável. Nosso aplicativo foi desenvolvido para reunir exatamente essas qualidades: rápido, leve e sem anúncios que atrapalham a sua diversão.
                  </p>

                  <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">
                    Conteúdo sempre disponível
                  </h2>
                  <p>
                    Com ele, você tem acesso a:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Séries completas em diversas categorias</li>
                    <li>Filmes atualizados, do clássico ao lançamento</li>
                    <li>Canais nacionais e internacionais, inclusive esportivos</li>
                    <li>Transmissões em HD, Full HD e até 4K</li>
                  </ul>

                  <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">
                    Lista de canais grátis para IPTV
                  </h2>
                  <p>
                    Um diferencial muito procurado é a possibilidade de usar uma lista de canais grátis para IPTV, que amplia ainda mais sua programação sem custo. Isso significa que você pode assistir notícias, novelas, futebol e muito mais, tudo dentro do mesmo aplicativo.
                  </p>
                  <p>
                    Quem experimenta percebe que o IPTV coloca literalmente o controle nas suas mãos: você escolhe o que assistir, sem depender da grade fixa das TVs tradicionais.
                  </p>

                  <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">
                    Baixar IPTV player grátis é rápido
                  </h2>
                  <p>
                    O processo é simples: em poucos minutos você pode baixar IPTV player grátis, instalar no seu dispositivo e iniciar sua experiência. Não é necessário conhecimento técnico, basta seguir as instruções enviadas após o cadastro no teste.
                  </p>
                  <p>
                    E se você quiser ampliar a experiência, pode contar com nosso suporte para configurar corretamente o app e aproveitar tudo o que ele oferece.
                  </p>

                  <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">
                    Streaming IPTV: estabilidade e qualidade
                  </h2>
                  <p>
                    O streaming IPTV é o coração desse serviço. Diferente de sites inseguros, nosso sistema utiliza servidores de alto desempenho, garantindo transmissões sem travamentos, mesmo em horários de grande audiência.
                  </p>
                  <p>
                    Assim, você pode assistir sua programação preferida sem se preocupar com interrupções ou perda de qualidade.
                  </p>

                  <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">
                    Pronto para testar?
                  </h2>
                  <p>
                    O aplicativo IPTV gratuito está disponível para você começar agora mesmo. Baixe, explore os canais e veja como é fácil transformar qualquer tela em um cinema, uma arena esportiva ou uma TV completa de entretenimento.
                  </p>

                  <div className="text-center mt-8">
                    <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg">
                      BAIXAR APLICATIVO GRÁTIS
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

export default AplicativoIptvGratuito;