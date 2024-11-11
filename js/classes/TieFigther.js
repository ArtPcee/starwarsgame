class TieFighter extends CazaEstelar {
    
    
    escogerAccion(xwing) {
        const accion = Math.round(Math.random()*1) + 1;
       
        if(accion == 1){
            this.reparar();

        }else{
            this.disparar(xwing);

        }
     }

   
    disparar(xwing){
        const puntosAtaque = Math.round(Math.random() * 9) + 1;
        
        if(xwing.escudoActual > 0){
            if (xwing.escudoActual >= puntosAtaque){
                xwing.escudoActual -= puntosAtaque;

            }else{
                xwing.vidaActual -= puntosAtaque - xwing.escudoActual;
                xwing.escudoActual = 0;

            }
        }else{
            super.disparar(xwing);
            
        }
    }

}

