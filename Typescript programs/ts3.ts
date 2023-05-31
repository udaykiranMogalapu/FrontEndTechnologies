function checkPrime(cNumber:number)
{
	for(let i=2;i<=cNumber;i++)
	{
		if (cNumber%i==0)
			return false;

	}
	return true;
}


let arr: number[];
arr=[31,6,98,43,22];
let str: string[];
str=["love","is","injurious"];
let array:Array<number>=[1,2,3,4];
let k:boolean;
for(let i=0;i<4;i++)
{
	k=checkPrime(array[i]);
	if(k==false)
		console.log("not prime");
	else
		console.log("prime");
}
