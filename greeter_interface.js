function greeter_interface(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user_interface = { firstName: "Jane", lastName: "User_interface" };
console.log(greeter_interface(user_interface));
document.body.innerHTML = greeter_interface(user_interface);
