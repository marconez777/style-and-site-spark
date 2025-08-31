import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SimpleBreadcrumb } from "@/components/ui/SimpleBreadcrumb";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Shield, Users, Headphones, Zap, Heart, Star } from "lucide-react";
import { Helmet } from "react-helmet-async";

const Sobre = () => {
  const benefits = [
    {
      icon: <Star className="w-6 h-6 text-primary" />,
      text: "melhor servidor IPTV 2025"
    },
    {
      icon: <Zap className="w-6 h-6 text-primary" />,
      text: "Atendimento rápido e direto pelo WhatsApp"
    },
    {
      icon: <Headphones className="w-6 h-6 text-primary" />,
      text: "Suporte técnico especializado"
    },
    {
      icon: <Shield className="w-6 h-6 text-primary" />,
      text: "Estabilidade e qualidade de serviço"
    },
    {
      icon: <Heart className="w-6 h-6 text-primary" />,
      text: "Total liberdade: sem fidelidade ou burocracia"
    },
    {
      icon: <Users className="w-6 h-6 text-primary" />,
      text: "Teste grátis e planos personalizados"
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Helmet>
        <title>Sobre Ar Play Digital - Líder IPTV Brasil | Nossa História</title>
        <meta name="description" content="Conheça a Ar Play Digital: empresa líder em IPTV Brasil. Tecnologia de ponta, suporte humanizado 24h e compromisso com qualidade desde 2020." />
        <meta name="keywords" content="sobre ar play, empresa iptv brasil, história ar play digital, melhor empresa iptv, iptv confiável" />
        <link rel="canonical" href="https://arplaydigital.com/sobre" />
      </Helmet>
      
      <Header />
      <SimpleBreadcrumb currentPage="Sobre" />
      <main className="pt-0">
        {/* Hero Section */}
        <section className="py-20 bg-black text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Sobre a Ar Play Digital
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed mb-12">
                Tecnologia, qualidade e atendimento humanizado para sua experiência digital completa.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 bg-black text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                    Quem Somos
                  </h2>
                  
                  <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                    <p>
                      A <strong className="text-primary">Ar Play Digital</strong> é sinônimo de praticidade, qualidade 
                      e atendimento rápido quando o assunto é tecnologia e entretenimento online. Com uma equipe 
                      especializada e suporte humanizado, oferecemos soluções digitais modernas e acessíveis para 
                      quem valoriza estabilidade, confiança e ótimo custo-benefício.
                    </p>
                    
                    <p>
                      Atuamos com o compromisso de garantir uma experiência simples, segura e completa, atendendo 
                      centenas de clientes em todo o Brasil. Se você busca agilidade, tecnologia de ponta e suporte 
                      real, a Ar Play é a sua escolha certa.
                    </p>
                  </div>
                </div>

                <div className="lg:pl-8">
                  <Card className="bg-gray-900/50 border-gray-800 p-8">
                    <CardContent className="p-0">
                      <h3 className="text-2xl font-bold text-primary mb-6">
                        Nossa Missão
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        Democratizar o acesso ao entretenimento digital de qualidade, oferecendo 
                        tecnologia de ponta com suporte humanizado e preços justos para todos os brasileiros.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Benefits Section */}
              <div className="mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Por que escolher a Ar Play?
                  </span>
                </h2>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {benefits.map((benefit, index) => (
                    <Card key={index} className="bg-gray-900/50 border-gray-800 hover:bg-gray-800/50 transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-4">
                          <div className="flex-shrink-0">
                            {benefit.icon}
                          </div>
                          <p className="text-gray-300 font-medium">
                            {benefit.text}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* CTA Section */}
              <div className="text-center">
                <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20 p-8">
                  <CardContent className="p-0">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                      Experimente Agora Mesmo!
                    </h3>
                    <p className="text-gray-300 mb-6 text-lg">
                      Faça seu teste grátis e comprove a qualidade do melhor IPTV do Brasil.
                    </p>
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold">
                      TESTE GRÁTIS AGORA
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Sobre;