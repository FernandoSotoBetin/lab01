var liga: Array<string> = ["Nacional", "Junior", "Millonarios", "Cali", "Santafe"];

console.log(liga);

var liga2: string[] = ["Tolima", "Medellin", "America"];
console.log(liga2);

class futbol {
    equipo: string;
    estrellas: number;

    constructor(_equipo:string, _estrellas?:number) {
        this.equipo = _equipo;
        this.estrellas = _estrellas;
    }

    getEquipo():string {
        return "El Equipo Es: " + this.equipo;
    }

    setEquipo(_equipot:string) {
        this.equipo = _equipot;
    }
}

let eq1 = new futbol("Huila");
let eq2 = new futbol("Nacional", 15);
console.log(eq1);
console.log(eq2);
console.log(eq2.getEquipo());
eq1.setEquipo("Patriotas");
console.log(eq1.getEquipo());
