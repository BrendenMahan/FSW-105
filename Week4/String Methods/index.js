function capitalizedAndLowerCase(string) {
    var str = string.toUpperCase();
    var newStr = string.toLowerCase();
    console.log(newStr);
    console.log(str);
    console.log(str + newStr)
}
capitalizedAndLowerCase("HELLO")

function findMiddleIndex(text){
    var text = "Hello"; 
    var length = text.length;
    console.log(Math.floor(length / 2));
}
findMiddleIndex("Hello")

function findMiddleIndex1(text){
    var text = "Hello World"; 
    var length = text.length;
    console.log(Math.floor(length / 2));
}
findMiddleIndex1("Hello World")

function returnFirstHalf(text){
    var length = text.length
    console.log(text.slice(0, Math.floor(length / 2)));
}
returnFirstHalf("Hello")

function returnFirstHalf(text){
    var length = text.length
    console.log(text.slice(0, Math.floor(length / 2)));
}
returnFirstHalf("Hello World")

function capitalizAndLowerCase(text){
    if ( text.length % 2 !== 0 ){
        var upper = text.toUpperCase();
        var uppering = upper.slice(0,Math.floor(upper.length / 2));
        var lower = text.toLowerCase();
        var lowering = lower.slice(Math.floor(upper.length / 2));
        console.log(uppering + lowering);
    }
    else{
        var lower = text.toLowerCase();
        var lowering = lower.slice(0,Math.floor(lower.length / 2));
        var upper = text.toUpperCase();
        var uppering = upper.slice(Math.floor(lower.length / 2));
        console.log(lowering + uppering);
    }
}
capitalizAndLowerCase("Hello")

function capitalizAndLowerCase(text){
    if ( text.length % 2 !== 0 ){
        var upper = text.toUpperCase();
        var uppering = upper.slice(0,Math.floor(upper.length / 2));
        var lower = text.toLowerCase();
        var lowering = lower.slice(Math.floor(upper.length / 2));
        console.log(uppering + lowering);
    }
    else{
        var lower = text.toLowerCase();
        var lowering = lower.slice(0,Math.floor(lower.length / 2));
        var upper = text.toUpperCase();
        var uppering = upper.slice(Math.floor(lower.length / 2));
        console.log(lowering + uppering);
    }
}
capitalizAndLowerCase("Hello World")

function capitalize(str) {
    var arr = str.toLowerCase().split(" ");
    var result = arr.map(
        function (val) {
            return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
        });
    console.log(result.join(" "));
}
capitalize("hey friend! practice practice practice!");