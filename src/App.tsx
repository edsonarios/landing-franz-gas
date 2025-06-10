import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Wrench, 
  Shield, 
  Clock, 
  CheckCircle,
  Star,
  Users,
  Award,
  PlayCircle
} from 'lucide-react';

const trabajos = [
  {
    id: 1,
    titulo: "Instalación Residencial - La Paz",
    descripcion: "Instalación completa de gas domiciliario en vivienda familiar de 3 pisos",
    imagen: "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=500",
    tipo: "Residencial",
    ubicacion: "La Paz",
    fecha: "Marzo 2024"
  },
  {
    id: 2,
    titulo: "Mantenimiento Cochabamba",
    descripcion: "Revisión y mantenimiento de instalación de gas natural",
    imagen: "https://images.pexels.com/photos/5691622/pexels-photo-5691622.jpeg?auto=compress&cs=tinysrgb&w=500",
    tipo: "Mantenimiento",
    ubicacion: "Cochabamba",
    fecha: "Febrero 2024"
  },
  {
    id: 3,
    titulo: "Instalación Comercial",
    descripcion: "Sistema de gas para restaurante con múltiples puntos de conexión",
    imagen: "https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg?auto=compress&cs=tinysrgb&w=500",
    tipo: "Comercial",
    ubicacion: "Santa Cruz",
    fecha: "Enero 2024"
  },
  {
    id: 4,
    titulo: "Reparación de Emergencia",
    descripcion: "Reparación urgente de fuga en instalación domiciliaria",
    imagen: "https://images.pexels.com/photos/5691623/pexels-photo-5691623.jpeg?auto=compress&cs=tinysrgb&w=500",
    tipo: "video",
    ubicacion: "El Alto",
    fecha: "Abril 2024"
  },
  {
    id: 5,
    titulo: "Instalación Edificio",
    descripcion: "Sistema completo para edificio de 6 departamentos",
    imagen: "https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?auto=compress&cs=tinysrgb&w=500",
    tipo: "Residencial",
    ubicacion: "Oruro",
    fecha: "Diciembre 2023"
  },
  {
    id: 6,
    titulo: "Conversión GLP a GN",
    descripcion: "Conversión completa de sistema GLP a Gas Natural",
    imagen: "https://images.pexels.com/photos/5691625/pexels-photo-5691625.jpeg?auto=compress&cs=tinysrgb&w=500",
    tipo: "video",
    ubicacion: "Tarija",
    fecha: "Noviembre 2023"
  }
];

const servicios = [
  {
    icono: Wrench,
    titulo: "Instalación Completa",
    descripcion: "Instalación desde cero de sistemas de gas domiciliario con materiales certificados"
  },
  {
    icono: Shield,
    titulo: "Certificación Oficial",
    descripcion: "Trabajos certificados cumpliendo todas las normas bolivianas de seguridad"
  },
  {
    icono: Clock,
    titulo: "Servicio 24/7",
    descripcion: "Disponible para emergencias y reparaciones urgentes las 24 horas"
  },
  {
    icono: CheckCircle,
    titulo: "Garantía Completa",
    descripcion: "Todos nuestros trabajos incluyen garantía extendida por 2 años"
  }
];

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-green-800 to-green-700 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-white/20 p-2 rounded-lg">
                <Wrench className="h-8 w-8" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">GasBolivia Pro</h1>
                <p className="text-green-200 text-sm">Instalaciones Certificadas</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#trabajos" className="hover:text-green-200 transition-colors">Trabajos</a>
              <a href="#servicios" className="hover:text-green-200 transition-colors">Servicios</a>
              <a href="#contacto" className="hover:text-green-200 transition-colors">Contacto</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">
            Instalaciones de Gas <span className="text-green-700">Profesionales</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Especialistas certificados en instalación, mantenimiento y reparación de sistemas de gas domiciliario 
            en toda Bolivia. Más de 10 años de experiencia garantizando tu seguridad.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Users className="h-12 w-12 text-green-600 mx-auto mb-2" />
              <div className="text-3xl font-bold text-gray-800">500+</div>
              <div className="text-gray-600">Clientes Satisfechos</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Award className="h-12 w-12 text-green-600 mx-auto mb-2" />
              <div className="text-3xl font-bold text-gray-800">10+</div>
              <div className="text-gray-600">Años de Experiencia</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Star className="h-12 w-12 text-green-600 mx-auto mb-2" />
              <div className="text-3xl font-bold text-gray-800">100%</div>
              <div className="text-gray-600">Trabajos Certificados</div>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-center text-gray-800 mb-12">Nuestros Servicios</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {servicios.map((servicio, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <servicio.icono className="h-12 w-12 text-green-600 mb-4" />
                <h4 className="text-xl font-semibold text-gray-800 mb-3">{servicio.titulo}</h4>
                <p className="text-gray-600">{servicio.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trabajos Realizados */}
      <section id="trabajos" className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-center text-gray-800 mb-4">Trabajos Realizados</h3>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Conoce algunos de nuestros proyectos más destacados realizados en diferentes ciudades de Bolivia
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trabajos.map((trabajo) => (
              <div key={trabajo.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative">
                  <img 
                    src={trabajo.imagen} 
                    alt={trabajo.titulo}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {trabajo.tipo === 'video' && (
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <PlayCircle className="h-16 w-16 text-white" />
                    </div>
                  )}
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      trabajo.tipo === 'Residencial' ? 'bg-blue-500 text-white' :
                      trabajo.tipo === 'Comercial' ? 'bg-purple-500 text-white' :
                      trabajo.tipo === 'Mantenimiento' ? 'bg-orange-500 text-white' :
                      'bg-red-500 text-white'
                    }`}>
                      {trabajo.tipo === 'video' ? 'Video' : trabajo.tipo}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">{trabajo.titulo}</h4>
                  <p className="text-gray-600 mb-4">{trabajo.descripcion}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4" />
                      <span>{trabajo.ubicacion}</span>
                    </div>
                    <span>{trabajo.fecha}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Llamada a la Acción */}
      <section className="bg-gradient-to-r from-green-700 to-green-600 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl font-bold mb-4">¿Necesitas una Instalación de Gas?</h3>
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

      {/* Footer */}
      <footer id="contacto" className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-green-600 p-2 rounded-lg">
                  <Wrench className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold">GasBolivia Pro</h4>
                  <p className="text-gray-400 text-sm">Instalaciones Certificadas</p>
                </div>
              </div>
              <p className="text-gray-400">
                Especialistas en instalaciones de gas domiciliario con más de una década de experiencia 
                brindando servicios seguros y confiables en toda Bolivia.
              </p>
            </div>
            
            <div>
              <h5 className="text-lg font-semibold mb-4">Contacto</h5>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-green-400" />
                  <span>+591 70123456</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-green-400" />
                  <span>contacto@gasboliviapro.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-green-400" />
                  <span>La Paz, Cochabamba, Santa Cruz</span>
                </div>
              </div>
            </div>
            
            <div>
              <h5 className="text-lg font-semibold mb-4">Servicios</h5>
              <ul className="space-y-2 text-gray-400">
                <li>• Instalación de Gas Natural</li>
                <li>• Conversión GLP a GN</li>
                <li>• Mantenimiento Preventivo</li>
                <li>• Reparaciones de Emergencia</li>
                <li>• Certificación Oficial</li>
                <li>• Inspecciones de Seguridad</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
            <p>&copy; 2024 GasBolivia Pro. Todos los derechos reservados. | Certificado por YPFB Gas</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;