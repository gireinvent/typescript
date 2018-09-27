interface Person {
    firstName: string;
    lastName: string;
}

function greeter_interface(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user_interface = { firstName: "Jane", lastName: "User" };

document.body.innerHTML = greeter_interface(user_interface);