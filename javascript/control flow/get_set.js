const user ={
    _email: 'avii@ai.com',
    _password: "avii0509",

    get password (){
        return this._password.toUpperCase()
    },

    set password (value){
        this._password= value
    }
}
const tea = Object.create (user)
console.log(tea.password);