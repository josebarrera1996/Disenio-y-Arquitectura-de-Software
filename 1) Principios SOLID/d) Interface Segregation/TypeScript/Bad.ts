interface SmartPrinter {
    print();
    fax();
    scan();
}

class AllInOnePrinter implements SmartPrinter {
    print() {
        // ...
    }

    fax() {
        // ...
    }

    scan() {
        // ...
    }
}

class EconomicPrinter implements SmartPrinter {
    print() {
        // ...
    }

    fax() {
        throw new Error('Fax not supported.');
    }

    scan() {
        throw new Error('Scan not supported.');
    }
}