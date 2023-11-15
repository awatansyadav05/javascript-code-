function SetUsername(username){
    this.username = username
    // console.log("called");
 }

function createUser (username, password , email){
    SetUsername.call(this, username)
    this.email = email
    this.password = password
}

const chai = new createUser("avi" , 123456, "avii21@gamil.com")
console.log(chai);