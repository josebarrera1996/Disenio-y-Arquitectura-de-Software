// En este archivo si se cumple con el principio

// Clase 'padre'
class Entity {
    constructor(name) {
        this.name = name;
    }
}

// Componentes (simulando pequeñas interfaces)

const mover = {
    move() {
        console.log(`${this.name} moved`);
    }
};

const attacker = {
    attack(targetEntity) {
        console.log(`${this.name} attacked ${targetEntity.name} for ${this.attackDamage} demage`);
        targetEntity.takeDamage(this.attackDamage);
    }
};

const hasHealth = {
    takeDamage(amount) {
        this.health -= amount;
        console.log(`${this.name} has ${this.health} health remaining`);
    }
}

// Clase que la implementa
class Character extends Entity {
    constructor(name, attackDamage, health) {
        super(name);
        this.attackDamage = attackDamage;
        this.health = health;
    }
}

// Asignaciones de funcionalidades
// El personaje puede: moverse, atacar y recibir daño
Object.assign(Character.prototype, mover);
Object.assign(Character.prototype, attacker);
Object.assign(Character.prototype, hasHealth);

// Clase que la implementa
class Wall extends Entity {
    constructor(name, health) {
        super(name);
        this.health = health;
    }
}

// Asignaciones de funcionalidades
// La pared puede: recibir daño
Object.assign(Wall.prototype, hasHealth);

// Clase que la implementa
class Turret extends Entity {
    constructor(name, attackDamage) {
        super(name);
        this.attackDamage = attackDamage;
    }
}

// Asignaciones de funcionalidades
// La torreta puede: atacar
Object.assign(Turret.prototype, attacker);

// Instanciando las clases
const turret = new Turret("Turret", 5);
const character = new Character("Character", 3, 100);
const wall = new Wall("Wall", 200);

// Aplicando los métodos
turret.attack(character);
character.move();
character.attack(wall);




