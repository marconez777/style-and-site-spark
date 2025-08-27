import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const ExperienceSection = () => {
  const features = [
    "Assista onde quiser: No celular, Smart TV, notebook ou tablet.",
    "Sem cabos e antenas: Funciona 100% via internet.",
    "Alta qualidade: Canais, filmes e séries em HD, Full HD e até 4K.",
    "Suporte 24h: Atendimento rápido sempre que você precisar."
  ];

  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left side - Image */}
          <div className="relative">
            <div className="relative w-full h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
              {/* TV/Living room simulation */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-900/30 to-purple-900/30 rounded-2xl">
                <div className="absolute inset-8 bg-gray-900 rounded-xl flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 mx-auto bg-primary rounded-xl flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                    <div className="text-white">
                      <div className="text-lg font-semibold">IPTV Experience</div>
                      <div className="text-sm text-gray-300">Complete Experience</div>
                    </div>
                    {/* Simulated app icons grid */}
                    <div className="grid grid-cols-4 gap-2 mt-6 max-w-xs mx-auto">
                      {Array.from({length: 8}).map((_, i) => (
                        <div key={i} className="w-12 h-12 bg-gradient-to-br from-primary/50 to-accent/50 rounded-lg" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                <span className="text-white">Experimente a Melhor</span>
                <br />
                <span className="text-white">Resolução</span>
                <br />
                <span className="text-primary text-6xl font-black">4K</span>
              </h2>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                Centenas de canais ao vivo, filmes e séries sem precisar de 
                antenas ou cabos, com qualidade de imagem superior e sem 
                travamentos.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <Check className="w-6 h-6 text-green-500 mr-4 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-lg">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-12 py-6 text-xl font-bold"
              >
                COMEÇAR TESTE
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;