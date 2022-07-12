function nameQuestion() {
  console.log("Hello, what is your name?"); // it needed semicolon
}

nameQuestion()


// EX 2:
function addThreeNums(first, second, third) {
var sum = first + second + third
console.log(sum);
      }

addThreeNums(1, 2, 3); // Only number 1 + 2 + 3 are added so others will be deleted



// EX 3:
function makeFreshPesto(){ //function needed to be spelled out
  console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper");
  console.log("Pulse basil and pine nuts");
  console.log("Add garlic and cheeses");
  console.log("Slowly pour in oil");
  console.log("Season");    
} // the end bracket needs to be on its own line

makeFreshPesto();


//  EX 4:
function average(num1, num2){
var sum = num1 + num2;
    var avg = sum/2;

  console.log(`the average is: ${avg}.`);// needed a semicolon
  }
