// const user ={
//     username : "avii",
//     price : 999,

//     welcomeMessage:function(){
//         // console.log(`${this.username}, welcome to website`);
//         console.log(this);
//     }
// }
// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()

// how to make arrOW function

const chai= () => {
    let username="hitesh"
    console.log(this.username);

}
// chai()

const addTwo=(num1,num2)=>{
    return num1 + num2
}
// console.log (addTwo(3,4));

const addThree=(num1 , num2) => num1 + num2
// console.log(addThree(5.7,677));

const add=(num) => ({username: "avii"})
console.log(add(6));