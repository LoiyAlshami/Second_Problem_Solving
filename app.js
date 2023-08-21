function isPrime(num){
    if(num<=1){
        return false;
    }
    for(let i=2;i<=Math.sqrt(num);i++){
        if(num%i==0) return false;
    }
    return true;
}
console.log(isPrime(97));

const readline =require("readline");
const reader=readline.createInterface({
    input: process.stdin,
    output:process.stdout
});
reader.question("please enter your number : ",num =>{
    console.log(isPrime(num));
    reader.close();
});