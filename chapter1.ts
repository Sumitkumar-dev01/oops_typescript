let age:number = 25; 
let name : string = "sumit"; 
console.log(name); 
console.log(age)

function add(a:number,b:number): number{
    return a+b;
}

console.log(add(5,7))


function calculateDiscount(price:number,percent:number):number{
    return price-(price*percent)/100
}
console.log(calculateDiscount(100,10)); 


class Product{
    name:string;
    price:number;

    constructor(name:string,price:number){
        this.name = name;
        this.price = price
    }
}

function createUser(name:string,age?:number,role:string = "member"){

}


function greet(name:string,greeting:string = "Hello"){
    return `${greeting},${name}`; 
}

console.log(greet("sumit")); 


function registerUser(email:string,name?:string){
    const displayName = name?? email.split("@")[0]; 
    return {email,displayName}; 
}
console.log(registerUser("abc@gmail.com","abc")); 


type status = "pending" | "success" | "failed"; 
// type Employee = Person & Worker; 

function printId(id:number|string){
    console.log(id); 
}
printId("dklfn a") 


type PaymnentStatus = "initiated" | "completed" | "failed" | "refunded"; 
function updateStatus(status:PaymnentStatus){
    // ts ensures only these 4 strings are ever passed. 
}


type Role = "admin" | "editor" | "viewer"; 
let r: Role = "admin"; 

type Direction = "up" | "down"; 
function move(d:Direction){}


type HttpMethod = "get"|"post"|"put"|"delete"; 
function request(method:HttpMethod,url:string){}


type subscriptionTier = "free" | "pro" | "enterprise";
class User{
    constructor(public name:string, public tier:subscriptionTier){

    }
}


interface Point{
    x:number;
    y:number;
}

const p:Point = {x:1,y:2}; 


interface Logger {
    log(message:string):void;
}

function process(logger:Logger){
    logger.log("processing started")
}



interface PaymnentProcessor{
    pay(amount:number):void;
}
class UpiProcessor implements PaymnentProcessor{
    pay(amount:number):void{
        console.log(`paid amount via upi`)
    }
}
class CardProcessor implements PaymnentProcessor{
    pay(amount:number):void{
        console.log(`paid amount via card `)

    }
}


interface config {
    readonly apiKey: string;
}

class User1{
    readonly id:string;
    constructor(id:string){
        this.id = id;
    }
}


const u = new User1("u1");
// u.id = "u2"  // now this will compilation error. 


interface AuditLog{
    readonly timestamp:Date;
    readonly action: string;
}


class BankAccount{
    readonly accountNumber: string;
    private balance:number

    constructor(accountNumber:string,initialBalance:number){
        this.accountNumber = accountNumber; 
        this.balance = initialBalance;
    }
}



// type vs interface

interface Animal {
    name:string;
}

type ID = string | number;

interface Car{brand:string}
type wheels = 2 | 4 ; 


interface ApiResponse {
    data:unknown;
    status:number;
}

type ReqeustState = "idle" | "loading"| "success"| "error"; 



interface shape {
    area() : number
}

class Circle implements shape{
    constructor(private radius:number){}
    area():number{
        return Math.PI*this.radius **2;
    }
}



enum OrderStatus {
    pending,
    shipped,
    delivered
}

enum Direction1 {
    up,
    down,
    left ,
    right
}

enum PaymentMethod {
    card = 'CARD',
    UPI = "UPI",
    NetBanking = "NET_BANKING"
}


enum UserRole {
    Admin = "ADMIN",
    Editor = "EDITOR",
    Viewer = "VIEWER"
}

class User3{
    constructor(public name:string,public role:UserRole){

    }
    canEdit():boolean {
        return this.role == UserRole.Admin || this.role == UserRole.Editor
    }

}



// generic vs generic constraint. 

function identity<T>(value: T): T {
  return value;
}

function getLength<T extends { length: number }>(item: T): number {
  return item.length;
}



function wrapInArray<T>(item: T): T[] {
  return [item];
}
wrapInArray<number>(5);   // [5]
wrapInArray<string>("a"); // ["a"]


function firstElement<T>(arr: T[]): T | undefined {
  return arr[0];
}



interface HasId {
  id: string;
}

class Repository<T extends HasId> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  findById(id: string): T | undefined {
    return this.items.find((item) => item.id === id);
  }
}

class User4 implements HasId {
  constructor(public id: string, public name: string) {}
}

const userRepo = new Repository<User4>();
userRepo.add(new User4("u1", "Sumit"));



let a: any = 5; 
let b: unknown = 5; 
function fail():never {
    throw new Error("failed"); 
}



let value: unknown = "hello"; 
if(typeof value === "string"){
    console.log(value.toUpperCase()); 
}



function parseJson(json: string): unknown {
  return JSON.parse(json);
}

const result = parseJson('{"name":"Sumit"}');
if (typeof result === "object" && result !== null && "name" in result) {
  console.log((result as { name: string }).name);
}




// type assertion
// very important for frontend 

const el = document.getElementById("app") as HTMLDivElement; 

let value2: unknown = "hello"; 
let str = value2 as string;


const config = JSON.parse(rawConfig) as {
    apiUrl: string; 
    timeout: number
}; 


interface Admin {
    role: "admin"; 
    permissions: string[]; 
}




// practice sheet. 

function greet2(name:string,title?:string){
    return {name,title}
}


// revise generic with chai aur code. 

