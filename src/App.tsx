import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import RecipeList from "./pages/RecipeList";
import PopularRecipes from "./pages/PopularRecipes";
import SeasonalRecipes from "./pages/SeasonalRecipes";
import Community from "./pages/Community";
import CategoryPage from "./pages/CategoryPage";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import RecipeDetail from "./pages/RecipeDetail";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/recipes" element={<RecipeList />} />
          <Route path="/popular" element={<PopularRecipes />} />
          <Route path="/seasonal" element={<SeasonalRecipes />} />
          <Route path="/community" element={<Community />} />
          <Route path="/category/:categoryName" element={<CategoryPage />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
