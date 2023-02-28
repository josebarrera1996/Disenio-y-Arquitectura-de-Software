// Seguimiento de calorías consumidas
// No cumple con el primer principio SOLID
class CalorieTracker {

    // Método constructor inicializador de las variables
    constructor(maxCalories) {
        this.maxCalories = maxCalories;
        this.currentCalories = 0;
    }

    // Método para seguir el consumo de calorias actuales
    trackCalories(calorieCount) {
        // Se ira almacenando en esta variable las sumas de las calorías
        this.currentCalories += calorieCount;
        // Si las calorías consumidas exceden a las calorías máximas...
        if (this.currentCalories > this.maxCalories) {
            this.logCalorieSurplus();
        }
    }

    logCalorieSurplus() {
        console.log('Max calories exceeded');
    }
}

// Instanciando la clase
const calorieTracker = new CalorieTracker(2000); // Calorías máximas definiidas

// Seguimiento de consumo de calorías
calorieTracker.trackCalories(500);
calorieTracker.trackCalories(1000);
calorieTracker.trackCalories(600);

