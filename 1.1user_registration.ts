class UserRegistration{
    constructor(public name:string,public email:string,public age:number){}
    createUser(){
        if(!this.age){
            throw new Error("invalid input")
        }
        return  `${this.email} ${this.age} ${this.name}`
        
    }
}

const user = new UserRegistration("sumit","abc@gmail.com",22)
console.log(user.createUser())



class BankAccount{
    constructor(public balance:number = 0){}
    deposit(amount:number){
        this.balance += amount
        return this.balance;
    }
    withdrawl(amount:number){
        this.balance -= amount
        return this.balance;
    }
}


class Account{
    constructor(private balance = 0){
        if(balance<0) throw new Error("negative balance")
    }

    deposit(amount:number){
        if(amount<=0) throw new Error("invalid amount");
        this.balance +=amount;
    }
    withdraw(amount:number){
        if(amount<=0 || amount>this.balance) throw new Error("invalid withdrawl"); 
        this.balance -= amount;
    }
    transfer(to:Account,amount:number){
        this.withdraw(amount);to.deposit(amount)
    }
    getBalance(){
        return this.balance;
    }

}

const a = new Account(1000)
const b = new Account()
a.transfer(b,300); 
console.log(a.getBalance(),b.getBalance());







type Item = {
    name:string,
    price : number,
    quantity:number
};


class Cart{
    private readonly items:Item[] = []
    add(item:Item){
        if(item.price<0 || item.quantity<0) throw new Error("invalid item"); 
        this.items.push({...item})
    }
    subtotal(){
        return this.items.reduce((s,i)=>s+i.price*i.quantity,0)
    }
    itemsView(){
        return this.items.map(i=>({...i}))
    }
}

const c = new Cart(); 
c.add({name:"keyboard",price:1200,quantity:5})
console.log(c.subtotal()); 