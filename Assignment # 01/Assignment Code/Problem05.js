let english = +prompt("enter marks obtain in english ")
let urdu = +prompt("enter marks obtain in urdu ")
let math = +prompt("enter marks obtain in math ")
let physics = +prompt("enter marks obtain in physics ")
let chemistry = +prompt("enter marks obtain in chemistry ")

let obtain = english + urdu + math + physics + chemistry;

let avg = (obtain/500)*100;

    	if(avg>=90 && avg<=100)
    	{
        	console.log("The student Grade is: A");
    	}
    	if(avg>=80 && avg<90)
    	{
       	console.log("The student Grade is: B");
    	}
    	if(avg>=70 && avg<80)
    	{
        	console.log("The student Grade is: C");
    	}
    	if(avg>=60 && avg<70)
    	{
       	 console.log("The student Grade is: D");
    	}
    	if(avg<60)
    	{
        	console.log("The student Grade is: F");
    	}
    	if(avg<0 && avg>100)
    	{
        	console.log("invalid marks");
    	}
