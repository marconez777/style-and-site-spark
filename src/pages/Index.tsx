import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import ExperienceSection from "@/components/ExperienceSection";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Helmet>
        <title>IPTV Ar Play Digital - Melhor IPTV Brasil 2025 | Teste Grátis</title>
        <meta name="description" content="IPTV Premium Ar Play: +100 mil canais HD/4K, filmes e séries. Planos R$29,90/mês. Teste grátis 24h! Melhor IPTV Brasil com suporte completo." />
        <meta name="keywords" content="iptv brasil, iptv premium, ar play digital, iptv hd, canais iptv, teste grátis iptv, melhor iptv 2025" />
        <meta name="author" content="Ar Play Digital" />
        
        <meta property="og:title" content="IPTV Ar Play Digital - Melhor IPTV Brasil 2025 | Teste Grátis" />
        <meta property="og:description" content="IPTV Premium Ar Play: +100 mil canais HD/4K, filmes e séries. Planos R$29,90/mês. Teste grátis 24h! Melhor IPTV Brasil com suporte completo." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/placeholder.svg" />
        <meta property="og:url" content="https://arplaydigital.com" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="IPTV Ar Play Digital - Melhor IPTV Brasil 2025" />
        <meta name="twitter:description" content="IPTV Premium Ar Play: +100 mil canais HD/4K, filmes e séries. Teste grátis 24h!" />
        <meta name="twitter:image" content="/placeholder.svg" />
        
        <link rel="canonical" href="https://arplaydigital.com" />
      </Helmet>
      
      <Header />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <ExperienceSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
