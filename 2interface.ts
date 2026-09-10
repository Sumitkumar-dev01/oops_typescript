interface User5 {
    name:string,
    age:number,
    email:string,
}


const user:User5 = {
    name:"sumit",
    age:23,
    email:"sumit@gmail.com"
}

console.log(user); 



interface ChaiOrder5 {
    type:string,
    sugar:number,
    strong:boolean
}

function makeChai(order:chaiOrder){
    console.log(order); 
}

makeChai({
    type:"masala",
    sugar:2,
    strong:true
})



// contract is the main purpose of interface 

// means you have to follow some rules and regulation

interface User6{
    name:string,
    email:string,
    age:number
}

//Ab tumhare application mein jitne bhi functions User expect karte hain, unko same structure milega.

function createUser(user:User6){
    // create user
}


function updateUser(user:User6){
    // update user
}

function displayUser(user:User6){
    console.log(user.name)
}



// you can also use some optional properties 

interface User7{
    name:string,
    age:number,
    email?:string
}

const user1:User7 = {
    name:"sumit",
    age:23
}

const user3:User7 = {
    name:"rahul",
    age:22,
    email:"rahul@gmail.com"
}




// Readonly Property 

interface User8{
    readonly id:string,
    name:string
}

const user5:User8 = {
    id:"123",
    name:"sumit"
}


// you can also methods in interface

interface User9 {
    name :string,
    age:number,
    greet():void
}

const user9:User9 = {
    name:"sumit",
    age:22,
    greet(){
        console.log("hello"); 
    }
}


// interface inheritance 

interface Person{
    name:string,
    age:number;
}

interface Employee extends Person {
    employeeId:string,
    salary:number;
}

/**
 * now employee will have 
 * name
 * age
 * employeeId
 * salary
 */


const employee:Employee = {
    name:"sumit",
    age:23,
    employeeId:"EMP101",
    salary:500000
}


// you can also extend multiple interfaces. 

interface Person {
    name:string;
}
interface Employee {
    employeeId:string;
}
interface Manager extends Person,Employee {
    teamSize:number
}

