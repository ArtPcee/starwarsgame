class XWing extends CazaEstelar {
    constructor(obj) {
        super(obj);
        this.r2d2Incorporado = obj.r2d2Incorporado;
        this.escudoMaximo = obj.escudoMaximo;
        this.escudoActual = obj.escudoActual;
    }

    reparar() {
        if(this.r2d2Incorporado === false){
            super.reparar();

        }else if(this.r2d2Incorporado === true){

            if(this.vidaActual < this.vidaMax){
                const puntosReparar = 4;
                this.vidaActual += puntosReparar;

                if(this.vidaActual > this.vidaMax){
                    this.escudoActual = this.vidaActual - this.vidaMax;
                    this.vidaActual = this.vidaMax;
                }

            }else if(this.escudoActual < this.escudoMaximo){
                const puntosReparar = 4;
                this.escudoActual += puntosReparar;
                
                if(this.escudoActual > this.escudoMaximo){
                    this.escudoActual = this.escudoMaximo;
                }

            }
        }
    }
}


