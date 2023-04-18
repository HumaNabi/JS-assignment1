// Task 1:
// Calculate the zakat value, first, create a variable named "zakatPercentage" and
// store the value of 2.5% in it (hint: 2.5% means 0.025). Next, create another variable
// named "userInput" and take the input from the user using the prompt. Make sure
// the input value is of a type number by converting the input string to a number
// using a suitable method. Then, create a variable named "result" and assign its value
// to the multiplication of the zakat percentage and user input. Finally, use an alert
// message to display the calculated zakat value. The message should look like this:
// "Your zakat value is xxx".
 
var zakatPercentage = 0.025; // 2.5% in decimal form
var userInput = prompt("Enter the total amount of your wealth (in numbers) to calculate zakat:");
userInput = parseFloat(userInput);

// Check if the user input is a valid number
if (isNaN(userInput)) {
  alert("Invalid input! Please enter a valid number.");
} else {
  // Calculate zakat value
  var result = zakatPercentage * userInput;
  
  // Display the calculated zakat value
  alert("Your zakat value is: " + result.toFixed(2));
//......................................................................................................................................
// Task 2:
// calculate the fitrah amount, first, ask the user to enter the total number of family
// members using the prompt and store the value in a variable called
// "familyMembers". Next, ask the user to choose a fitrah method by providing them
// options using the prompt, and store the selected method and its price in variables.
// Then, use an if-else block to check the user's input and calculate the fitrah amount
// by multiplying the selected method's price with the number of family members.
// Finally, display the calculated fitrah amount using an alert message.

var familymember= prompt("How many family members are there?")
var fitrahmethod=prompt("choose the method: /n 1-Gandum /n 2-Jo /n 3-khajoor /n 4-Khismish")
var fitrahprice;

if(fitrahmethod==="1")
{
  fitrahprice=250
}
else if(fitrahmethod==="2")
{
  fitrahprice=450
}
else if(fitrahmethod==="3")
{
  fitrahprice=2100
}
else if(fitrahmethod==="4")
{
  fitrahprice=2800
}
else {
  fitrahprice=10
}
 var fitrahamount= familymember * fitrahprice;
 alert("The fitrah amount is:" +fitrahamount)
 //......................................................................................................................................
//  Task 3:
// Create a program that generates a random number between 1 and 10 and stores it
// in a variable called "secretNumber". Then, ask the user to enter a guess for the
// secret number using a prompt.
// Use an if-else statement to check if the user's guess matches the secret number. If
// the guess is correct, display a message using an alert saying "Congratulations! You
// guessed the secret number". Otherwise, if the guess is too high or too low, display
// an appropriate message informing the user to guess again.

var secretNumber= Math.random(1,10)
var guessnumber= prompt("Enter a Guess for a secret number:")
if(guessnumber===secretNumber)
{
  alert("congratulations! You guessed the secret number")
}
else {
  alert("an appropriate message informing the user to guess again.")
}
//......................................................................................................................................\

// Task 4:
// Create a program that asks the user to enter a name, and then prints out the name
// with the first letter capitalized (Make your name in capitalized case).

//  var username= prompt("Enter the name:")

 
//  var capitalized = username.charAt().toUpperCase() + username.slice(1).toLowerCase();
//  console.log("Your name is: " + capitalized);

// Task 5:
// In this task, you will be creating two empty arrays called "contactNumbers" and
// "contactNames". Using the prompt, you will ask the user to enter a contact number
// and contact name. You will then push these values into their respective arrays
// using the push method. After adding all the contacts, you will display the contact
// numbers and names in the console. To do this, you will need to use a for loop to
// iterate through both arrays and log each element to the console.
// Make sure to use descriptive variable names and comment on your code for clarity.

var Contactnumbers=[]
var Contactnames=[]
 Contactnumbers=parseint(prompt("Enter a contact number"))
 Contactnames=prompt("Enter contact names:")

Contactnumbers.push()
for(var i=0 ;i<Contactnames.length; i++){
  Contactnames.push()
}console.log(Contactnames)
}

for(var j=0 ; j<Contactnumbers.length; j++ )
{
  Contactnumbers.push()
}
console.log(Contactnumbers)
//.........................................................................................................................................

// Task 6:
// Create an Array that contains different products, and get input from the user in which you
// ask your user to give the position of that element he/she wants. Now remove that Item
// from your array and console the removed item, Also display the remaining items in the
// array and total number of items remaining.

var products= ["face wash","lotion", "sun screen","Conditioner" ]
console.log(products)
var position= parseint(prompt (" Enter Position of that elements"))
position.splice()
console.log(postion)
//......................................................................................................................................
// Task 7:
// Create a program that asks the user for their nationality, gender, and age using the prompt
// function. The program should then use nested if-else statements to determine if the
// person is eligible to vote.
// First, the program should check if the person is Pakistani or Indian. If they are not, the
// program should display a message saying they are not eligible to vote.
// If they are Pakistani or Indian, the program should then check their gender. If the person is
// male and over the age of 18, they are eligible to vote. If the person is female and over the
// age of 18, the program should ask if they are married. If they are married, they are eligible
// to vote. If they are not married, they are not eligible to vote.
// If the person is under 18, the program should display a message saying they are not eligible to vote

 var nationality= prompt("What is your nationality?")
 var gender= prompt("What is your gender?")
 var age = parseInt(prompt("What is your age?"))
 {
 if(nationality ==="Pakistani" ||  nationality ==="indian")

 { if (gender=== male && age>=18 ){
  console.log("Eligible for vote")
 }
 elseif (gender==female && age>=18 ) 

  var married=prompt("Are you married?")
  if(married=="yes"  )
  {
    console.log("eligible")
  }
  else
  {
    console.log("not eligible")
  }
 }

 else {
  console.log ("They are not eligible for vote")
 }
}
//......................................................................................................................................
// Task 8:
// You have an array of that contains the name of Pakistani Teams Player selected for
// WorldCup (15 Players) named as WorldCupSquad. Now tomorrow we have a match with
// India, So make an array of final team players (11 Players) that will be playing in tomorrows
// match from the WorldCupSquad array.
// (Hint : Make sure it should not disturb the array that contains 15 players instead you have
// to make a copy of this array

 var WorldCupSquad= ["palye1", "palye2","palye3","palye4","palye5","palye6","palye7","palye8","palye9","palye10","palye11","palye12","palye13","palye14","palye15"] 
 var finalteam= WorldCupSquad.slice(11)
 console.log("Final team players for tomorrow's match:");
console.log(finalteam)