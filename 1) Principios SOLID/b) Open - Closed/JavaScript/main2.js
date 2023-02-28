// En este ejemplo si se cumple con el principio: OPEN/CLOSED

// Clase 'boolean'
class BooleanQuestion {
    constructor(description) {
        this.description = description;
    }

    // Método para imprimir las opciones de respuesta
    printQuestionChoices() {
        console.log('1. True');
        console.log('2. False');
    };
}

// Clase 'multipleChoice'
class MultipleChoiceQuestion {
    constructor(description, options) {
        this.description = description;
        this.options = options;
    }

    // Método para imprimir las opciones de respuesta
    printQuestionChoices() {
        this.options.forEach((option, index) => {
            console.log(`${index + 1}. ${option}`);
        });
    }
}

// Clase 'text'
class TextQuestion {
    constructor(description) {
        this.description = description;
    }

    // Método para imprimir la opción de respuesta
    printQuestionChoices() {
        console.log('Answer: _______________');
    }
}

// Clase 'range'
class RangeQuestion {
    constructor(description) {
        this.description = description;
    }

    // Método para imprimir las opciones de respuesta
    printQuestionChoices() {
        console.log('Minimum: _______________');
        console.log('Maximum: _______________');
    }
}

// Listado de preguntas
const questions = [
    new BooleanQuestion('This video is useful.'),
    new MultipleChoiceQuestion(
        'What is your favorite language?',
        ['CSS', 'HTML', 'JS', 'Python']
    ),
    new TextQuestion('Describe your favorite JS feature.'),
    new RangeQuestion('What is your seed limit in your city?')
];

// Método para imprimir las preguntas
function printQuiz(questions) {
    questions.forEach((question) => {
        console.log(question.description);
        question.printQuestionChoices();
        console.log('');
    })
}

// Invocando el método
printQuiz(questions);