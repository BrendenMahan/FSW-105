function add(x,y) {
    return x + y;
}
var sum = add(300, 600);
console.log("Sum is: " + sum)
var largestNumber = function(num1, num2, num3) {
    var greatestNumber = 0;
    var numbersArray = [num1, num2, num3];
    for( var i = 0; i < numbersArray.length; i++) {
        if( numbersArray[i] > greatestNumber) {
            greatestNumber = numbersArray[i]
        }
    }
    console.log("My biggest number is " + greatestNumber);
};
largestNumber(6, 3, 9);
var oddEven = function(num) {
    if( num % 2 === 0) {
        console.log("Even");
    } else {
        console.log("Odd");
    }
}
oddEven(7);
var fibonacci_series = function (n) {
    if (n === 1)
        return [0, 1];
    else {
        var s = fibonacci_series (n-1);
        s.push(s[s.length - 1] + s[s.length - 2]);
        return s;
    }
}
console.log(fibonacci_series(8));