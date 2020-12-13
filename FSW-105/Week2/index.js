if( 5 > 3 ) {
    console.log("is greater than");
}

//2
if( "cat".length === 3 ) {
    console.log("is the length");
}

//3
if( "cat" != "dog" ) {
    console.log("not the same");
}

var person = {
    name: "Bobby",
    age: 12
  }
  
  // if( person.age >= 18 ) {
  //     console.log( person.name + " is allowed to go to the movie");
  // } else {
  //     console.log( person.name + " is not allowed to go to the movie");
  // }
  
  console.log( person.name.charAt(0) );
  
  if( person.name.charAt(0) === "B" && person.age >=18 ) {
      console.log( person.name + " is allowed to go to the movie");
  } else {
      console.log( person.name + " is allowed to go to the movie");
  }

      // TRUE && FALSE
if( 1 <= 2 && 2 === 4) {
    console.log("yes");
} else {
    console.log("no");
}

if( typeof "dog" === "string") {
    console.log("This is a String");
} else {
    console.log("This is not a String")
}

if( typeof true === "boolean") {
    console.log("This is a Boolean");
} else {
    console.log("This is not a Boolean")
}

let name = "Telmo";

if( typeof name !== "undefined") {
    console.log("This variable is defined");
} else {
    console.log("This variable is not defined")
} 

if( "s" > 12 ) {
    console.log("This is True");
} else {
    console.log("This is False")
}

10 % 2 === 0 ? console.log("The number is Even") : console.log("The number is Odd")