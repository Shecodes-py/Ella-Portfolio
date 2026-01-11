import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Afrivate from "./pages/projects/Afrivate";
import AIBlogGenerator from "./pages/projects/Ai-Blog-Gen";
import CampusConnect from "./pages/projects/CampusConnect";
import ClearRoute from "./pages/projects/ClearRoute";
import Findr from "./pages/projects/Findr";
import RoaCleaning from "./pages/projects/RoaCleaning";
import { Analytics } from "@vercel/analytics/next";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/projects/afrivate" element={<Afrivate />} />
            <Route path="/projects/ai-blog-gen" element={<AIBlogGenerator />} />
            <Route path="/projects/campusconnect" element={<CampusConnect />} />
            <Route path="/projects/clearroute" element={<ClearRoute />} />
            <Route path="/projects/findr" element={<Findr />} />
            <Route path="/projects/roa-cleaning" element={<RoaCleaning />} />
            {/* <Analytics /> */}

            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
