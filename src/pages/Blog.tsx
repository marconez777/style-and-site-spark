import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight } from "lucide-react";

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "Como Configurar IPTV na sua Smart TV em 2025",
      excerpt: "Aprenda o passo a passo completo para configurar seu IPTV em qualquer modelo de Smart TV. Guia atualizado com todas as marcas e modelos.",
      author: "Equipe Ar Play",
      date: "15 de Janeiro, 2025",
      image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=250&fit=crop",
      category: "Tutorial"
    },
    {
      id: 2,
      title: "Os Melhores Dispositivos para IPTV em 2025",
      excerpt: "Descubra quais são os dispositivos mais recomendados para assistir IPTV com a melhor qualidade e estabilidade disponível no mercado.",
      author: "Equipe Ar Play",
      date: "12 de Janeiro, 2025",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=250&fit=crop",
      category: "Reviews"
    },
    {
      id: 3,
      title: "IPTV vs TV por Assinatura: Qual a Melhor Opção?",
      excerpt: "Análise completa comparando IPTV e TV tradicional. Vantagens, desvantagens e qual opção oferece melhor custo-benefício para você.",
      author: "Equipe Ar Play",
      date: "08 de Janeiro, 2025",
      image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=400&h=250&fit=crop",
      category: "Comparativo"
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-black text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Blog Ar Play
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Fique por dentro das últimas novidades, dicas e tutoriais sobre IPTV. 
              Conteúdo exclusivo para você aproveitar ao máximo sua experiência digital.
            </p>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20 bg-black text-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {posts.map((post) => (
                <Card key={post.id} className="bg-gray-900/50 border-gray-800 hover:bg-gray-800/50 transition-all duration-300 overflow-hidden group">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <CardHeader className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                  </CardHeader>

                  <CardContent className="px-6 pb-6">
                    <p className="text-gray-300 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <div className="flex items-center space-x-2">
                        <User size={16} />
                        <span>{post.author}</span>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Calendar size={16} />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group">
                      Ler Mais
                      <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More Button */}
            <div className="text-center mt-12">
              <Button className="bg-transparent border border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3">
                Carregar Mais Posts
              </Button>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 bg-gray-900/30">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Fique por Dentro
              </h2>
              <p className="text-gray-300 mb-8">
                Receba as últimas novidades e dicas sobre IPTV diretamente no seu email.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Seu email"
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary"
                />
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3">
                  Inscrever
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;