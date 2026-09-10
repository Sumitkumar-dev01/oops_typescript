type chaiOrder = {
    type:string,
    sugar:number,
    strong:boolean
}


function makeChai3(order:chaiOrder){
   return  console.log(order)
}
makeChai({
    type:"adrak",
    sugar:2,
    strong:true
})




// type = "Mujhe ek reusable type/structure define karna hai."


// when we have to define the structure of an object 

type User = {
    name:string,
    age:number,
    email:string
}

const user2:User = {
    name:"sumit",
    age:22,
    email:"sumitkum@gmail.com"
}

function printUser(user:User){
    console.log(user.name)
}
printUser({ name:"sumit",
    age:22,
    email:"sumitkum@gmail.com"
})




// function parameter 

type Product = {
    name :string,
    price: number
}


function buyProduct(product:Product){
    console.log(product.name)
}

// function return type ke liye 


type User1 = {
    name :string,
    age:number
}

function getUser():User1{
    return{
        name:"sumit",
        age:23
    }
}


// to create union types 

type Status = "pending" | "success" | "failed"

type Address = {
    city:string,
    pincode: number
}

type User2 = {
    name:string,
    age:number,
    address:Address
}

const user4:User2 = {
    name:"sumit",
    age:23,
    address:{
        city:"patna",
        pincode:808001
    }
}





