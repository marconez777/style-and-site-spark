import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SimpleBreadcrumb } from "@/components/ui/SimpleBreadcrumb";
import { Button } from "@/components/ui/button";

interface PageTemplateProps {
  title: string;
  description: string;
  keywords: string;
  canonicalUrl: string;
  currentPage: string;
  h1Title: string;
  subtitle?: string;
  children?: React.ReactNode;
}

const PageTemplate = ({ 
  title, 
  description, 
  keywords, 
  canonicalUrl, 
  currentPage, 
  h1Title, 
  subtitle,
  children 
}: PageTemplateProps) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content="Ar Play Digital" />
        
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/placeholder.svg" />
        <meta property="og:url" content={canonicalUrl} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="/placeholder.svg" />
        
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>

      <div className="min-h-screen bg-black">
        <Header />
        <section className="bg-muted/10 py-4">
          <div className="container mx-auto px-4">
            <SimpleBreadcrumb currentPage={currentPage} />
          </div>
        </section>
        
        <main className="pt-0">
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-primary/20 to-secondary/20">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                {h1Title}
              </h1>
              {subtitle && (
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  {subtitle}
                </p>
              )}
              <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg">
                TESTE GRÁTIS AGORA
              </Button>
            </div>
          </section>

          {/* Custom Content */}
          {children}
        </main>

        <Footer />
      </div>
    </>
  );
};

export default PageTemplate;