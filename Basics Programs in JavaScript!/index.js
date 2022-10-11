//console.group("This is Console Programs.");
console.groupCollapsed("This is Console Programs.");
//console.time("My code took!");
console.log("Hello World!");
//console.log(20+3);
//console.log(true);
//console.log([12,3,4,4,5,5,67,7]);
//console.log({harsh: 'this', marks: 100});
//console.table({harsh: 'this', marks: 100});
//console.error("This is an error!!");
//console.warn("This is warning!");
//console.clear();
//console.timeEnd("My code took!");
//console.assert(1<2, "This is not possible.");//True condition is not showing output
//console.assert(1>2, "This is not possible.");//If False then it shows error.
console.groupEnd("This is Console Programs.");

//console.log("cafe" === "caf\u00e9" ? "True" : "False");
//console.log("cafe" === "caf\u00e9"); 
//console.log("\u00e9");
/*The behaviour of compiler is like below:
var a
a
=
3
console.log(a);
*/

/*
x
++
y
It is parsed as x; ++y;, not as x++; y.
*/

//Math Object:
//console.group("Math Object");
console.groupCollapsed("Math Object");
console.log(Math.pow(2, 53)); 
console.log(Math.round(.6));
console.log(Math.ceil(.6));
console.log(Math.floor(.6));
console.log(Math.abs(-5));
console.log(Math.max(1,2,3,4,5,5,66,0));
console.log(Math.min(2,3,4,5,6,789,9,044,4,2));
console.log(Math.random());
console.log(Math.PI);
console.log(Math.E);
console.log(Math.sqrt(2));
console.log(Math.pow(2,2));
console.log(Math.sin(0));
console.log(Math.log(10));
console.log(Math.log(100)/Math.LN10);
console.log(Math.log(512)/Math.LN2);
console.log(Math.exp(3));
console.groupEnd();

//Date and Times
var then = new Date(2010, 0, 1);
//console.log(then);
var later = new Date(2010, 0, 1, 17, 10, 30);
//console.log(later);

var now = new Date();
var elapsed = now -then;
console.log(now, elapsed);
/*
$1 = later.getFullYear();
$2 = later.getMonth();
$3 = later.getDate();
$4 = later.getDay();
$5 = later.getHours();
$6 = later.getUTCHours();
console.log($1);
console.log($2);
console.log($3);
console.log($4);
console.log($5);
console.log($6);
*/
/*
for(i=0;i<7;i++){
$1 = later.getFullYear();
$2 = later.getMonth();
$3 = later.getDate();
$4 = later.getDay();
$5 = later.getHours();
$6 = later.getUTCHours();

let log = (`$`+i);

console.log(parseFloat(log.value));
}
*/

/*
for(i=0;i<s.length;i++){
console.log(s.charAt(i));
}
*/


msg = "Hello, " + "world!";
//console.log(msg);

var s = "Hello, World!";
//s.charAt(0);
console.log(s.charAt(0));
console.log(s.charAt(s.lenght - 1));
console.log("Go to " + s.substring(0, 4));



























