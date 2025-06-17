import { MapPin, PlayCircle } from "lucide-react";
import { trabajos } from "../utils/trabajos";
import { useState } from "react";

export default function Trabajos() {
  const [selected, setSelected] = useState(null);
  return (
    <section id="trabajos" className="py-16">
      <div className="container mx-auto px-4">
        <h3 className="text-4xl font-bold text-center text-gray-800 mb-4">
          Trabajos Realizados
        </h3>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Conoce algunos de nuestros proyectos más destacados
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trabajos.map((trabajo) => {
            const hasMore = trabajo.media.length > 1;
            const preview = trabajo.media[0];
            return (
              <div
                key={trabajo.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
                onClick={() => {}}
              >
                <div className="relative">
                  <img
                    src={trabajo.media[0].url}
                    alt={trabajo.titulo}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {hasMore && (
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white text-lg px-2 py-1 rounded-full">
                      +{trabajo.media.length - 1}
                    </div>
                  )}
                  {trabajo.tipo === "video" && (
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <PlayCircle className="h-16 w-16 text-white" />
                    </div>
                  )}
                  <div className="absolute top-4 right-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        trabajo.tipo === "Residencial"
                          ? "bg-blue-500 text-white"
                          : trabajo.tipo === "Comercial"
                          ? "bg-purple-500 text-white"
                          : trabajo.tipo === "Mantenimiento"
                          ? "bg-orange-500 text-white"
                          : "bg-red-500 text-white"
                      }`}
                    >
                      {trabajo.tipo === "video" ? "Video" : trabajo.tipo}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">
                    {trabajo.titulo}
                  </h4>
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
