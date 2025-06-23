import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/portal/Dashboard";
import Facilities from "./pages/portal/Facilities";
import ClientDetails from "./pages/portal/ClientDetails";
import AvaPortal from "./pages/portal/AvaPortal";
import FacilityMapPage from "./pages/FacilityMapPage";
import AssessmentPage from "./pages/AssessmentPage";
import RequireAuth from "./components/auth/RequireAuth";
import AdminTools from "./pages/portal/AdminTools";
import LoginPage from "./pages/LoginPage";
import ClientsPage from "./pages/portal/ClientsPage";
import CalendarPage from "./pages/portal/CalendarPage";
import { 
  PricingPage, 
  AboutPage, 
  BlogPage, 
  KnowledgeBasePage, 
  CaseStudiesPage, 
  FAQPage, 
  ApiDocsPage, 
  ContactSalesPage, 
  PrivacyPolicyPage, 
  TermsOfServicePage, 
  CookiePolicyPage 
} from "./pages/PlaceholderPages";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/assessment" element={<AssessmentPage />} />
          <Route path="/facilities-map" element={
            <RequireAuth>
              <FacilityMapPage />
            </RequireAuth>
          } />
          <Route path="/portal/dashboard" element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          } />
          <Route path="/portal/facilities" element={
            <RequireAuth>
              <Facilities />
            </RequireAuth>
          } />
          <Route path="/portal/clients" element={
            <RequireAuth>
              <ClientsPage />
            </RequireAuth>
          } />
          <Route path="/portal/client/:id" element={
            <RequireAuth>
              <ClientDetails />
            </RequireAuth>
          } />
          <Route path="/portal/ava" element={
            <RequireAuth>
              <AvaPortal />
            </RequireAuth>
          } />
          <Route path="/portal/admin" element={
            <RequireAuth>
              <AdminTools />
            </RequireAuth>
          } />
          <Route path="/portal/calendar" element={
            <RequireAuth>
              <CalendarPage />
            </RequireAuth>
          } />
          
          {/* Placeholder Routes */}
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/knowledge-base" element={<KnowledgeBasePage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/api-docs" element={<ApiDocsPage />} />
          <Route path="/contact-sales" element={<ContactSalesPage />} />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsOfServicePage />} />
          <Route path="/cookies" element={<CookiePolicyPage />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
