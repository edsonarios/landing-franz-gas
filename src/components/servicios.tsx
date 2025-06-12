import { servicios } from "../utils/servicios";

export default function Servicios() {
  return (
    <section id="servicios" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h3 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Nuestros Servicios
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicios.map((servicio, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <servicio.icono className="h-12 w-12 text-green-600 mb-4" />
              <h4 className="text-xl font-semibold text-gray-800 mb-3">
                {servicio.titulo}
              </h4>
              <p className="text-gray-600">{servicio.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
