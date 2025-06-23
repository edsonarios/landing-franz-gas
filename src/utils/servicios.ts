import {
  Wrench,
  Shield,
  Clock,
  CheckCircle,
} from 'lucide-react';
export const servicios = [
  {
    icono: Wrench,
    titulo: "Instalaciones<span class='servicio-gratis'> GRATUITAS</span>",
    descripcion: ["Programa de instalación sin costo, válido para viviendas que cumplan los requisitos establecidos por el Estado."],
    isList: false
  },
  {
    icono: CheckCircle,
    titulo: "Requisitos para la instalacion de gas domiciliario",
    descripcion: [
      "Fotocopia de folio real o minuta de compra y venta",
      "Fotocopia de carnet de el o los propietarios del inmueble",
      "Fotocopia de factura de luz y agua"
    ],
    isList: true
  },
  {
    icono: Shield,
    titulo: "Certificación Oficial",
    descripcion: ["Trabajos certificados cumpliendo todas las normas bolivianas de seguridad"],
    isList: false
  },
  {
    icono: Clock,
    titulo: "Servicio 24/7",
    descripcion: ["Disponible para emergencias y reparaciones urgentes las 24 horas"],
    isList: false
  },
];
