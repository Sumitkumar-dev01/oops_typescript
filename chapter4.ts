// syntax of interface 

interface shape{
    area():number; // WHAT, not HOW
}


interface Notifier{
    send(message:string):void;
}


function notifyUser(notifier:Notifier,message:string){
    notifier.send(message); // doesn't know or care about how it's sent 
}



interface PaymentGateway{
    charge(amount:number):void;
}
class StripeGateway implements PaymentGateway{
    charge(amount: number): void {
        console.log(`charging ${amount} via stripe api`); 
        // real implementation would call stripe's sdk here
    }
}


class RazorpayGateway implements PaymentGateway{
    charge(amount: number): void {
        console.log(`charging ${amount} via razorpay api`); 
    }
}


function checkout(gateway:PaymentGateway,amount:number){
    gateway.charge(amount); 
}



abstract class Shape {
    abstract area():number;  // no-body subclass must implement. 
    describe():string{ // shared,concrete implementation
        return `this shape has an area of `
    }
}


abstract class Animal{
    abstract makeSound():string;
    introduce():string{
        return `i say ${this.makeSound()}`
    }
}

class Dog extends Animal{
    makeSound(): string {
        return "woof"; 
    }
}


abstract class Employee{
    constructor(public name:string){}
    abstract calculateBonus():number;
    printPayslip():void{
        console.log(`${this.name} bonus:${this.calculateBonus()}`)
    }
}





abstract class NotificationService {
  abstract deliver(message: string): void; // must vary per channel

  send(message: string): void {            // shared logic for ALL channels
    console.log(`[LOG] Sending notification: "${message}"`);
    this.deliver(message);
    console.log(`[LOG] Notification sent.`);
  }
}

class EmailNotification extends NotificationService {
  deliver(message: string): void {
    console.log(`Emailing: ${message}`);
  }
}

class SmsNotification extends NotificationService {
  deliver(message: string): void {
    console.log(`Texting: ${message}`);
  }
}

const email = new EmailNotification();
email.send("Your order has shipped!");




// interface vs abstract class. 


interface Repository<T> {
  findById(id: string): T | undefined;
}
abstract class BaseRepository<T> implements Repository<T> {
  protected items: T[] = [];
  abstract findById(id: string): T | undefined; // still must implement
  count(): number {
    return this.items.length; // shared, concrete
  }
}



interface Flyable{
    fly():void;
}

class Bird implements Flyable{
    fly():void{
        console.log("flapping wings"); 
    }
}


interface FileStorage{
    upload(file:string):void; 
    download(fileName:string):string;
}

class LocalFileStorage implements FileStorage{
    upload(file:string):void{
        console.log("saving file to local disk")
    }
    download(fileName: string): string {
        return `contents of filename from local disk`
    }
}

class S3FileStorage implements FileStorage{
    upload(file:string):void{
        console.log(`uploading ${file} to s3 bucket`)
    }
    download(fileName: string): string {
        return `contents of ${fileName} from s3`
    }
}












interface DatabaseRepository<T> {
  save(item: T): void;
  findById(id: string): T | undefined;
}

class InMemoryRepository<T extends { id: string }> implements DatabaseRepository<T> {
  private items: Map<string, T> = new Map();

  save(item: T): void {
    this.items.set(item.id, item);
  }

  findById(id: string): T | undefined {
    return this.items.get(id);
  }
}

function registerUser(repo: DatabaseRepository<{ id: string; name: string }>, id: string, name: string) {
  repo.save({ id, name });
}





// abstraction vs encapsulation 

// abstraction -> caller doesn't know/care which gateway is used. 




interface PaymentGateway{
    charge(amount:number):void;
}

// encapsulation => internal balance is protected from invalid mutation. 

class Wallet{
    private balance:number = 0; 
    deposit(amount:number):void{
        if(amount<=0) throw new Error("invalid amount"); 
        this.balance += amount;
    }
}







/**
 * learn about abstraction 
 * abstraction vs encapsulation 
 * abstract class vs interface 
 */