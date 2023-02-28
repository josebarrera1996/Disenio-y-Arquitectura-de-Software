// Este es otro ejemplo en el que no se cumple con el principio

class Bird {
    fly() {
        console.log('I can fly');
    }
}

class Duck extends Bird {
    quack() {
        console.log('I can quack');
    }
}

class Penguin extends Bird {
    fly() {
        throw new Error('I cannot fly');
    }

    swim() {
        console.log('I can swim');
    }
}

// Método que hace 'volar' al animal ingresado
function makeBirdFly(bird) {
    bird.fly();
}

// Instanciando las clases
const duck = new Duck();
const penguin = new Penguin();

// Implementando el método para intentar hacerlos 'volar'
makeBirdFly(duck);
makeBirdFly(penguin);