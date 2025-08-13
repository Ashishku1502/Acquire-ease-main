import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import AppLayout from "@/layouts/AppLayout";
import Index from "./pages/Index";
import Onboarding from "./pages/Onboarding";
import Marketplace from "./pages/Marketplace";
import BuyerProfile from "./pages/BuyerProfile";
import DealRoom from "./pages/DealRoom";
import Messages from "./pages/Messages";
import Documents from "./pages/Documents";
import Matches from "./pages/Matches";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Help from "./pages/Help";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <HelmetProvider>
          <Routes>
            <Route
              path="/"
              element={
                <AppLayout>
                  <Index />
                </AppLayout>
              }
            />
            <Route
              path="/onboarding"
              element={
                <AppLayout>
                  <Onboarding />
                </AppLayout>
              }
            />
            <Route
              path="/marketplace"
              element={
                <AppLayout>
                  <Marketplace />
                </AppLayout>
              }
            />
            <Route
              path="/buyers/:id"
              element={
                <AppLayout>
                  <BuyerProfile />
                </AppLayout>
              }
            />
            <Route
              path="/deal"
              element={
                <AppLayout>
                  <DealRoom />
                </AppLayout>
              }
            />
            <Route
              path="/messages"
              element={
                <AppLayout>
                  <Messages />
                </AppLayout>
              }
            />
            <Route
              path="/documents"
              element={
                <AppLayout>
                  <Documents />
                </AppLayout>
              }
            />
            <Route
              path="/matches"
              element={
                <AppLayout>
                  <Matches />
                </AppLayout>
              }
            />
            <Route
              path="/profile"
              element={
                <AppLayout>
                  <Profile />
                </AppLayout>
              }
            />
            <Route
              path="/settings"
              element={
                <AppLayout>
                  <Settings />
                </AppLayout>
              }
            />
            <Route
              path="/help"
              element={
                <AppLayout>
                  <Help />
                </AppLayout>
              }
            />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </HelmetProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
