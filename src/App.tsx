import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { Route, Switch, Router as WouterRouter, useLocation } from 'wouter';
import { useEffect } from 'react';

import Home from '@/pages/home';
import About from '@/pages/about';
import Resume from '@/pages/resume';
import AmericanNational from '@/pages/work/american-national';
import ChaloChalo from '@/pages/work/chalo-chalo';
import MyHouseDeals from '@/pages/work/myhousedeals';
import PromoArchitect from '@/pages/work/promo-architect';
import OmsAccountSetup from '@/pages/work/oms-account-setup';

const queryClient = new QueryClient();

function ScrollToTop() {
  const [pathname] = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/resume" component={Resume} />
      <Route path="/work/american-national" component={AmericanNational} />
      <Route path="/work/chalo-chalo" component={ChaloChalo} />
      <Route path="/work/myhousedeals" component={MyHouseDeals} />
      <Route path="/work/promo-architect" component={PromoArchitect} />
      <Route path="/work/oms-account-setup" component={OmsAccountSetup} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <ScrollToTop />
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
