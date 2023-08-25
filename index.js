class Shape {
    constructor(parameter){
        this.parameter = parameter;
    }
}

class Circle extends Shape {
    constructor(radius){
        this.radius = radius;
        super(2*Math.PI*radius);
    }
}