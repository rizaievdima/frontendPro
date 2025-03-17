const usersObject = {
    name: "John",
    age: 30,
    city: "New York",
    showUserData() {
        console.log(`Name: ${this.name}, Age: ${this.age}, City: ${this.city}`);
    },
};

usersObject.showUserData();
