import { 
  Phone, 
  Mail, 
  MapPin, 
  Wrench, 
} from 'lucide-react';

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
  )
}
