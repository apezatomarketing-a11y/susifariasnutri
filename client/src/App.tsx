import { useEffect } from 'react';
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, useLocation } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import SidebarMenu from "./components/SidebarMenu";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import NutritionClinical from "./pages/NutritionClinical";
import NutritionSports from "./pages/NutritionSports";
import Mounjaro from "./pages/Mounjaro";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

function Router() {
  const [location] = useLocation();

  // Scroll to top when location changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  // make sure to consider if you need authentication for certain routes
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={AboutMe} />
      <Route path="/nutrition/clinical" component={NutritionClinical} />
      <Route path="/nutrition/sports" component={NutritionSports} />
      <Route path="/mounjaro" component={Mounjaro} />
      <Route path="/services" component={Services} />
      <Route path="/contact" component={Contact} />
      <Route path="/404" component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="dark"
        switchable
      >
        <TooltipProvider>
          <Toaster />
          <div className="flex">
            <SidebarMenu />
            <main className="flex-1 md:ml-64">
              <Router />
            </main>
          </div>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
