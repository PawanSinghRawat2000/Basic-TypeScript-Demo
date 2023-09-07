"use strict";
// let a:string="Hello World"
// console.log(a);
// let b=<number>25
// console.log(b);
// const func=(n:number,m:number):number=>{
//     console.log(n,m);
//     return n*m;
// }
//                               type aliases
// type MyNumber=(n:number,m:number)=>number
// const fun:MyNumber=(n,m)=>{
//     return n*m;
// }
// ------------------------Array--------------------
// const arr1:number[]=[1,2,3,4]
// const arr2:Array<number|string>=[]
// ----------------------object-------------------------
// interface bmiObj{
//     height:number,
//     weight:number,
//     gender?:string
// }
// type bmiObj={
//     height:number,
//     weight:number,
//     gender?:string
// }
// const obj:bmiObj={
//     height:120,
//     weight:50,
//     gender:"male"
// }
// interface obj extends bmiObj{
//     country:string
// }
// const obj2:obj={
//     height:120,
//     weight:50,
//     country:"India"
// }
// --------------------------function--------------------
// type FuncType=(n:number,m:number,l?:number)=>number
// optional parameter
// const func1:FuncType=(n,m,l)=>{
//     if(typeof l==="undefined")return n*m;
//     return n*m*l;
// }
// console.log(func1(20,30))
// default parameter
// type FuncType2=(n:number,m:number,l?:number)=>number
// const func1:FuncType2=(n,m,l=2)=>{
//     return n*m*l;
// }
// console.log(func1(20,30))
// Rest Operator
// type FuncType=(...arg:number[])=>number
// const func1:FuncType=(...arg)=>{
//     let result:number=1;
//     for(let i=0;i<arg.length;i++){
//         result*=arg[i]
//     }
//     return result;
// }
// console.log(func1(20,30,30,40,50,60))
// Function with Objects
// interface Product{
//     name:string,
//     stock:number,
//     price:number
//     readonly id:string
// }
// type getDataType=(product:Product)=>void
// const getData:getDataType=(product)=>{
//     console.log(product)
// }
// const productOne:Product={
//     name:"Mac",
//     stock:2,
//     price:1000,
//     id:"sahdasjkdj"
// }
// getData(productOne)
// -------------------------CLASS---------------------
// class Player{
//     constructor(private height:number,public weight:number){
//         this.height=height;
//         this.weight=weight
//     }
//     get getHeight(){
//         return this.height
//     }
//     set setHeight(val:number){
//         this.height=val;
//     }
// }
// const pawan=new Player(100,60)
// console.log(pawan.getHeight)
// console.log(pawan.weight)
// pawan.setHeight=120
// console.log(pawan.getHeight)
// interface ProductType{
//     name:string,
//     price:number,
//     stock:number,
//     getId:()=>string
// }
//  class Product implements ProductType{
//     private id:string=String(Math.random()*10000);
//     constructor(
//         public name:string,
//         public price:number,
//         public stock:number
//         ){}
//     getId=()=>this.id
// }
// const product1=new Product("Mac",100000,200)
// console.log(product1.name)
// ----------------TYPE ASSERTION- DOM MANIPULATION-----------------------
// const btn = document.getElementById('btn') as HTMLElement
// const btn= <HTMLElement>document.getElementById('btn')
// const btn=document.getElementById('btn')!
// btn.onclick;
// const img=document.getElementById('img') as HTMLImageElement
// const img=document.querySelector('img') as HTMLImageElement
// const img=document.querySelector('img')!
// img.src;
// interface Person{
//     name:string,
//     email:string
// }
// const myObj:Person={
//     name:"pawan",
//     email:"test@gmail.com"
// }
// const getData=(key:keyof typeof myObj):string=>{
//     return myObj[key]
// }
// console.log(getData("email"))
// -----------------TYPE UTILITY---------------------------
// type User={
//     name:string,
//     email:string,
// }
//Partial<Type>
// type User2=Partial<User>
//Required<Type>   opposite of partial
// type User={
//     name:string,
//     email:string,
// }
// const user2:Required<User>={
//     name:"",
//     email:""
// }
//ReadOnly<Type>
// type User={
//     name:string,
//     email:string,
// }
// const user:Readonly<User>={
//     name:"",
//     email:"",
// }
//LATER........................
//-----------------------------------GENERICS---------------------
// type Person={
//     name:string,
//     email:string,
// }
// const func=<T>(n:T):T=>{
//     return n;
// }
// const person1:Person={
//     name:"pawan",
//     email:"jslkjja@gmail.com"
// }
// const ans=func(20)
// const ans1=func("20")
// const ans=func<Person>(person1)
// type Person={
//     name:string,
//     age:number,
// }
// const users:Person[]=[
//     {
//         name:"pawan",
//         age:23,
//     },
//     {
//         name:"aman",
//         age:23,
//     },
// ]
// const filterByProperty=<T,Key extends keyof T,>(arr:T[],property:Key,value:T[Key])=>{
//     const newArr=arr.filter((item)=>item[property]===value);
//     return newArr;
// }
// const filteredPeopleByName=filterByProperty(users,"name","pawan")
// const filteredPeopleByAge=filterByProperty(users,"age",23)
// console.log(filteredPeopleByName)
// console.log(filteredPeopleByAge)
