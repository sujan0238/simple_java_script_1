function compare(){

 
   var value=prompt("Enter the number:")


  
  if(value>100){

     
   alert("The number is greater than 100");

   
 }else{

 
       alert("The number is less than 100");
 
   }


}



function convertToCelsius(){

 
   var fahrenheit=prompt("Enter the Temperature ");

 

   var celsius=(fahrenheit-32)*5/9;

 
   alert(fahrenheit+" Fahrenheit is equal to"+celsius+" Celsius");

}


function convertToFahrenheit(){


    var celsius=prompt("Enter the Temperature ");

 
   var fahrenheit=celsius*9/5+32;

  
  alert(celsius+" Celsius is equal to"+fahrenheit+" Fahrenheit");

}




function multiplication(){

  
  var Firstnumber=prompt("Enter the First number");

 
   var Secondnumber=prompt("Enter the Second number");

   
 var multiply=(Firstnumber*Secondnumber)

   
 alert("Multiplication of "+Firstnumber+" and "+Secondnumber+" is "+multiply);

}


function division(){

 
   var Firstnumber=prompt("Enter the First Number");

 
   var Secondnumber=prompt("Enter the Second Number");

  
  if(Secondnumber==0){

     
   alert("SecondNumber Can Not Be Zero");
 
       return false;
   
 }


   
 var divide=(Firstnumber/Secondnumber)

   
 alert("Division of "+Firstnumber+" and "+Secondnumber+" is "+divide);

}




function calculation(){

  
  var marksOne=prompt("Enter the Marks of  Firsrt subject ");

    var marksTwo=prompt("Enter the Marks of Second subject ");
   
 var marksThree=prompt("Enter the Marks of Third subject ");

  
  var total=parseFloat(marksOne)+parseFloat(marksTwo)+parseFloat(marksThree);
  
  var percentage=(total/300)*100;//Assuming the total marks for each subject is 100
   
 alert("Your Percentage is "+percentage+"!");
  
  if(percentage>=80 && percentage<=100){
       
 alert(" You Got the distinction");
   
 }
else if(percentage>=60 && percentage<80){
 
       alert(" You Got the First Division");
 
   }
else if(percentage>=40 && percentage<60){
   
     alert(" You Got the Second Division")
   
 }else if(percentage>=0 && percentage<40){
    
    alert(" Fail");
  
  }
else{
   
     alert(" Invalid Subject Marks");
 
   }
}




function count(){
   
 var bCount=0;

 
   var gCount=0;
 
   do{
     
   var char=prompt("Enter the character");
    
    char=char.toLowerCase();

     
   if(char=='b')
        {
      
      bCount++;
     
   }
else if(char=='g'){
      
      gCount++;
      
  }
else{
    
        continue;
  
      }

  
  }
while(char!='x');

  
  alert("B Count is "+bCount+" and the G Count is "+gCount);

}

