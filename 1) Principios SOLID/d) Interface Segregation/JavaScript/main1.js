// En este ejemplo no se cumple con el principio

class Entity {

    constructor(name, attackDamage, health) {
        this.name = name;
        this.attackDamage = attackDamage;
        this.health = health;
    }

    move() {
        console.log(`${this.name} moved`);
    }

    attack(targetEntity) {
        console.log(`${this.name} attacked ${targetEntity.name} for ${this.attackDamage} demage`);
        targetEntity.takeDamage(this.attackDamage);
    }

    takeDamage(amount) {
        this.health -= amount;
        console.log(`${this.name} has ${this.health} health remaining`);
    }
}

// Se pueden aplicar todas lo hecho en 'Entity'
class Character extends Entity {

}

// No puede hacer todo lo hecho en 'Entity'
// No puede 'moverse' ni 'atacar'
class Wall extends Entity {
    constructor(name, health) {
        super(name, 0, health);
    }

    move() {
        return null;
    }

    attack() {
        return null;
    }
}

// No puede hacer todo lo hecho en 'Entity'
// No puede 'moverse' ni recibir 'daño'
class Turret extends Entity {
    constructor(name, attackDamage) {
        super(name, attackDamage, -1);
    }

    move() {
        return null;
    }

    takeDamage() {
        return null;
    }
}

// Instanciando las clases
const turret = new Turret("Turret", 5);
const character = new Character("Character", 3, 100);
const wall = new Wall("Wall", 200);

// Aplicando los métodos
turret.attack(character);
character.move();
character.attack(wall);