//simple syntax of generics

function identity<t>(arg: t):t
{
	return arg;

}

let out1=identity<string>("my generic type function")

let out2=identity<number>(10);

console.log(out1)

console.log(out2);

function identity2(arg:number):number
{
	return arg;
}

let out3=identity2(10);
console.log(out3);

function identity3(arg: any):any
{
	return arg;
}

let out4=identity3("uday")
console.log(out4);

function identity4<type>(args: type):type
{
	return args;
}

let out5=identity4<string>("uday kiran");

console.log(out5);

let out6=identity4<number>(12345);

console.log(out6);


let x:<S>={
	name: string;
	id: number
}
let v:<S>={
	name:"uday kiran mogalapu",

	id:10,
}

function owntype<type, t>(id:type, name:t):void{
	console.log(id,name);
}

let out7=owntype<number,string>(10,"pratap");

