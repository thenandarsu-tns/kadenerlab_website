import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import Research from "@/pages/Research";
import People from "@/pages/People";
import Publications from "@/pages/Publications";
import News from "@/pages/News";
import Join from "@/pages/Join";
import Contact from "@/pages/Contact";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/research" component={Research} />
        <Route path="/people" component={People} />
        <Route path="/publications" component={Publications} />
        <Route path="/news" component={News} />
        <Route path="/join" component={Join} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
