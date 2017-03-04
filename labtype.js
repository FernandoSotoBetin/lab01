var liga = ["Nacional", "Junior", "Millonarios", "Cali", "Santafe"];
console.log(liga);
var liga2 = ["Tolima", "Medellin", "America"];
console.log(liga2);
var futbol = (function () {
    function futbol(_equipo, _estrellas) {
        this.equipo = _equipo;
        this.estrellas = _estrellas;
    }
    futbol.prototype.getEquipo = function () {
        return "El Equipo Es: " + this.equipo;
    };
    futbol.prototype.setEquipo = function (_equipot) {
        this.equipo = _equipot;
    };
    return futbol;
}());
var eq1 = new futbol("Huila");
var eq2 = new futbol("Nacional", 15);
console.log(eq1);
console.log(eq2);
console.log(eq2.getEquipo());
eq1.setEquipo("Patriotas");
console.log(eq1.getEquipo());
