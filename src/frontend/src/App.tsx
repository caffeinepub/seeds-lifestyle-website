import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import GallerySection from "./components/GallerySection";
import HeroSection from "./components/HeroSection";
import LocationSection from "./components/LocationSection";
import MenuSection from "./components/MenuSection";
import Navbar from "./components/Navbar";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <MenuSection />
          <GallerySection />
          <LocationSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
