// En este archivo se corrige la falla del archivo 'main2'

class FlyingBird {
    fly() {
        console.log('I can fly');
    }
}

class SwimmingBird {
    swim() {
        console.log('I can swim');
    }
}

class Duck extends FlyingBird {
    quack() {
        console.log('I can quack');
    }
}

class Penguin extends SwimmingBird {
}

// Método que hace 'volar' al animal ingresado
function makeBirdFly(bird) {
    bird.fly();
}

// Método que hace 'nadar' al animal ingresado
function makeBirdSwim(bird) {
    bird.swim();
}

// Instanciando las clases
const duck = new Duck();
const penguin = new Penguin();

// Implementando el método para intentar hacerlos 'volar'
makeBirdFly(duck);
makeBirdSwim(penguin);