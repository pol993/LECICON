export class Vehiculo {
    private placa: string;
    private capacidadCarga: number;

    constructor(placa: string, capacidadCarga: number) {
        this.placa = placa;
        this.capacidadCarga = capacidadCarga;
    }

    public obtenerDatos(): string {
        return `Placa: ${this.placa} | Capacidad: ${this.capacidadCarga} kg`;
    }
}