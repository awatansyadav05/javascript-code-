const user = {
    username: "Avii",
    logincount: 8,
    signedIn: true,
    
getUserDetails: function(){
    // console.log("Got details from database");
    // console.log("Got details from database");
    console.log(this);
}
}
// console.log(user.username);
// // console.log(user.getUserDetails());
// console.log(this);

function User(username, logincount, isLoggedin){
    this.username = username;
    this.logincount = logincount;
    this.isLoggedin = isLoggedin 
    this.greeting = function (){
        console.log(`welcome ${this.username}`);
    }
    return this;
}
const userOne= new User("vaii", 12 , true)
const userTwo=new User("ravii", 11 , false)

console.log(userOne.constructor);
console.log(userTwo);

