import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Team from "./pages/Team";
import Academy from "./pages/Academy";
import AcademyCohort from "./pages/AcademyCohort";
import NotFound from "./pages/NotFound";
import ScrollManager from "./components/ScrollManager";
import React from "react";
import { LanguageProvider } from "./i18n";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <LanguageProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter basename={import.meta.env.BASE_URL}>
            <ScrollManager />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/team" element={<Team />} />
              <Route path="/academy" element={<Academy />} />
              <Route path="/academy/:cohortSlug" element={<AcademyCohort />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </LanguageProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
