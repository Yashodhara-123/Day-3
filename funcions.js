//Functions
function PrintMsg(){
	console.log("Hello World")
}
PrintMsg()

function sum(){
	return 5+6
}
console.log(sum())

function sub(a,b){
		return a-b
	}

console.log(sub(5,3))
console.log()

//write a boolean function to find a given number is prime
function prime(n){
	 if(n % 1 == n && n/n == 1)
	{
		console.log("n is a prime number")
	}

	else{
		console.log("n is not a prime number")
	
		}
		return n
}
console.log(prime(6))
console.log()

//write a recursive function to print numbers from 1 to n

//arrow function
/*
	function PrintMsg(){
		console.log("Hello JS")
	}
*/

const msg = ()=>{return console.log("Hello JS")}
//console.log(msg)
msg()
console.log()

//write an arrow function to sum 2 numbers
const add = (a,b)=>{return a+b}
console.log(add(4,5))
console.log()

//default parameter 
const mult = (a,b=2)=>{return a*b}
console.log(mult(4,5))
console.log(mult (4))
console.log()

//Rest parameter
//Method 1

/*const mysum=(...n)=>{
	let t=0
	n.forEach((i)=>t=t+i)
	console.log(t)
}
mysum(4,5,6,7,8)
*/

//Method 2

const mysum = (...n)=>{
	return n.reduce((t,i)=>t=t+i)
}
console.log(mysum(4,5,6,7,8))
console.log()



//callback function


const greet =(msg,fun)=>{
	console.log("Hi.."+msg)
	fun()
}
greet("Good morning",()=>{console.log("My Name is David")})
console.log()



const multtwo = (n)=>n*2

const myarr = (multtwo,...n)=>{
	n.forEach((i)=>console.log(multtwo(i)))
}
myarr(multtwo,4,5,6,8,2)





