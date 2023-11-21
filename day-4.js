//for the json iterate over all for loops(for,for in,for of,for each)
//for in loop 
let myjson = {
    "name" : "jayasudhan",
    "age" : 24,
    "d.o.b" : "03/06/1999",
    "is-sudent" : "false",
    "emil-Id" : "jsudhan53@gmail.com",
}
for( let age in myjson){
    console.log(myjson[age],myjson['d.o.b']);
}
//for  loop
let myjsn = {
    "name" : "jayasudhan",
    "age" : 25,
    "d.o.b" : "03/06/1999",
    "is-sudent" : "false",
    "emil-Id" : "jsudhan53@gmail.com",
}
let keys = Object.keys(myjsn);
for(let i = 0; i < keys.length; i++){
    let key = keys[i];
    let value = myjsn[key];
    console.log(`${key}: ${value}`);
}
//for each loop
let mijsn = {
    "name" : "sudhan",
    "age" : 26,
    "d.o.b" : "03/06/1999",
    "is-sudent" : "false",
    "emil-Id" : "jsudhan53@gmail.com",
}
Object.entries(mijsn).forEach(([key,value]) =>{
    console.log(`${key}: ${value}`);
});

//for of loop
let myjasn = {
    "name" : "sudhan",
    "age" : 26,
    "d.o.b" : "03/06/1999",
    "is-sudent" : "true",
    "emil-Id" : "jsudhan68@gmail.com",
}
for(let value of Object.values(myjasn)){
    console.log(value);
}

//create your own resume data in JSON format 
let myresume = {
    "name" : "jayasudhan A",
    "Date.of.Birth" : "03/06/1999",
    "contact-number" : "6383556892/9087498413",
    "email-Id" : "jsudhan53@gmail.com",
    "education-qualification" : "B.E-Mech",
    "experience" : "i have two years experince as unit incharge at v.k.a.polymers.pvt.lmt",                 
    "area of interset" : "space"+",time travel",

}
for(let key in myresume){
   // let key = Object.keys(myresume);
    let value =myresume[key];
    console.log(`${key} : ${value}`);
}

//difference between window,screen and document in javascript

/*The window is the actual global object. 
The screen is the screen, it contains properties about the user's display.
 The document is where the DOM is. document can also be window
*/



