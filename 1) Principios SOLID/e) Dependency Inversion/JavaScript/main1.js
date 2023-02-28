// No cumple con el principio

// Clase principal
class Store {
    constructor(user) {
        // Inicializando a 'PayPal''
        this.paypal = new PayPal();
        this.user = user;
        // this.stripe = new Stripe(user);
    }

    purchaseBike(quantity) {
        this.paypal.makePayment(this.user, 200 * quantity);
        // this.stripe.makePayment(200 * quantity * 100);
    }

    purchaseHelmet(quantity) {
        this.paypal.makePayment(this.user, 15 * quantity);
        // this.stripe.makePayment(15 * quantity * 100);
    }
}

// Método de pago 'Stripe'
class Stripe {
    constructor(user) {
        this.user = user;
    }

    // Realizando el pago con este método de pago
    makePayment(amountInCents) {
        console.log(`${this.user} made payment of $${amountInCents / 100} with Stripe`)
    }
}

// Método de pago 'PayPal'
class PayPal {
    makePayment(user, amountInDollars) {
        console.log(`${user} made payment of $${amountInDollars} with PayPal`);
    }
}

// Instanciando
const store = new Store('John');
store.purchaseBike(2);
store.purchaseHelmet(2);



