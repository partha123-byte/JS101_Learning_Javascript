let n=1;
let total=0;

while(n<=100){
  if(n%2==0){
    total=total+n;
  }
  n+=1;
}
console.log("Average of all even number is",total/50);