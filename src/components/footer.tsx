import { 
  Phone, 
  Mail, 
  MapPin, 
  Wrench, 
} from 'lucide-react';
import { numeroWhatsApp } from '../utils/personal';

export default function Footer() {
    return (
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
                  <span>{`+591 ${numeroWhatsApp}`}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-green-400" />
                  <span>Franzmalo88@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-green-400" />
                  <span>La Paz, El Alto, Cochabamba, Santa Cruz</span>
                </div>
              </div>
            </div>
            
            <div>
              <h5 className="text-lg font-semibold mb-4">Servicios</h5>
              <ul className="space-y-2 text-gray-400">
                <li>• Instalación de Sistemas de Gas Domiciliario</li>
                <li>• Instalación Calentadores de Agua a Gas</li>
                <li>• Instalación de Calentadores a Gas</li>
                <li>• Instalación de Cocinas a Gas</li>
                <li>• Instalación de Sistemas de Gas Industrial</li>
                <li>• Instalación de Sistemas de Gas Comercial</li>
                <li>• Instalación de Sistemas de Gas para Talleres</li>
                <li>• Mantenimiento Preventivo</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
            <p>&copy; 2025 Añaguaya Gas | Certificado por la ANH y YPFB</p>
          </div>
        </div>
      </footer>
  )
}
