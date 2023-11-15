// function userLoginMessage(username){
//    return `${username} just logged in`
// }
// console.log(userLoginMessage("avii"))

function userLoginMessage(username="sam"){
    if(!username){
        console.log("Please enter your username");
        return
    }
    return `${username} just logged in`
}
console.log(userLoginMessage());
