// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI)
const descripter = Object.getOwnPropertyDescriptor(Math , "PI")
// console.log(descripter);

const coffee = {
    name : 'latte', 
    price : 340,
    isAvailable : "yes/no",
    orderCoffee :function(){
        console.log("sorry! coffee not made");
    } 
}

//console.log(Object.getOwnPropertyDescriptor(coffee, "isAvailable"));
console.log(Object.getOwnPropertyDescriptor(coffee, "name"));
Object.defineProperty(coffee, 'name',{
    //writable : false,
    enumerable : true
 
})
console.log(Object.getOwnPropertyDescriptor(coffee, "name"));

for (const [key, values] of Object.entries(coffee)) {
    if (typeof values !== 'function') {
        console.log(`${key}:  ${values}`);
    
    }
}
