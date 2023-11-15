const myObject = {
    js : "javascript",
    py : "python",
    cp : "c++",
    java : "java",
}
for (const key in myObject) {
     console.log(`${key} shortcut is for ${(myObject[key])}`);
}