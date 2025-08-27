import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const Pricing = () => {
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
    <section id="plans" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              Planos IPTV Ar Play
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Escolha o plano ideal para você e tenha acesso a melhor experiência IPTV do 
            mercado, com qualidade Full HD, estabilidade e suporte 24h!
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className="bg-gray-900/80 border-gray-700 hover:bg-gray-800/80 transition-all duration-300">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold text-purple-400 mb-4">
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
                <Button className="w-full text-lg py-6 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white rounded-lg font-semibold">
                  Assinar Agora
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;