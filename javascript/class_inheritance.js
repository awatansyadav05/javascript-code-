class user {
    constructor (username){
        this.username = username
    }
    logMe (){
        console.log(`Student IS ${this.username}`); 
    }
}
class Student extends user {
    constructor (username , email , password){
        super(username)
        this.email = email
        this.password = password
    }
    addcourse (){
        console.log(`A new course has been added by ${this.username}`);
    }
}
const cat = new Student ("saurav"," saurav123@gmail.com" , "6666")
const dog = new Student ("deepakshi"," sauravdddd123@gmail.com" , "33336666")
dog.addcourse()

const dbuu = new user ("saurav")
dbuu.logMe()
console.log(dog === Student); 
console.log(dog  instanceof user );
