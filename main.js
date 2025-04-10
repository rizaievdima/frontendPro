class Coach {
    constructor(name, speciality, rating) {
        this.name = name;
        this.speciality = speciality;
        this.rating = rating;
    }
    displayInfo() {
        console.log(`Coach: ${this.name}, Specialization: ${this.speciality}, Rating: ${this.rating}`);
    }
}
const coach1 = new Coach("John Doe", "Fitness", 4.7);
const coach2 = new Coach("Alice Smith", "Yoga", 4.9);

coach1.displayInfo();
coach2.displayInfo();
