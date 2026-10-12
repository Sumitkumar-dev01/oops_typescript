// oops example -> procedural 

function createAccount(balance:number){
    return balance;
}

function withdraw(balance:number){
    return balance;
}



// oops example 

class Account{
    private balance:number;
    constructor(balance:number){
        this.balance = balance;
    }

    withdraw(amount:number){
        if(amount>this.balance){
            console.log("insufficient balance")
        }
        this.balance -= amount; 
    }

}

const myAccount = new Account(500); 
myAccount.withdraw(700)



// class and objects. 

// class 
class Car{
    brand:string;
    constructor(brand:string){
        this.brand = brand; 
    }
}

// object 
const myCar = new Car('tata'); 



// example 
class Point{
    x:number;
    y:number;
    constructor(x:number,y:number){
        this.x = x;
        this.y = y;
    }
}

const p1 = new Point(0,0); 
const p2 = new Point(3,4); 



// example 

class Employee{
    constructor(public name:string,public salary:number){} 
}
 const emp1 = new Employee("Asha",6000); 
 const emp2 = new Employee("sumit",515415)




class Vechile{
    constructor(public licensePlate:string,private fuelLevel:number){}
    refuel(amount:number):void{
        this.fuelLevel += amount
    }
}

const car1 = new Vechile("kldsfj fkldsaj ",50505); 
const car2 = new Vechile("kd sakd",5875)




// properties and methods 

class Dog{
    name:string; 
    bark():void{
        console.log(`${this.name} says woof`); 
    }
    constructor(name:string){
        this.name = name;
    }
}


class Counter{
    count:number = 0; 
    increment():void{
        this.count++;
    }
}



class ShoppingCart{
    items:string[] = []; 
    addItem(item:string):void{
        this.items.push(item); 
    }
    totalItems():number{
        return this.items.length;
    }
}



class BankAccount3{
    private balance:number = 0; 

    deposit(amount:number):void{
        this.balance += amount;
    }
    getBalance():number{
        return this.balance;
    }
}




// constructor and this. 

class User5{
    constructor(public name:string,public email:string){}
}


class Point1{
    constructor(public x:number,public y:number){}
}
const origin1 = new Point1(0,0); 




class Product2{
    constructor(public name:string,public price:number,private stock:number =0){}
    inStock():boolean{
        return this.stock>0
    }
}


class Invoice{
    readonly id:string;
    readonly createdAt:Date;

    constructor(id:string,public amount:number){
        this.id = id;
        this.createdAt = new Date(); 
    }
}




// instance member vs static member 

class Counter1{
    static totalInstance = 0; 
    constructor(){
        Counter1.totalInstance++; 
    }
    static describe():string{
        return `${Counter1.totalInstance} counters created`
    }
}


class MathUtils{
    static square(n:number):number{
        return n*n;
    }
}
MathUtils.square(5); 


class IdGenerator{
    private static nextId = 1; 
    static generate():string{
        return `id-${IdGenerator.nextId++}`
    }
}


class User2{
    private static registeredEmails = new Set<String>(); 
    constructor(public email:string){
        if(User2.registeredEmails.has(email)){
            throw new Error("email already registered"); 
        } 
    User2.registeredEmails.add(email);
    }
    

}






/**
 * instance is simply an object. 
 * if you  have an object and there is a method in
 * class like name 
 * now first of all you have created an object and 
 * then try to get access of the method(name) of 
 * that class 
 * for example: 
 * s1.name => now this is your instance member 
 * 
 * 
 * you can't create an object of static member. 
 * 
 * if you have to initialise something then you can use 
 * static member. 
 *
 */