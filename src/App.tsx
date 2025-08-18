import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import BrowseJobs from "./pages/BrowseJobs";
import Companies from "./pages/Companies";
import Resources from "./pages/Resources";
import SignIn from "./pages/SignIn";
import PostJob from "./pages/PostJob";
import JobDetail from "./pages/JobDetail";
import Technology from "./pages/Technology";
import SoftwareDevelopment from "./pages/SoftwareDevelopment";
import ITEngineering from "./pages/ITEngineering";
import Healthcare from "./pages/Healthcare";
import Finance from "./pages/Finance";
import Marketing from "./pages/Marketing";
import Sales from "./pages/Sales";
import Education from "./pages/Education";
import CustomerService from "./pages/CustomerService";
import HumanResources from "./pages/HumanResources";
import NotFound from "./pages/NotFound";
import TechCorp from "./pages/company/TechCorp";
import InnovateCo from "./pages/company/InnovateCo";
import DesignStudio from "./pages/company/DesignStudio";
import DataFlow from "./pages/company/DataFlow";
import GrowthLabs from "./pages/company/GrowthLabs";
import CloudTech from "./pages/company/CloudTech";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/browse-jobs" element={<BrowseJobs />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/post-job" element={<PostJob />} />
          <Route path="/job/:jobId" element={<JobDetail />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/software-development" element={<SoftwareDevelopment />} />
          <Route path="/it-engineering" element={<ITEngineering />} />
          <Route path="/healthcare" element={<Healthcare />} />
          <Route path="/finance" element={<Finance />} />
          <Route path="/marketing" element={<Marketing />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/education" element={<Education />} />
          <Route path="/customer-service" element={<CustomerService />} />
          <Route path="/human-resources" element={<HumanResources />} />
          <Route path="/company/techcorp" element={<TechCorp />} />
          <Route path="/company/innovateco" element={<InnovateCo />} />
          <Route path="/company/designstudio" element={<DesignStudio />} />
          <Route path="/company/dataflow" element={<DataFlow />} />
          <Route path="/company/growthlabs" element={<GrowthLabs />} />
          <Route path="/company/cloudtech" element={<CloudTech />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
