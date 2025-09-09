let myNumber = process.argv.slice(2);

let newNumber = parseInt(myNumber);

if (!newNumber) {
  console.log("Not a number");
} else {
  console.log("My Number: " + newNumber);
}
