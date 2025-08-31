import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SimpleBreadcrumb } from "@/components/ui/SimpleBreadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Helmet } from "react-helmet-async";

const Planos = () => {
  const plans = [
    {
      name: "Mensal",
      price: "R$ 29,90",
      description: "Ideal para testar a qualidade Ar Play com total liberdade.",
      features: [
        "+100.000 conteúdos: canais, filmes, séries e mais",
        "Qualidade HD/SD com fluidez",
        "Guia de programação (EPG)",
        "Assista em celular, tablet ou PC",
        "Smart TVs Samsung, LG, Android TV",
        "Suporte a TV Box, Fire Stick, Chromecast",
        "Conteúdo adulto opcional com senha"
      ]
    },
    {
      name: "Trimestral",
      price: "R$ 75,00",
      description: "Aproveite 3 meses com economia e estabilidade garantida.",
      features: [
        "+100.000 conteúdos: canais, filmes, séries e mais",
        "Qualidade HD/SD com fluidez",
        "Guia de programação (EPG)",
        "Assista em celular, tablet ou PC",
        "Smart TVs Samsung, LG, Android TV",
        "Suporte a TV Box, Fire Stick, Chromecast",
        "Conteúdo adulto opcional com senha"
      ]
    },
    {
      name: "Semestral",
      price: "R$ 140,00",
      description: "Mais tempo de diversão com preço imbatível.",
      features: [
        "+100.000 conteúdos: canais, filmes, séries e mais",
        "Qualidade HD/SD com fluidez",
        "Guia de programação (EPG)",
        "Assista em celular, tablet ou PC",
        "Smart TVs Samsung, LG, Android TV",
        "Suporte a TV Box, Fire Stick, Chromecast",
        "Conteúdo adulto opcional com senha"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Helmet>
        <title>Planos IPTV Ar Play - Preços R$29,90 | Teste Grátis 24h</title>
        <meta name="description" content="Planos IPTV Ar Play: Mensal R$29,90, Trimestral R$75, Semestral R$140. +100 mil canais HD, EPG, suporte 24h. Teste grátis sem compromisso!" />
        <meta name="keywords" content="planos iptv, preços iptv, iptv barato, ar play preços, teste grátis iptv, melhor preço iptv brasil" />
        <link rel="canonical" href="https://arplaydigital.com/planos" />
      </Helmet>
      
      <Header />
      <SimpleBreadcrumb currentPage="Planos" />
      <main className="pt-0">
        {/* Hero Section */}
        <section className="py-20 bg-black text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Planos IPTV Ar Play
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-12">
              Escolha o plano ideal para você e tenha acesso à melhor experiência IPTV do 
              mercado, com qualidade Full HD, estabilidade e suporte 24h! Nossa plataforma 
              oferece mais de 100 mil conteúdos premium com a garantia de satisfação total.
            </p>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-20 bg-black text-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {plans.map((plan, index) => (
                <Card key={index} className="bg-gray-900/80 border-gray-700 hover:bg-gray-800/80 transition-all duration-300">
                  <CardHeader className="text-center pb-8">
                    <CardTitle className="text-2xl font-bold text-primary mb-4">
                      {plan.name}
                    </CardTitle>
                    <p className="text-gray-300 mb-6">{plan.description}</p>
                    
                    <div className="text-4xl md:text-5xl font-bold text-white mb-4">
                      {plan.price}
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    {/* Features */}
                    <ul className="space-y-4">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <Button className="w-full text-lg py-6 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold">
                      Assinar Agora
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Planos;