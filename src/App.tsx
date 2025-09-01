import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import Planos from "./pages/Planos";
import Sobre from "./pages/Sobre";
import Blog from "./pages/Blog";
import Dispositivos from "./pages/Dispositivos";
import Canais from "./pages/Canais";
import Streamings from "./pages/Streamings";
import IptvPlayerOnline from "./pages/IptvPlayerOnline";
import StreamingIptv from "./pages/StreamingIptv";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/planos" element={<Planos />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/dispositivos" element={<Dispositivos />} />
            <Route path="/canais" element={<Canais />} />
            <Route path="/streamings" element={<Streamings />} />
            <Route path="/iptv-player-online" element={<IptvPlayerOnline />} />
            <Route path="/streaming-iptv" element={<StreamingIptv />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
