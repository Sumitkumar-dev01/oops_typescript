/**
 * abstraction -> expose what hide how.
 * 
 */

class EmailService{
    send(message:string):void{
        console.log(`email sent:${message}`)
    }
}

const email1 = new EmailService(); 
email1.send("hello ");

// now if i have to send multiple things like email,sms
// then we can take help of interface 


interface Notifier{
    send(messaage:string):void;
}

/**
 * interface defines a contract
 * contract means class which implements this interface and it consists 
 * of required methods. 
 * 
 */


class EmailNotifier implements Notifier{
    send(message:string){
        console.log("email sending")
    }
}

class SMSNOTIFIER implements Notifier{
    send(message:string){
        console.log("sms sending")
    }
}

function notifyUser(notifier:Notifier,message:string):void{
    notifier.send(message)
}

notifyUser(new EmailNotifier(),"welcome"); 
notifyUser(new SMSNOTIFIER(),"your otp is 1234");


/**
 * abstract class and abstract method.
 * in your company you are a manager and there is also an inter 
 *  
 */


// normal class 

class Employee5{
    name:string;
    constructor(name:string){
        this.name = name;
    }

    printName():void{
        console.log(this.name)
    }
}
const Employee = new Employee5("sumit"); 
Employee.printName(); 


/**
 * 
 *Lekin abhi humne koi restriction nahi lagayi. Koi bhi directly Employee ka object bana sakta hai.
Ab bonus calculation ke case mein ek problem hai: generic Employee ka bonus kaise calculate hoga? Manager aur intern ke rules different hain.
Hum nahi chahte ki koi incomplete base class ko directly use kare.
Yahan abstract keyword kaam aata hai.
 */



/**
 * Abstract class ek aisi base class hai jise directly
 *  instantiate nahi kar sakte, lekin usse inherit karke doosri classes bana sakte hain.
 */


abstract class Employee6{
    name:string;
    constructor(name:string){
        this.name = name;
    }
    printName():void{
        console.log(this.name)
    }
}

class Manager extends Employee6{}; 
const manager = new Manager("sumit"); 
manager.printName(); 


class Intern extends Employee6{}; 
const intern = new Intern("rahul"); 
intern.printName(); 




/**
 * abstract method : 
 * concrete method. 
 * 
 * Abstract method
calculateBonus()
Sirf contract define karta hai. Actual calculation child class karegi.
Concrete method
printPayslip()
Iska implementation already available hai. Child classes ise inherit kar sakti hain.
 * 
 */


abstract class Employee7{
    constructor(public name:string){}

    abstract calculateBonus():number; 
    printPayslip():void{
        console.log(`${this.name} bouns:${this.calculateBonus()}`)
    }
}


class Manager1 extends Employee7{
    calculateBonus(): number {
        return 500000;
    }
}
class Intern1 extends Employee7{
    calculateBonus(): number {
        return 5000; 
    }
}

/**
 * Lekin dono ko calculateBonus() implement karna hi padega, kyunki base class ne ise abstract declare kiya hai.
 */

const manager1 = new Manager1("sumit"); 
const intern1 = new Intern1("rahul"); 

manager1.printPayslip(); 
intern1.printPayslip(); 









/**
 * interface vs abstract class.
 * 
 *  Interface ek contract hai. Ye define karta hai ki kisi class ko kaunse methods ya properties provide karne honge, lekin khud un methods ka implementation nahi deta.
 */


interface Notifier5{
    send(message:string):void;
}

class EmailNotifier5 implements Notifier5{
    send(message: string): void {
        console.log("email received"); 
    }
}

class SmsNotifier implements Notifier{
    send(messaage: string): void {
        console.log("sms received"); 
    }
}



abstract class NotificationService{
    abstract send(message:string):void;
    log(message:string):void{
        console.log("notification processed");
    }
}

class EmailService1 extends NotificationService{
    send(message: string): void {
        console.log("sending email"); 

    }
}

const email = new EmailService(); 
email.send("welcome to noteshub"); 












