class user {
    constructor (username){
        this.username = username
    }
    logMe (){
         console.log(`Username: ${this.username}`);
    }
     createId (){
        return `123`
    }
}
const dbuu = new user ("smirti")
// console.log(dbuu.createId());
dbuu.logMe()

class Teacher extends user {
    constructor (username,email){
        super (username)
        this.email = email
    }
}
const uni = new Teacher ("smriti", "smirtiass22@gmail.com")
console.log(uni.createId());
console.log(`email: ${uni.email}`);
