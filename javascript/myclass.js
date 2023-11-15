// class User {
//         constructor (username, email , password){
//             this.username = username;
//             this.email = email;
//             this.password = password;
//         }
//         encryptPassword (){
//             return `${this.password}abc `
//         }
//         changeUsername (){
//             return `${this.username.toUpperCase()} `
//         }
//     }
    
   
//     const bhanu = new User ("avii", "avii123@gmail.com", "1234566")
//     console.log(bhanu.encryptPassword());
//     console.log(bhanu.changeUsername());

// behind the scene

function User(username, email , password){
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function(){
    return `${this.password}`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}
const dog = new User ("lucky","","")
console.log(dog.changeUsername());
console.log(dog.encryptPassword());
    
   