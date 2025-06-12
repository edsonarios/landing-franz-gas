import { Phone } from "lucide-react";

export default function Contactanos() {
  return (
    <section className="bg-gradient-to-r from-green-700 to-green-600 py-16 text-white">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-4xl font-bold mb-4">
          ¿Necesitas una Instalación de Gas?
        </h3>
        <p className="text-xl mb-8 opacity-90">
          Contactanos hoy mismo para una cotización gratuita y profesional
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+59170123456"
            className="bg-white text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center space-x-2"
          >
            <Phone className="h-5 w-5" />
            <span>Llamar Ahora</span>
          </a>
          <a
            href="https://wa.me/59170123456"
            className="bg-green-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-900 transition-colors inline-flex items-center justify-center space-x-2"
          >
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
