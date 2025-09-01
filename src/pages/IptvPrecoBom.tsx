import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SimpleBreadcrumb } from "@/components/ui/SimpleBreadcrumb";
import { Smartphone, Tv, Monitor, HardDrive } from "lucide-react";
import Pricing from "@/components/Pricing";

const IptvPrecoBom = () => {
  return (
    <>
      <Helmet>
        <title>IPTV Preço Bom – Entretenimento Completo Sem Pesar no Bolso</title>
        <meta name="description" content="Assista filmes, séries e canais ao vivo com um iptv preço bom. Planos acessíveis, qualidade HD/4K e custo-benefício garantido. Peça seu teste grátis!" />
        <meta name="keywords" content="iptv preço bom, iptv barato, custo benefício iptv, plano iptv acessível" />
        <meta name="author" content="Ar Play IPTV" />
        <meta property="og:title" content="IPTV Preço Bom – Entretenimento Completo Sem Pesar no Bolso" />
        <meta property="og:description" content="Assista filmes, séries e canais ao vivo com um iptv preço bom. Planos acessíveis, qualidade HD/4K e custo-benefício garantido. Peça seu teste grátis!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://arplayiptv.com/iptv-preco-bom" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="IPTV Preço Bom – Entretenimento Completo Sem Pesar no Bolso" />
        <meta name="twitter:description" content="Assista filmes, séries e canais ao vivo com um iptv preço bom. Planos acessíveis, qualidade HD/4K e custo-benefício garantido. Peça seu teste grátis!" />
        <link rel="canonical" href="https://arplayiptv.com/iptv-preco-bom" />
      </Helmet>

      <Header />
      
      <main>
        <SimpleBreadcrumb currentPage="IPTV Preço Bom" />

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-900 via-black to-purple-900 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                IPTV Preço Bom
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Entretenimento completo sem pesar no bolso. Assista filmes, séries e canais ao vivo com qualidade HD/4K.
            </p>
            <Button className="text-lg px-8 py-6 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white rounded-lg font-semibold">
              Teste Grátis por 6 Horas
            </Button>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <Smartphone className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Smartphone</h3>
                <p className="text-gray-300">Android e iOS</p>
              </div>
              <div className="text-center">
                <Tv className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Smart TV</h3>
                <p className="text-gray-300">Samsung, LG, Android TV</p>
              </div>
              <div className="text-center">
                <Monitor className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">PC/Mac</h3>
                <p className="text-gray-300">Windows, macOS, Linux</p>
              </div>
              <div className="text-center">
                <HardDrive className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">TV Box</h3>
                <p className="text-gray-300">Fire Stick, Chromecast</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <Pricing />

        {/* Text Content Section */}
        <section className="py-16 bg-black text-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="prose prose-lg prose-invert mx-auto">
              <p className="text-lg mb-8">
                Hoje em dia ninguém precisa gastar uma fortuna para ter acesso a filmes, séries e canais ao vivo. Com um iptv preço bom, você garante qualidade de imagem, estabilidade e variedade sem comprometer seu orçamento. Essa é a alternativa perfeita para quem busca modernidade e economia em um único serviço.
              </p>

              <h2 className="text-3xl font-bold mb-6 text-purple-400">IPTV custo-benefício</h2>
              <p className="text-lg mb-8">
                O grande diferencial está no IPTV custo-benefício. Em vez de pagar por pacotes tradicionais com canais que você nunca assiste, aqui você tem flexibilidade para escolher o que realmente importa: esportes, cinema, programação infantil, notícias e muito mais.
              </p>

              <h2 className="text-3xl font-bold mb-6 text-purple-400">IPTV barato, mas com qualidade</h2>
              <p className="text-lg mb-8">
                Muitas pessoas associam "preço baixo" a serviço ruim, mas não é o caso. Nosso IPTV barato oferece catálogo completo, transmissões em HD, Full HD e até 4K, além de servidores estáveis para evitar travamentos. O segredo está na estrutura profissional que garante um serviço acessível e confiável.
              </p>

              <h2 className="text-3xl font-bold mb-6 text-purple-400">Preço IPTV que cabe no seu bolso</h2>
              <p className="text-lg mb-8">
                Ao contratar, você encontra preço IPTV flexível, com planos mensais, trimestrais e anuais. Assim, cada cliente pode escolher de acordo com suas necessidades. É entretenimento sem fidelidade, sem taxas escondidas e sem surpresas desagradáveis na fatura.
              </p>

              <h2 className="text-3xl font-bold mb-6 text-purple-400">Plano IPTV sob medida</h2>
              <p className="text-lg mb-8">
                Com nosso plano IPTV, você não paga por conteúdos que não consome. É possível montar sua programação ideal, adicionando apenas os canais que fazem sentido para sua rotina. Essa personalização garante muito mais satisfação pelo valor investido.
              </p>

              <h2 className="text-3xl font-bold mb-6 text-purple-400">Preço acessível IPTV – Assista mais pagando menos</h2>
              <p className="text-lg mb-8">
                O objetivo é democratizar o acesso ao entretenimento. Por isso, trabalhamos com um preço acessível IPTV, que se adapta a diferentes perfis de usuários. Seja para uso individual, para toda a família ou até para quem quer ter programação extra em vários dispositivos, sempre há uma opção econômica.
              </p>

              <h2 className="text-3xl font-bold mb-6 text-purple-400">IPTV baratinho, mas completo</h2>
              <p className="text-lg mb-8">
                Se você procura um iptv baratinho, vai se surpreender. Mesmo os planos mais econômicos incluem filmes, séries, esportes e canais ao vivo em altíssima qualidade. É um pacote completo, sem abrir mão da performance.
              </p>

              <h2 className="text-3xl font-bold mb-6 text-purple-400">Por que escolher IPTV preço bom?</h2>
              <ul className="text-lg mb-8 space-y-2">
                <li>Mais de 100 mil conteúdos disponíveis.</li>
                <li>Servidores estáveis e transmissão sem travamentos.</li>
                <li>Filmes e séries sempre atualizados.</li>
                <li>Programação nacional e internacional.</li>
                <li>Planos flexíveis que cabem no bolso.</li>
                <li>Pagamento via Pix, cartão ou boleto.</li>
              </ul>

              <h2 className="text-3xl font-bold mb-6 text-purple-400">Experimente sem compromisso</h2>
              <p className="text-lg mb-8">
                Não fique limitado à TV tradicional ou a serviços caros. Descubra como é simples e vantajoso ter um iptv preço bom e mudar sua forma de assistir televisão.
              </p>

              <div className="text-center">
                <Button className="text-lg px-8 py-6 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white rounded-lg font-semibold">
                  Comece Agora Mesmo
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

export default IptvPrecoBom;