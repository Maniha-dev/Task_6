let enter=prompt("Enter a 4 Digit number")
console.log("Your number is " + enter);

if (enter.length==4) {
    let num=(enter[3] +","+enter[2]+","+enter[1]+","+enter[0])
    alert(num)
    console.log(num)
} else {
    console.log("Oops! Invalid Digits");
    alert("Oops! Invalid Digits")
}