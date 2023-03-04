console.log("This is javascript functions tutorial");
//These are global declarations . They are globally available
let name="Rijan";
let name1="Sabin";
let name2="Sameer";
let order="Do you want a coffee?";
//Declaring function
function greet(name="Rijan",order="Do you want water")//so the orders default arguement is given now
{
    console.log("Good morning "+name + ". " +order);
   
}
//Calling function
greet(name,order);
greet(name1,order);
greet(name2,order);
greet(name);//since order is not called its default parameter will be used
greet();


//Function returning value

function sum(a,b,c)
{
    let d=a+b+c;
    return d;
    //This line will never be executed because nothing will be execcuted after function is returned
    //console.log("");
}
let returnval=sum(1,2,3);
console.log(returnval);


//quiz
function maximum(a,b){
             if(a>b)
             {
                return a;
             }
             else
             return b;
}
let max=maximum(100,3);
console.log(max);