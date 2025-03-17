const phoneBook = {
    contacts: [
        { name: "Max", phone: "123456789", email: "max@gmail.com" },
        { name: "Bob", phone: "456422344", email: "bob@gmail.com" },
    ],
    getContactInfo(name) {
        let contact = this.contacts.find(
            (contact) => contact.name.toLowerCase() === name.toLowerCase()
        );
        return contact
            ? `Name: ${contact.name}, Phone: ${contact.phone}, Email: ${contact.email}`
            : "Contact is not exists";
    },
    addContact(name, phone = "*", email = "*") {
        if (name) {
            this.contacts.push({ name, phone, email });
        }
    },
    showContactsPhones() {
        return this.contacts.map((contact) => contact.phone);
    },
};

phoneBook.addContact("Ana", "123123123", "ana@gmail.com");
console.log(phoneBook.getContactInfo("Bob"));
console.log(phoneBook.showContactsPhones());
