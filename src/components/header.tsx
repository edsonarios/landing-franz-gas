import {
  Wrench, 
} from 'lucide-react';

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
              <h1 className="text-2xl font-bold">GasBolivia Pro</h1>
              <p className="text-green-200 text-sm">
                Instalaciones Certificadas
              </p>
            </div>
          </div>
          <nav className="hidden md:flex space-x-6">
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
