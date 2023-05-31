function greet(name)
{
	return "hello"+name;
}

let wish:string=greet("uday");
console.log(wish);

let greet2 =function(name:string){
	return ("heeeelo"+name);
}

console.log(greet2("uday"))
let greet3 =(name:string)=>{
	return ("pora  "+name);
}

console.log(greet3("bogada"));


function log(message:string,userID?:string):void
{
	let time=new Date().toLocalTimeString();
	console.log(time,message,userID // 'not signed in');


}
console.log('page loaded');


// "this" keyword

var car={
	registrationNumber:'ap12sh1233',
	brand:"toyota",

	display:function(){console.log(this.registrationNumber+" "+this.brand);}
}

car.display();
