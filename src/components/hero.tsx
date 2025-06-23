import { Star, Users, Award } from "lucide-react";
const URL = import.meta.env.VITE_MEDIA_URL || "/media/";

export default function Hero() {
  return (
    <section className="relative h-[600px] mt-24 md:mt-10">
      <img
        src={`${URL}f-franz.webp`}
        alt="Trabajador instalando gas"
        className="absolute inset-0 w-full h-full object-cover"
        data-aos="fade-left"
      />

      {/* Desvanecimiento a la izquierda */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/35 to-transparent" />

      <div className="relative z-10 h-full flex items-center pl-8 md:pl-20">
        <div className="max-w-xl">
          <h1
            className="text-4xl font-bold text-gray-800 mb-6 leading-tight"
            data-aos="fade-right"
          >
            Empresa Instaladora de Gas Domiciliario{" "}
            <span className="text-green-700">AÑAGUAYA GAS</span>
          </h1>
          <p className="text-lg text-gray-50 mb-8 bg-green-700 p-2 rounded-md bg-opacity-70"data-aos="fade-right">
            <span className="font-bold text-xl">Franz Añaguaya Pachacute </span>{" "}
            - Especialistas certificados en instalación, mantenimiento y
            reparación de sistemas de gas domiciliario en toda Bolivia. Más de
            10 años de experiencia garantizando tu seguridad.
          </p>
          <div className="flex gap-2 flex-wrap" data-aos="fade-right">
            <div className="bg-white/80 backdrop-blur p-1 rounded-xl shadow-md text-center w-40">
              <Users className="size-10 text-green-600 mx-auto mb-2" />
              <div className="text-3xl font-bold text-gray-800">100+</div>
              <div className="text-gray-600 text-sm">Clientes Satisfechos</div>
            </div>
            <div className="bg-white/80 backdrop-blur p-1 rounded-xl shadow-md text-center w-40">
              <Award className="size-10 text-green-600 mx-auto mb-2" />
              <div className="text-3xl font-bold text-gray-800">10+</div>
              <div className="text-gray-600 text-sm">Años de Experiencia</div>
            </div>
            <div className="bg-white p-1 rounded-xl shadow-lg w-40 text-center">
              <Star className="size-10 text-green-600 mx-auto mb-2" />
              <div className="text-3xl font-bold text-gray-800">100%</div>
              <div className="text-gray-600 text-sm">Trabajos Garantizados</div>
            </div>
          </div>
          <div className="mt-2 flex flex-col sm:flex-row gap-4 items-center justify-center -ml-12"></div>
        </div>
      </div>
    </section>
  );
}
