function printGreeting(){
  console.log("Hi!");
  console.log("How are you?");
}
printGreeting();


function myMovies(genres){
  console.log(`We should watch ${genres} movie tonight.`);
}
myMovies("Comedy");
myMovies("Romance");


function myJobs(first, second, third) {
  var job = first 
  var myPayroll = second - third
  console.log(`My jobs at ${job} sucks becuase my payroll is ${myPayroll} `);
}

myJobs(`Burgers`, 1000, 50);

// 4: Write a function that satifies the following interaction pattern:

checkStock(4, "Coffee");
// => "Coffee is stocked"

checkStock(3, "Tortillas");
// => "Tortillas - running LOW"

checkStock(0, "Cheese");
// => "Cheese - OUT of stock!"

checkStock(1, "Salsa");
// => "Salsa - running LOW"
