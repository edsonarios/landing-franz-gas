import { Star, Users, Award } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-green-50 to-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-5xl font-bold text-gray-800 mb-6">
          Instalaciones de Gas{" "}
          <span className="text-green-700">Profesionales</span>
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Especialistas certificados en instalación, mantenimiento y reparación
          de sistemas de gas domiciliario en toda Bolivia. Más de 10 años de
          experiencia garantizando tu seguridad.
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
  );
}
