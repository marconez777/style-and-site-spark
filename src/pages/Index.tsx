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
        <title>IPTV Ar Play Digital - Melhor IPTV do Brasil | +100.000 Conteúdos</title>
        <meta name="description" content="IPTV Ar Play Digital: +100.000 canais, filmes e séries em HD/4K. Planos a partir de R$29,90. Teste grátis! Melhor IPTV do Brasil com suporte 24h." />
        <meta name="keywords" content="iptv brasil, iptv premium, ar play digital, iptv hd, canais iptv, teste grátis iptv" />
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
