abstract class animal
{	
	abstract name:string;
	age: number;

	constructor(age:number)
	{
		this.age=age
	}

	feed(food:string,amount:number,):void{
		console.log('feeding '+this.name+' the '+' '+amount +"kg of "+food)
	}

	abstract sleep():void;

}

class cat extends animal
{
	name:string;
	constructor(name:string,age:number)
	{
		super(age)
		this.name=name
	}
}

const CAT =new cat('cosmo',8)

cat.feed("fish",2)