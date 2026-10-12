class Example{
    private secret: string = "hidden"; 
}


// question: when should we use constructor or direct function 
// inside the class. 

class wallet {
    private balance: number = 0; 
    add(amount: number):void{
        if(amount<0) throw new Error("cannot add negative amount"); 
        this.balance += amount;
    }
    getBalance():number{
        return this.balance;
    }
}

class Temperature{
    private celsius2:number;
    constructor(celsius2:number){
        this.celsius2 = celsius2; 
    }
    toFahrenheit():number{
        return this.celsius2 *1.8+32
    }
}


class BankAccount{
    private balance4: number;
    constructor(initialBalance:number){
        if(initialBalance<0) throw new Error ("initial balance cannot be negative")
            this.balance4 = initialBalance
    }

    deposit(amount:number):void{
        if(amount<=0) throw new Error("deposit must be positive")
            this.balance4 += amount
    }

    withdraw(amount:number):void{
        if(amount>this.balance4) throw new Error("insufficient funds"); 
        this.balance4 -= amount;
    }

    getBalance():number{
        return this.balance4
    }
}





class Example2{
    public name:string = "public"; 
    private secret: string = "private"; 
    protected internal: string = "protected"; 
}


class Animal {
    protected sound:string = "..."; 
    makeSound():void{
        console.log(this.sound); 
    }
}

class Dog extends Animal {
    bark():void{
        this.sound = "woof";
        this.makeSound(); 
    }
}
const d = new Dog(); 
d.bark(); 



class Employee {
    public name:string; 
    private salary:number;
    protected department: string;

    constructor(name:string,salary:number,department:string){
        this.name = name;
        this.salary = salary; 
        this.department = department;
    }
}



class User{
    public username: string;
    private passwordHash: string; 
    protected accountCreatedAt:Date;

    constructor(usernmae:string,passwordHash:string){
        this.username = usernmae; 
        this.passwordHash =  passwordHash; 
        this.accountCreatedAt = new Date();
    }

    verifyPassword(input:string):boolean{
        return this.hashPassword(input) === this.passwordHash;
    }
    private hashPassword(input:string):string{
        return `hashed:${input}`
    }
}



// getter and setters 

class Circle {
    private radius2:number; 
    constructor(radius2:number){
        this.radius2 = radius2; 
    }
    get radius():number{
        return this.radius2;
    }
    set radius(value:number){
        if(value<=0) throw new Error("Radius must be positive"); 
        this.radius2 = value;
    }
}

const c = new Circle(5); 
console.log(c.radius); 
c.radius = 10;



class Rectangle{
    constructor(private _width:number,private _height:number){}
    get area():number{
        return this._width* this._height
    }
}