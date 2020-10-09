class Rectangulo{   
    constructor(x,y,ancho,alto){
        this.x = x;
        this.y = y;
        this.ancho = ancho;
        this.alto = alto;
    }
    getX(){
        return this.x;
    }
    setX(valor){
        this.x = valor;
    }
    setAncho(e){
        this.ancho = e;
    }
    setAlto(e){
        this.alto = e;
    }
    getAncho(){
        return this.ancho;
    }
    getAlto(){
        return this.alto;
    }
    getY(){
        return this.y;
    }
    setY(valor){
        this.y = valor;
    }
    colision(rectangulo){
        
        if (this.x < rectangulo.getX() + rectangulo.getAncho() &&
            this.x + this.ancho > rectangulo.getX() &&
            this.y < rectangulo.getY()+ rectangulo.getAlto() &&
            this.alto + this.y > rectangulo.getY()) {
            // collision detected!
            return true;
        } else {
            // no collision
            return false;
        }
    }
}