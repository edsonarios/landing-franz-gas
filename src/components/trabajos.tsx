import { useState } from "react";
import { Dialog, DialogPanel, Button } from "@headlessui/react";
import { MapPin, PlayCircle } from "lucide-react";
import { trabajos } from "../utils/trabajos";

export default function Trabajos() {
  const [selectedMedia, setSelectedMedia] = useState<any>(null);
  const [selectedTrabajo, setSelectedTrabajo] = useState<any>(null);

  const closeMedia = () => {
    setSelectedMedia(null);
  };
  const closeGaleria = () => setSelectedTrabajo(null);

  return (
    <section id="trabajos" className="py-16">
      <div className="container mx-auto px-4">
        <h3
          className="text-4xl font-bold text-center text-gray-800 mb-4"
          data-aos="fade-up"
        >
          Trabajos Realizados
        </h3>
        <p
          className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
          data-aos="fade-up"
        >
          Conoce algunos de nuestros proyectos más destacados
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trabajos.map((trabajo) => {
            const preview = trabajo.media[0];
            const hasMore = trabajo.media.length > 1;

            return (
              <div
                key={trabajo.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
                data-aos="fade-up"
              >
                <div className="relative">
                  <img
                    src={
                      preview.type === "video" ? preview.thumbnail : preview.url
                    }
                    alt={trabajo.titulo}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                    onClick={() => setSelectedMedia(preview)}
                  />

                  {preview.type === "video" && (
                    <button
                      className="absolute inset-0 bg-black/40 flex items-center justify-center"
                      onClick={() => setSelectedMedia(preview)}
                    >
                      <PlayCircle className="h-16 w-16 text-white" />
                    </button>
                  )}

                  {hasMore && (
                    <button
                      onClick={() => setSelectedTrabajo(trabajo)}
                      className="absolute bottom-2 right-2 bg-black/70 text-white text-sm px-3 py-1 rounded-full hover:bg-black"
                    >
                      Ver más +{trabajo.media.length - 1}
                    </button>
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

      {/* Modal para una sola imagen */}
      <Dialog
        open={!!selectedMedia}
        onClose={closeMedia}
        className="fixed inset-0 z-50"
      >
        <div className="flex items-center justify-center min-h-screen bg-black/80 p-4">
          {selectedMedia?.type === "video" ? (
            <video
              src={selectedMedia?.url || ""}
              controls
              className="max-h-[80vh] rounded-lg"
              autoPlay
            />
          ) : (
            <img
              src={selectedMedia?.url || ""}
              alt="Vista previa"
              className="max-h-[80vh] rounded-lg"
            />
          )}
          <button
            onClick={closeMedia}
            className="absolute top-4 right-4 text-white text-2xl font-bold"
          >
            ✕
          </button>
        </div>
      </Dialog>

      {/* Modal galería completa */}
      <Dialog
        open={!!selectedTrabajo}
        onClose={closeGaleria}
        className="fixed inset-0 z-50"
      >
        <div className="flex items-center justify-center min-h-screen bg-black/80 p-4">
          <DialogPanel className="w-full max-w-5xl rounded-lg bg-white p-6 space-y-4 overflow-y-auto max-h-[90vh]">
            <h4 className="text-xl font-semibold text-gray-800">
              {selectedTrabajo?.titulo}
            </h4>
            <p className="text-gray-600">{selectedTrabajo?.descripcion}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {selectedTrabajo?.media.map((item: any, idx: number) => (
                <div className="relative">
                  <img
                    key={idx}
                    src={item.type === "video" ? item.thumbnail : item.url}
                    alt={`media-${idx}`}
                    className="w-full rounded cursor-pointer"
                    onClick={() => setSelectedMedia(item)}
                  />
                  {item.type === "video" && (
                    <button
                      className="absolute inset-0 bg-black/40 flex items-center justify-center"
                      onClick={() => setSelectedMedia(item)}
                    >
                      <PlayCircle className="h-16 w-16 text-white" />
                    </button>
                  )}
                </div>
              ))}
            </div>

            <Button
              onClick={closeGaleria}
              className="mt-4 px-4 py-2 bg-gray-700 text-white rounded"
            >
              Cerrar galería
            </Button>
          </DialogPanel>
        </div>
      </Dialog>
    </section>
  );
}
