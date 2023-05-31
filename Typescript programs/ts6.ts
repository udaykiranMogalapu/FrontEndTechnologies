let arr:string[]=["uday","kiran","cse"]


for(let i=0;i<arr.length;i++)
{
	console.log(arr[i]);

}
console.log("\n");

console.log("iterating using in");

let i:any;
for(i in arr)
{
	console.log(arr[i]);
}