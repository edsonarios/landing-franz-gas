import { useEffect } from "react";
import Contactanos from "./components/contactanos";
import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";
import Servicios from "./components/servicios";
import Trabajos from "./components/trabajos";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Servicios */}
      <Servicios />

      {/* Trabajos Realizados */}
      <Trabajos />

      {/* Llamada a la Acción */}
      <Contactanos />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
