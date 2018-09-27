function greeter_interface(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user_interface = { firstName: "Jane", lastName: "User" };
document.body.innerHTML = greeter_interface(user_interface);
