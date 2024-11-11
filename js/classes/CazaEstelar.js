class CazaEstelar {
  
  constructor(obj) {
    this.numeroSerie = obj.numeroSerie;
    this.vidaActual = obj.vidaActual;
    this.vidaMax = obj.vidaMax;
    this.fuerzaAtaque = 5;
  }

  disparar(cazaEstelar) {
    this.fuerzaAtaque = 5;
    const puntosAtaque = Math.round(Math.random() * 5) + 1;
    this.fuerzaAtaque += puntosAtaque;
    cazaEstelar.vidaActual -= this.fuerzaAtaque;
    
    if (cazaEstelar.vidaActual <= 0) {
      cazaEstelar.vidaActual = 0;
    }
  }


  reparar() {
    const puntosReparar = 4;
    this.vidaActual += puntosReparar;
   
  }
}


