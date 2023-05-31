function checkPrime(cNumber:number)
{
	for(let i=2;i<cNumber;i++)
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
let array:Array<number>=[11,12,13,14];
let k:boolean;
for(let i=0;i<4;i++)
{
	k=checkPrime(array[i]);
	if(k==false)
		console.log(array[i]+" is not prime");
	else
		console.log(array[i]+" is a prime");
}
console.log("\n");
console.log("Using iterator over array")
arr.forEach(
	function(element)
	{const isPrime=checkPrime(element);
	if(isPrime)
		console.log("prime");
	else
		console.log("not a prime");
}

	)