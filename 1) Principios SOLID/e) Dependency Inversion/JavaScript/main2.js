// Cumple con el principio

// Clase principal
class Store {
    constructor(paymentProcessor) {
        // Aplicando 'PaymentProcessor'
        this.paymentProcessor = paymentProcessor;
    }

    purchaseBike(quantity) {
        this.paymentProcessor.pay(200 * quantity);
    }

    purchaseHelmet(quantity) {
        this.paymentProcessor.pay(15 * quantity);
    }
}

// Procesador de pagos con 'Stripe' 
class StripePaymentProcessor {
    constructor(user) {
        this.stripe = new Stripe(user);
    }

    pay(amountInDollars) {
        this.stripe.makePayment(amountInDollars * 100);
    }

}

// Procesador de pagos con 'PayPal'
class PayPalPaymentProcessor {
    constructor(user) {
        this.user = user;
        this.paypal = new PayPal();
    }

    pay(amountInDollars) {
        this.paypal.makePayment(this.user, amountInDollars);
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

// Instanciando 'Store' con el procesador de pago que queremos implementar
// const store = new Store(new StripePaymentProcessor('John'));
const store = new Store(new PayPalPaymentProcessor('Suarez'));
store.purchaseBike(2);
store.purchaseHelmet(2);