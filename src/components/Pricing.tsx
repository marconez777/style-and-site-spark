import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Shield } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Básico",
      price: "R$ 29,90",
      period: "/mês",
      description: "Ideal para quem está começando",
      features: [
        "5.000+ canais em HD",
        "Filmes e séries",
        "2 dispositivos simultâneos",
        "Suporte por chat",
        "EPG (guia de programação)"
      ],
      popular: false,
      buttonText: "Escolher Plano"
    },
    {
      name: "Premium",
      price: "R$ 49,90",
      period: "/mês",
      description: "Nosso plano mais popular",
      features: [
        "10.000+ canais em 4K/HD",
        "Filmes, séries e documentários",
        "4 dispositivos simultâneos",
        "Suporte prioritário 24/7",
        "EPG completo",
        "Catch-up TV (7 dias)",
        "PPV esportes inclusos"
      ],
      popular: true,
      buttonText: "Começar Agora"
    },
    {
      name: "Ultra",
      price: "R$ 79,90",
      period: "/mês",
      description: "Para quem quer o melhor",
      features: [
        "15.000+ canais premium 4K",
        "Biblioteca completa VOD",
        "Dispositivos ilimitados",
        "Suporte VIP dedicado",
        "EPG avançado",
        "Catch-up TV (30 dias)",
        "Todos os PPV inclusos",
        "Canais adultos",
        "Servidor dedicado"
      ],
      popular: false,
      buttonText: "Assinar Ultra"
    }
  ];

  return (
    <section id="plans" className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="text-sm font-medium text-primary">Planos e Preços</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Escolha seu</span>
            <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              plano ideal
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Todos os planos incluem teste grátis de 7 dias e garantia de satisfação.
            Cancele a qualquer momento sem taxas.
          </p>

          {/* Savings Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
            <Star className="w-4 h-4 text-accent mr-2" />
            <span className="text-sm font-medium text-accent">
              Economize 30% no plano anual
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative overflow-hidden transition-all duration-300 hover:shadow-2xl ${
              plan.popular 
                ? 'ring-2 ring-primary scale-105 hover:scale-110' 
                : 'hover:scale-105'
            }`}>
              {plan.popular && (
                <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                  Mais Popular
                </Badge>
              )}
              
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold text-foreground">
                  {plan.name}
                </CardTitle>
                <p className="text-muted-foreground mb-4">{plan.description}</p>
                
                <div className="space-y-2">
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl md:text-5xl font-bold text-foreground">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground ml-1">{plan.period}</span>
                  </div>
                  
                  {plan.popular && (
                    <div className="text-sm text-accent font-medium">
                      Desconto de 25% aplicado
                    </div>
                  )}
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Features */}
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button 
                  className={`w-full text-lg py-6 ${
                    plan.popular 
                      ? 'bg-primary hover:bg-primary/90' 
                      : ''
                  }`}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  {plan.buttonText}
                </Button>

                <div className="text-center text-sm text-muted-foreground">
                  ✓ 7 dias grátis • ✓ Cancele quando quiser
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Money Back Guarantee */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-accent/10 border border-accent/20">
            <Shield className="w-5 h-5 text-accent mr-3" />
            <span className="text-accent font-medium">
              Garantia de satisfação de 30 dias ou seu dinheiro de volta
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;