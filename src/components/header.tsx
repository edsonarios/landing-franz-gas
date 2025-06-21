import { Wrench } from "lucide-react";
import WhatsApp from "./icon/wsp";
import { numeroWhatsApp } from "../utils/personal";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-green-800 to-green-700 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-white/20 p-2 rounded-lg">
              <Wrench className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Añaguaya Gas</h1>
              <p className="text-green-200 text-sm">
                Instalaciones De Gas
              </p>
            </div>
          </div>
          <nav className="hidden md:flex space-x-6 items-center">
            <a
              href={`https://wa.me/591${numeroWhatsApp}`}
              className="bg-green-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-900 transition-colors inline-flex items-center justify-center space-x-2"
              target="_blank"
              rel="noopener noreferrer"
              title="Contactanos por WhatsApp"
            >
              <WhatsApp />
              <span>WhatsApp</span>
            </a>
            <a
              href="#trabajos"
              className="hover:text-green-200 transition-colors"
            >
              Trabajos
            </a>
            <a
              href="#servicios"
              className="hover:text-green-200 transition-colors"
            >
              Servicios
            </a>
            <a
              href="#contacto"
              className="hover:text-green-200 transition-colors"
            >
              Contacto
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
