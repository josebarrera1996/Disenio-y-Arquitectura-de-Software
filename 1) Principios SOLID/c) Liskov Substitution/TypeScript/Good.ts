abstract class Shape {
    setColor(color: string): this {
        // ...
    }

    render(area: number) {
        // ...
    }

    abstract getArea(): number;
}

class Rectangle extends Shape {
    constructor(
        private readonly width = 0,
        private readonly height = 0) {
        super();
    }

    getArea(): number {
        return this.width * this.height;
    }
}

class Square extends Shape {
    constructor(private readonly length: number) {
        super();
    }

    getArea(): number {
        return this.length * this.length;
    }
}

function renderLargeShapes(shapes: Shape[]) {
    shapes.forEach((shape) => {
        const area = shape.getArea();
        shape.render(area);
    });
}

const shapes = [new Rectangle(4, 5), new Rectangle(4, 5), new Square(5)];
renderLargeShapes(shapes);