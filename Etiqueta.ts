export class Etiqueta {
    private codigoBarras: string;
    private fragil: boolean;

    constructor(codigoBarras: string, fragil: boolean) {
        this.codigoBarras = codigoBarras;
        this.fragil = fragil;
    }

    public obtenerAdvertencia(): string {
        if (this.fragil) {
            return "¡CUIDADO: FRÁGIL!";
        }

        return "Paquete Estándar";
    }
}