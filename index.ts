import { Vehiculo } from "./Vehiculo";
import { Conductor } from "./Conductor";
import { Paquete } from "./Paquete";

const vehiculo1 = new Vehiculo(
    "MEC-2026",
    1500
);

const conductor1 = new Conductor(
    "Carlos Mendoza",
    vehiculo1
);

const paquete1 = new Paquete(
    "Ana López",
    "Av. Universitaria y Calle 10",
    "BAR-990",
    true
);

conductor1.mostrarDatos();

console.log("");

paquete1.mostrarGuia();