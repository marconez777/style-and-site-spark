import { Button } from "@/components/ui/button";
import { Play, Tv, Wifi, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/10" />
      
      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                <Zap className="w-4 h-4 text-primary mr-2" />
                <span className="text-sm font-medium text-primary">Transmissão Ultra HD</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="text-foreground">Sua TV,</span>
                <br />
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Sem Limites
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-lg">
                Acesse milhares de canais em 4K, filmes, séries e esportes ao vivo. 
                A melhor experiência IPTV do Brasil.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Tv className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">+10.000</div>
                  <div className="text-sm text-muted-foreground">Canais</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Play className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Qualidade 4K</div>
                  <div className="text-sm text-muted-foreground">Ultra HD</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                  <Wifi className="w-5 h-5 text-secondary-foreground" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">99.9%</div>
                  <div className="text-sm text-muted-foreground">Uptime</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8">
                Começar Teste Grátis
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                Ver Demonstração
              </Button>
            </div>

            <div className="text-sm text-muted-foreground">
              ✓ 7 dias grátis • ✓ Sem compromisso • ✓ Suporte 24h
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative w-full h-[400px] lg:h-[500px] rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-border/50 overflow-hidden">
              {/* TV Frame */}
              <div className="absolute inset-4 bg-background rounded-xl border-2 border-border shadow-2xl">
                {/* Screen */}
                <div className="w-full h-full rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 mx-auto bg-primary/20 rounded-full flex items-center justify-center">
                      <Play className="w-10 h-10 text-primary" />
                    </div>
                    <div className="text-muted-foreground">
                      <div className="text-lg font-semibold">Transmissão ao Vivo</div>
                      <div className="text-sm">4K Ultra HD</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;