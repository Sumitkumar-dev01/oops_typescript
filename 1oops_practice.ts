class bankAccount{
    constructor(public balance= 0){}
    deposit(amount:number){
        this.balance += amount
        return `amount after deposit ${amount}`;
    }
    withdraw(amount:number){
        if(amount>this.balance){
            console.log("insufficient amount"); 
        }
        this.balance -= amount
    }
    getBalance(){
        return this.balance
    }
}


const bank = new bankAccount();
console.log(bank.deposit(500)); 



class book{
    constructor(public title:string,public author:string,public pages:number){}
    reveal(){
        return `the title of the book is ${this.title} and author is ${this.author} and it consists of ${this.pages} pages`
    }
}
const newBook = new book("godan","munshi premchand",48); 
console.log(newBook.reveal())




class Student{
    constructor(public marks1:number, public marks2:number){}
    average(){
        return `the average of the given marks is: ${((this.marks1)+(this.marks2))/2}`
    }
}


const student = new Student(50,55); 
console.log(student.average())


class Car{
    constructor(public brand:string,public speed:number){}
    accelerate(){
       return  this.speed +=10; 
    }
    brake(){
        return this.speed = Math.max(0,this.speed-10)
    }
}

const newCar = new Car("mercedes",100)
console.log(newCar.brake())


class Employee{
    constructor(public designation:string){}
    work(){
        return `the work of this customer is ${this.designation}`
    }
}

const emp = new Employee("to manage all the bugs of an application")

console.log(emp.work())



class Product{
    constructor(public proudct:string){}
    create(){
        return `the product ${this.proudct} is created successfully`
    }

    discount(){
        // not writing logic.
        return `the discouont on the ${this.proudct} is 5%`
    }
}

const trouser = new Product("Trouser"); 
console.log(trouser.create());
console.log(trouser.discount()); 




class order{
    constructor(public item:number,public total:number){}
    additem(){
        console.log(`${this.item} items added succesfully into the cart`)
        return 0; 
    }
    Total(){
        console.log(`the total price of the cart is ${this.total}`)
        return 0;
    }
}



const order1 = new order(5,450)
console.log(order1.Total()); 
console.log(order1.additem()); 




class Payment {
    constructor(public amount:number){}
    pay(){
        return `paid ${this.amount}`
    }
}



const pay1 = new Payment(50); 
console.log(pay1.pay())




class Library{
    books:string[] = []; 
    addBook(book:string){
        this.books.push(book);
    }
    count(){
        return this.books.length;
    }
}


const Library1 = new Library(); 
console.log(Library1.addBook("focus on what matters."))
console.log(Library1.count()); 



