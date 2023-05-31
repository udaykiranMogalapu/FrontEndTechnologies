class person
{
	name:string;
	constructor(sname:string)
	{
		this.name=sname;
	}

	speak():void
	{
		console.log(this.name+" is speaking!!!");
	}
}


//derived class

class student extends person
{
	//property

	rollnumber:number

	constructor(rollnumber:number,name1:string)
	{
		super(name1)
		this.rollnumber=rollnumber
	}

	display():void
	{
		console.log("student name:"+this.name)
		console.log("student rollnumber:"+this.rollnumber)
	}
}

var s1=new student(1,"uday")

var s2= new student(2,"kiran")

console.log("student 1 information")

s1.speak()
s1.display()

