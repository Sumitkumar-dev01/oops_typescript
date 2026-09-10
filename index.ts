
const Name: string = "Sumit";
const age: number = 23;

console.log(`Hello ${Name}, you are ${age} years old`);




class User{
    constructor(public name:string,public age:number){}
    introduce() {
        return `hi i am ${this.name} and ${this.age} years old`
    }
}

const user = new User("SUMIT",23); 
console.log(user.introduce()); 


class BankAccount{
    constructor(public balance = 0){}
    deposit(amount:number){
        this.balance += amount;
    }
    withdraw(amount:number){
        if(amount>this.balance) throw new Error("insufficient balance"); 
        this.balance -= amount
    }
}

const bankaccount = new BankAccount(); 
console.log(bankaccount.deposit(500))
// console.log(bankaccount.withdraw(800))


class Car{
    constructor(public brand:string,public speed = 0){}
    accelerate(){
        this.speed += 10
    }
    brake(){this.speed = Math.max(0,this.speed - 10)}
}



class Student{
    constructor(public name:string,public marks:number[]){}
    average(){
        return this.marks.reduce((a,b)=>a+b,0)/this.marks.length
    }
}


class Employee {
    constructor(public id:number,public name:string){}
    work(){
        return `${this.name} is working`
    }
}

const emp = new Employee(1,"sumit")


class Product{
    constructor(public name:string,public price:number){}
    discount(percent:number){
        this.price *= 1-percent/100
    }
}



class Book{
    constructor(public title:string,public author:string){}
    summary(){
        return `${this.title} by ${this.author}`
    }
}



class order{
    constructor(public id:string,public total:number){}
    checkout(){
        return `order ${this.id}: ${this.total}`
    }
}


class Payment {
    constructor(public amount:number){}
    pay(){
        return `paid ${this.amount}`
    }
}


class Library{
    books:string[] = []; 
    addBook(book:string){
        this.books.push(book);
    }
    count(){
        return this.books.length; 
    }
}

