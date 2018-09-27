//function greeter(person:string) {//demonstrate string annotation that type script has
function greeter(person) {
    return "Hello, " + person;
}
//let user = "Jane User";
//passing array to a string
var user = [0, 1, 2];
document.body.innerHTML = greeter(user);
