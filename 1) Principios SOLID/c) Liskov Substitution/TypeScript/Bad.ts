class Rectangle {
    constructor(
        protected width: number = 0,
        protected height: number = 0) {

    }

    setColor(color: string): this {
        // ...
    }

    render(area: number) {
        // ...
    }

    setWidth(width: number): this {
        this.width = width;
        return this;
    }

    setHeight(height: number): this {
        this.height = height;
        return this;
    }

    getArea(): number {
        return this.width * this.height;
    }
}

class Square extends Rectangle {
    setWidth(width: number): this {
        this.width = width;
        this.height = width;
        return this;
    }

    setHeight(height: number): this {
        this.width = height;
        this.height = height;
        return this;
    }
}

function renderLargeRectangles(rectangles: Rectangle[]) {
    rectangles.forEach((rectangle) => {
        const area = rectangle
            .setWidth(4)
            .setHeight(5)
            .getArea(); // BAD: Returns 25 for Square. Should be 20.
        rectangle.render(area);
    });
}

const rectangles = [new Rectangle(), new Rectangle(), new Square()];
renderLargeRectangles(rectangles);