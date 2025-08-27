import { Card, CardContent } from "@/components/ui/card";
import { 
  Tv, 
  Smartphone, 
  Monitor, 
  Headphones, 
  Shield, 
  Zap, 
  Globe, 
  Clock 
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Tv,
      title: "Múltiplos Dispositivos",
      description: "Assista em TV, celular, tablet e computador simultaneamente"
    },
    {
      icon: Shield,
      title: "Conexão Segura",
      description: "Criptografia avançada e servidores protegidos para sua segurança"
    },
    {
      icon: Zap,
      title: "Sem Travamentos",
      description: "Servidores dedicados garantem transmissão estável e rápida"
    },
    {
      icon: Globe,
      title: "Canais Internacionais",
      description: "Acesso a canais do mundo todo em diversos idiomas"
    },
    {
      icon: Clock,
      title: "Suporte 24/7",
      description: "Atendimento especializado disponível a qualquer hora"
    },
    {
      icon: Smartphone,
      title: "App Mobile",
      description: "Aplicativo exclusivo para Android e iOS com interface intuitiva"
    }
  ];

  return (
    <section id="features" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="text-sm font-medium text-primary">Recursos Premium</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Tudo que você precisa</span>
            <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              em um só lugar
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nossa plataforma oferece a mais completa experiência IPTV com recursos 
            avançados e qualidade incomparável.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <feature.icon className="w-7 h-7 text-primary" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">+50K</div>
            <div className="text-muted-foreground">Clientes Ativos</div>
          </div>
          
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">99.9%</div>
            <div className="text-muted-foreground">Uptime Garantido</div>
          </div>
          
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">24/7</div>
            <div className="text-muted-foreground">Suporte Técnico</div>
          </div>
          
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">+10K</div>
            <div className="text-muted-foreground">Canais HD/4K</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;