class Vector2D{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    substracto(v){
        return new Vector2D(this.x-v.getX(),this.y-v.getY());
    }
    add(v){
        return new Vector2D((this.x+v.getX()),(this.y+v.getY()));
    }
    acceleracion(value){
        return new Vector2D(this.x*value,this.y*value);
    }
    limite(value){
        if(this.getMagnitud()>value){
            return this.normalizar().acceleracion(value);
        }
        return this;
    }
    normalizar(){
        let magnitud = this.getMagnitud();
        return new Vector2D(this.x/magnitud,this.y/magnitud);
    }
    setDireccion(angulo){
        let magnitud = this.getMagnitud();
        return new Vector2D(Math.cos(angulo)*magnitud,Math.sin(angulo)*magnitud);
    }

    getMagnitud(){
        return Math.sqrt(this.x*this.x+this.y*this.y);
    }
    getAngulo(){
        return  Math.asin(this.y/this.getMagnitud());
    }
    setY(y){
        this.y = y;
    }
    setX(x){
        this.x = x;
    }
    getY(){
        return this.y;
    }
    getX(){
        return this.x;
    }
}