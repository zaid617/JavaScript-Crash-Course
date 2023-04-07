
let a0 = +prompt("enter any number ") 
let a1 = +prompt("enter any number ") 
let a2 = +prompt("enter any number ") 
let a3 = +prompt("enter any number ") 
let a4 = +prompt("enter any number ")


if (a0>a1 && a0>a2 && a0>a3 && a0>a4)
{
    console.log(a0);
}
else if (a1>a0 && a1>a2 && a1>a3 && a1>a4)
{
    console.log(a1);
}
else if (a2>a0 && a2>a1 && a2>a3 && a2>a4)
{
    console.log(a2);
}
else if (a3>a0 && a3>a2 && a3>a1 && a3>a4)
{
    console.log(a3);
}
else
{
    console.log(a4);
}