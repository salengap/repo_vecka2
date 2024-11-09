/**
 * Loops
 * 
 */

/*
let sum = 0;
let points = [1, 5, -50, 10, 20, 8, 3];
for(let i = 0; i < points.length; i++ ) { //första - sätter räknaren på 0, andra visar hur länge att vi ska räkna, sista är att det ökar med 1, så att loopen kommer att fungera
console.log(`At index ${i}, number is: `, points[i]);

    // Ignore negative numbersm and continue the loop at the next iteration
    if (points[i] <= 0){
       console.log("Got some negativity");
        continue;
    }

    //Add number to sum
    sum += points[i];
    console.log("The new sum is:", sum)

    // If sum i 30 or higher we've passed the test
    if (sum >= 30) {
        console.log("You've passed the test!");
        break;
    }
} 


console.log("Loop is done, sum is: ", sum);
*/

//LOKALT OCH GLOBALT
/*

let i; /* detta är bara att man behöver räkna hur många 
gånger en loop kör utanför loopen, i detta fall sista
console log - men det är dumt att skriva globala såhär för att det kan störa 
andra loopar
*/
/*
for( // foreloopen är ett eget scope
    i = 0; // startvärde 
    i < 5; // ska vi fortsätta loopa?
    i++ // gör detta efter varje iteration
){
    //do stuff
    console.log(i, "🐑")
}

console. log("Sheep", i);
*/

//WHILE LOOP
/* kan vara bra att använda när man inte har ett 
förutbestämt antal gånger man behöver loopa
*/

/*
let i = 0; //startvärde utanför loop
while (i < 5) { //hur mågna gånger vi fortsätter loopa
    //do this
    console.log("in while-loop, i is:", i);

    //bryt när vi kommit till 3
    if(i >= 3){
        break;
    }

    //increase i by 1
    i++;
}

console.log("Finished looping, i is:", i);
*/

/*DO WHILE LOOP är som att gå över gatan och sen kolla, 
till skillnad från while-loop, som både kollar och går, 
do while-loop går minst en gång, medan while-loop kollar 
igenom alla kommandon direkt, så den går så många gånger den ska*/
/*
let i = 0;
do{
    //do stuff
    console.log("In do while-loop, i is:", i);

    //increase i by 1
    i++;
} while (i < 0);
console.log("Finished looping, i is:", 1);

*/

//SWITCH STATEMENTS
/*
let grade = "VG";
if(grade === "VG") {
    console.log("Nice! VG!");
} else if(grade === "G"){
    console.log("Good! G!");
} else if(grade === "IG"){
    console.log("NAJ! IG!");
} else {
    console.log("No cheating!");
}
*/

//Omständigt, använd istället switch
/* Man kan inte använda måsvingar i switch, 
därför måste man lägga till break efter varje påstående
Smalt användningsområde, kan bara kolla på en variabel åt
gången, till skillnad från tex en if-sats där man kan kolla
många olika variabler
Man kan också bara kolla ett exakt värde, mathematic 
operators funkar inte här tex "mer än" eller "lika med"
Man skulle kunna använda det som en väldigt enkel miniräknare
*/

/*

let grade = "IG";
switch (grade) {
case "VG":
    console.log("Nice! VG!");
    break;
case "g":
    console.log("Good! G!");
    break;
case "IG":
    console.log("NAJ! IG!");
    break;
default: // default är också viktigt om man skriver in något annat som inte matchar statementsen
    console.log("No cheating!"); 
}

console.log("I'm so over loops!");

*/

//STRICT-MODE

//Man skriver allra överst i en fil
"use strict";

/*en instruktion att vi ska använda strict mode, 
den förbjuder vissa saker och ändrar vissa tillvägagångssätt
den ger också felmeddelande
*/

//msg = "Hello from the otter side"; // att skriva en variabel utan let, utan att ha strict mode kan leda till väldigt svåra buggar
//console.log(msg);
/*

let msg = "Hello from the otter side"; 
console.log(msg);

*/

//NaN = "LOL"; //här kommer den tex ge fel, när man försöker ändra ett grundläggande begrepp

/* Andra reserverade nyckelord går inte heller att ändra
när man använder strict mode, tex "let" "for" osv */

//SCOPE

// console.log("points before if-statement:", points); //får felmeddelande att jag försöker komma åt värdet av den innan den har blivit skapad

// console.log("points before if-statement:", score); // blir undefined - för detta finns inte alls

// båda de övre är så allvarliga fel att de bryter kodläsningen

/*

let points = 50; //globally scoped variable
console.log("points before if-statement:", points);

if(true){
    let points = 40; //block-scoped - ligger i ett kodblock, man kan titta ut ur lådan, men inte in i lådan, som en envägsspegel

    console.log("points inside first if-statement:", points); //kopplas till det värdet som är blocked scope

    if(true) {
        points = 1337;
        console.log("points inside second if-statement:", points);
    }

    console.log("points inside first if-statement, but after second if-statement:", points);
}


console.log("points outside if-statement:", points); // kopplas till det globala

*/

//VAR använd aldrig!! De blir upplyfta och blir alltid globala
/*
console.log("points before if-statement:", points);

points = 50; 
console.log("points before if-statement:", points);

if(true){
    var points = 40; // var gör att det kvittar om det står i ett kodblock, den är global ändå
}

var points; // //förut fanns det bara "var" - som alltid vad konstant, inte bra! den skapar upp denna, så koden läser värdet i början även om det inte ligegr där
console.log("points outside if-statement:", points); // kopplas till det globala

*/

//regular function
/*const greet = function(){
    return 'hello, world';
};*/

//arrow function
// const greet = () => 'hello, world';

// const result = greet();
// console.log(result);

//Regular function
// const bill = function(products, tax) {
//     let total = 0;
//     for(let i = 0; i < products.length; i++){
//         total += products[i] + products[i] + tax;
//     }
//     return total;
// }

// //Arrow function, kan inte korta mer än så här eftersom det är mer logik i kodblocket
// const bill = (products, tax) => {
//     let total = 0;
//     for(let i = 0; i < products.length; i++){
//         total += products[i] + products[i] + tax;
//     }
//     return total;
// };

// console.log(bill([10,15,30], 0.2));
// /* först priser på produkter, sedan skatt
// loggar värdena direkt i konsolen istället för att
// lagra dem i en variabel, samma sak, bara kortare*/

// const myFunc = (callbackFunc) => { //parametern kan man döpa till vad som 
//     // 1. när man åberopar myFunc måste vi ha en funktion som parameter/argument 
//     //do something
//     let value = 50;
//     callbackFunc(value); // 3. när vi kallar på callbackFunc här så läser den av värdet som är definierat lokalt i funktionen
//     };
    
//     myFunc(function(value){ //2. kallar på myFunc här och lägger in en funktion som ett argument (en regular function som använder value som keyword
//     //4. värdet är passed back till den här callback functionen och vi kan logga ut värdet 
//     //do something 
//     console.log(value); //5. här loggar vi ut värdet
//     });
    
//     //let people = [’mario’, ’luigi’, ’rya’, ’shaun’, ’chun-li’];

// const ul = document.querySelector('.people'); //göra en referens till ett element på html-sidan - det vi vill ha är ”ul”, . people, kallar på classen i html

// const people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

// //använda forEach för att iterera genom listan och sedan en callback function för att generera en html-template som kommer ge output i ul-taggen i html

// let html = ``; //låt html vara en tom sträng (backticks)

// people.forEach(person => {
// // create html template för each person
// html += `<li style= ”color: purple”>${person}</li>`; //concaternate a bit of a template string, som vi lägger på html-en
// });

// console.log(html);
// ul.innerHTML = html; //tar vårt html-värde och lägger i ul-taggen


// const points = 100;			// låt poäng vara samma som 100
// points = 50; // kan inte ändras
// consol.log(points);

// let points = 50;						// variabel definierad 1a gången
// console.log("points before if-statement:", points); 	// får text + 50

// points = 50; 						// omdefinierad variabel 
// console.log("points before if-statement:", points);	// får text + 50

// if(true){
// var points = 40; 		// var gör att det kvittar om det står i ett kodblock, den 
// }				//är global ändå

// TRUTHY/FALSY VALUES + LOGICAL NOT

//FALSY VALUES IN JAVASCRIPT

// let message = " ";

// if(message) {
//     console.log("Message is truthy");
// } else {
//     console.log("Message is falsy");
// }

/* Allt annat utom noll är truthy, bara ett fåtal saker i javascript 
utvärderas till falsy, tex 0, "", null, undefined, NaN*/

// let username = "false"; //string - blir false
// if (!username) {
//     username = "anonymous haxx0r";
// }

// console.log(`Welcome ${username}!`)

// let username = false; // blir en boolean som är omvänd med !, blir användarnamnet anonymous haxx0r
// if (!username) { // Logical Not - ! är att vända på 
//     username = "anonymous haxx0r";
// }

// Annars hade vi behövt skriva såhär:

// let username = false; // blir en boolean som är omvänd med !, blir användarnamnet anonymous haxx0r
// if (username) {
//                 // kodgranskaren kommer inte gilla att vi har ett tomt kodblock
// } else { // Logical Not - ! är att vända på 
//     username = "anonymous haxx0r";
// }

// let message = "abc"; 
// if (message == true) { //kommer inte funka för att 
//                 // kodgranskaren kommer inte gilla att vi har ett tomt kodblock
// } else { 
//     message = "anonymous haxx0r";
// }

// console.log(`Welcome ${message}!`)

//TERNARY OPERATOR

// let username = "pelle";
// if (username){
//     let msg = "You have a name, wow!"; // kommer inte synas, det är en lokal variabel
// } else {
//     let msg = "Y U Has no name!!!";
// }

// Gör om:

// let username = "pelle";
// let msg; //måste definiera msg utanför så att den blir global, annars kan du inte kalla på den i console-loggen
// if (username){
//     msg = "You have a name, wow!"; 
// } else {
//     msg = "Y U Has no name!!!";
// }

//gör till en ternary operator

// let username = "pelle";
// let msg = (username)
//     ? `You have a name, is is ${username}!` // if - om den är sann
//     : "Y U Has no name!!!"; // else - om den är falsk

//     console.log(msg)

//FUNCTIONS

/* Är kodblock (baserat på någonting, en eller flera variabler) som vi kan använda
när vi kör en funktion så kallas det att vi anropar/invoke den */

//alert("hej!"); //anropar en redan gjord funktion

//Funktions deklaration

/*Den har samma problem som "var" man kan kalla på den innan 
den är deklarerad vilket bjuder in till dålig kodhygien
blir hoisted
*/

// alert("hello form regular scope");
// console.log("hello form regular scope"); //måste upprepas i kod för att upprepas flera gånger

//Göra en funktion istället
// function sayHello() {
//     alert("hello form a function");
//     console.log("hello form a function");
// }

// sayHello(); // måste kalla på den
// sayHello(); // men för att upprepa koden behöver man bara kalla på dentvå gånger

// function greetUser(username, time = "day"){ /*username är ettargument/en parameter, den är en lokal variabel, kan ha flera
//                                             "day" är ett defaultvärde, men kan kan inte blanda default och icks-default, 
//                                             utan de med dafaultvärden måste komma efter de som krävs*/ 
//     console.log(`Good ${time}, ${username}`);
// }

// greetUser("FED24M", "morning"); // namnet är ett argument/parameter, sparas i parameten username
//                               // första kopplas till första parametern, andra kopplas till andra      
// greetUser("Johan!"); //här får man defaultvärdet för day = Good day, Johan!
// greetUser(); // Good day, undefined!

//FUNCTION EXPRESSION

/* Att föredra! Blir en konstant och går inte att kalla på den
innan den är deklarerad. Bra kodhygien blir inte hoisted
*/ 

// const greetUser = function (username, time = "day"){ 
//     console.log(`Good ${time}, ${username}`);
// }

// greetUser("FED24M", "morning");

// let myName = "johan";

// const sayHi = function(username) { //en anonym funktion
//     username = username.toUpperCase();
//     console.log(`Hi ${username}`);
// }

// sayHi(myName); //stora bookstäver för att den kallar på funktionen

// console.log("username after invoking function:", myName);
// // blir små bokstäver för den har inte någon koppling till funktionen

//RETURNING VALUES

// const calcBoxCircumference = function(width, height) { //för att kunna säkna ut en omkrets behöver den bredd och höjd
//     const circumference = width * 2 + height * 2;
//     console.log("Circumference is:", circumference);
//     return circumference;
//     }

// const calcBoxCircumference = function(width, height) { //man kan förkorta det till detta
//     return width * 2 + height * 2;
//     }

// let sum1 = calcBoxCircumference(20, 40); 
// /* han kallar på funktionen, men lagrar kallningen i en variabel
// */

// console.log("sum1", sum1); //blir undefined om man inte lägger in ett return i funktionen

//ARROW FUNCTION (fat arrow function)

// const calcBoxArea = function(width, height) { // en function expression
//     return width * height;
// }

// const calcBoxArea = (width, height) => { // ta bort function och lägg till en pil efter parametrarna
//     return width * height;
// }

// let boxArea1 = calcBoxArea(20, 40);

// console.log("box area1:", boxArea1)

/**
//  * Workshop: Password Checker
//  *
//  * Skriv kod som kollar att lösenordet i variabeln password har
//  * - minst 6 tecken varav minst två specialtecken enligt nedan
//  * - minst 8 tecken varav minst ett specialtecken enligt nedan
//  * - eller har minst 12 tecken och minst 1 bindestreck
//  * - eller har minst 16 tecken
//  *
//  * Börja med att lösa den i omvänd ordning, dvs få först kollen att lösenordet
//  * har minst 16 tecken att fungera.
//  *
//  * Utöka därefter koden till att kolla om lösenordet har minst 12 tecken OCH
//  * minst 1 bindestreck.
//  *
//  * Osv.
//  *
//  * Googla för att hitta lämpliga metoder för att lösa uppgiften.
//  *
//  * Du ska alltså precis som i första dagens workshop ta bort kommentarerna
//  * en efter en och testa att alla olika kombinationer av lösenord fungerar
//  * och ger rätt resultat.
//  */

// let password;
// // password = "password"; // inte giltigt
// // password = "pa$sword"; // giltigt
// // password = "p@ssw%rd"; // giltigt
// password = "p$$wrd"; // giltigt
// // password = "secretpassword"; // inte giltigt
// // password = "secret-password"; // giltigt
// // password = "such-password-much-secure-very-long"; // giltigt

// const specialChars = [
// 	"@", "$", "%", "*", "^", "<", ">", "?", "!", "(", ")", "[", "]", "{", "}", "'"
// ];

// console.log(`🕵🏻 Checking password '${password}'`);

// //Vi gör en loop - först gör vi en global variabel.

// let specialCharCount = 0; // vi utgår från att det inte finns tills vi hittar den


// //för varje tecken i password, kolla om det är ett specialtecken, man räknar hur många true det blir?
// for (let i = 0; i < password.length; ++i){
// 	const char = password[i];
// 	console.log(`At char ${i}, is char "${char}" a special char?`, specialChars.includes(char)); //denna är för att se var den hittar specialtecken

// 	if(specialChars.includes(char)) {
// 		specialCharCount++; //Här har vi hittat det, ++ är 1
// 		if(specialCharCount === 2) { // därför måste man lägga till en ett nestlat if-statement som säger att om den är 2 så slutar vi
// 			break; // lägger man bara break här så stannar den när den har hittat en, men den ska hitta två minst
// 		} 
// 	}
// }
// /*
// for (let i = 0; i < specialChars.length; ++i){
// 	const specialChar = specialChars[i];
// 	console.log(`At index ${i} does password contain "${specialChars}"?`, password.includes(specialChar));

// 	if(password.includes(specialChar)) {
// 		specialCharCount++; //Här har vi hittat det, ++ är 1
// 	}
// }*/



// // Skriv din kod här
// /*
// if(password.length >= 16 ){ //Minst 16 tecken
// 	console.log ('This password is superduper long!')
// } else if(password.length >= 12 && password.includes("-")){ //Minst 12 tecken och minst 1 bindestreck - kolla på denna
// 	console.log ('This password is strong-long and includes "-"!')
// } else if(password.length >= 8 && specialChars.some(char => password.includes(char))){ //Minst 8 tecken varav minst ett specialtecken enligt nedan
// 	console.log ('This password is at least 8 characters long and includes at least one special character!') 
// } else if (password.length >= 6 && specialChars.some(char => password.includes(char >= 2))){ //Minst 6 tecken varav minst två specialtecken enligt nedan
// 	console.log ('This password is ok strong and includes two or more special character!') 
// 	} else {
// 		console.log("Try another password 😈");
// 	}
// */

// /*Alternativt sätt att lösa det är att vända på allt 
// för att det kan vara bra att ha de med specialtecknen 
// först som starkast*/

// /*Använder man indexOf på andra istället för 
// password.includes("-") och - ligger först så blir det 0
// och det är false i javascript och ger -1, då hade man fått
// lägga till >= 0 eller !== -1 */

// /* För att kolla specialtecknen så kan man också loopa över listan (array) */

// /*

// if(password.length >= 16 ){ //Minst 16 tecken
// 	console.log ('This password is superduper long!')
// } else if(password.length >= 12 && password.includes("-")){ //Minst 12 tecken och minst 1 bindestreck - kolla på denna
// 	console.log ('This password is strong-long and includes "-"!')
// } else if(password.length >= 8 && specialCharCount <= 1){ //Minst 8 tecken varav minst ett specialtecken enligt nedan
// 	console.log ('This password is at least 8 characters long and includes at least one special character!') 
// } else if (password.length >= 6 && specialCharCount >= 2){ //Minst 6 tecken varav minst två specialtecken enligt nedan
// 	console.log ('This password is ok strong and includes two or more special character!') 
// 	} else {
// 		console.log("Try another password 😈");
// 	}

// */

// // Vänder på det

// // if (password.length >= 6 && specialCharCount >= 2){ //Minst 6 tecken varav minst två specialtecken enligt nedan
// // 	console.log ('This password is ok strong and includes two or more special character!') 

// // } else if(password.length >= 8 && specialCharCount <= 1){ //Minst 8 tecken varav minst ett specialtecken enligt nedan
// // 	console.log ('This password is at least 8 characters long and includes at least one special character!') 

// // } else if(password.length >= 12 && password.includes("-")){ //Minst 12 tecken och minst 1 bindestreck - kolla på denna
// // 	console.log ('This password is strong-long and includes "-"!')

// // } else if(password.length >= 16 ){ //Minst 16 tecken
// // 	console.log ('This password is superduper long!')

// // }else {
// // 		console.log("Try another password 😈");
// // 	}

/**
 * Workshop: Password Checker with functions
 *
 * Skriv om lösenordskollen till att testa samtliga lösenord i listan
 * `passwords`.
 *
 * Ni ska även ha en funktion som räknar antalet specialtecken och returnerar
 * hur många som hittades.
 *
 * Varje lösenord ska console.log'as tillsammans med dess resultat.
 *
 * STEG 1
 * Testa samtliga lösenord i listan. Koden ska vara oberoende av hur många
 * lösenord som finns i listan.
 *
 * STEG 2
 * Skriv en funktion som räknar antalet unika specialtecken och returnerar
 * hur många specialtecken som hittades. Anropa den här funktionen för
 * varje lösenord.
 *
 * KRAVSPEC FRÅN TIDIGARE:
 * - minst 6 tecken varav minst två specialtecken enligt nedan
 * - minst 8 tecken varav minst ett specialtecken enligt nedan
 * - eller har minst 12 tecken och minst 1 bindestreck
 * - eller har minst 16 tecken
 *
 */

//HANS LÖSNING

// const passwords = [
// 	"password",								// 🚨
// 	"p@*swd",								// 🔐
// 	"pa$sword",								// 🔐
// 	"p@ssw%rd",								// 🔐
// 	"pa$$wd",								// 🚨
// 	"secretpassword",						// 🚨
// 	"secret-password",						// 🔐
// 	"such-password-much-secure-very-long",	// 🔐
// 	"$$$",									// 🚨
// ];

// const specialChars = [
// 	"@", "$", "%", "*", "^", "<", ">", "?", "!", "(", ")", "[", "]", "{", "}", "'"
// ];

// //counts the number of special chars and returns it
// /* han vill sätta upp en räknare och loopa över den*/
// const countSpecialChars = function(pwd){ //pwd är en vanlig förkortning för password, här börjar en funktiob 
    
//     // Räknare som indikerar om ett specialtecken som hittats
//     let specialCharCount = 0;

//     // För varje tecken i password, kolla det är ett specialtecken
//     for (let i = 0; i < pwd.length; i++) {
//         const char = pwd[i];
//         //console.log(`At char ${i}, is char "${char}" a special char?`, specialChars.includes(char));

//         if (specialChars.includes(char)) {
//             specialCharCount++;
//             if (specialCharCount === 2) {  // If we found two special chars, break free from the loop
//                 break;  // i want to
//             }
//         }
//     }
//     return specialCharCount;
// }

// for (let i = 0; i < passwords.length; i++) {
//     //console.log("i:", i);//visar hur många det blir
    
//     //console.log(`i: ${i}, password: ${passwords[i]}`); //när i är (nummer på saken i listan) så är lösenordet: (namn)

//     //få lösenordet från index [i] från listan "passwords"
//     //och spara det till den lokala variabeln password
//     const password = passwords[i];

//     console.log(`🕵🏻 Checking password '${password}'`);

//     //Call function to count the number of special chars
//     let specialCharCount = countSpecialChars(password);

    
//     console.log("Loop is done, special chars found:", specialCharCount);

//     // Har lösenordet minst 6 tecken OCH innehåller minst två specialtecken?
//     if (password.length >= 6 && specialCharCount >= 2) {
//         // Ja!
//         console.log("- ✅ Great! Such password, much secure, *VERY* hard to crack!");

//     // Har lösenordet minst 8 tecken OCH innehåller minst ett specialtecken?
//     } else if (password.length >= 8 && specialCharCount >= 1) {
//         // Ja!
//         console.log("- ✅ Great! Such password, much secure, very hard to crack!");

//     // Har lösenordet minst 12 tecken OCH innehåller minst ett bindestreck?
//     } else if (password.length >= 12 && password.includes("-")) {
//         // Ja!
//         console.log("- ✅ Great! That's a pretty good password!");

//     // Har lösenordet minst 16 tecken?
//     } else if (password.length >= 16) {
//         // Ja!
//         console.log("- ✅ Great! That's a long password!");

//     } else {
//         // Nej!
//         console.log("- 🚨 Insecure password, my grandma can crack it!");
//     }

// }

//MITT DÅLIGA FÖRSÖK

// console.log(`checking password '${password}'`)

// let specialCharCount = 0;

// for (let i = 0; i < passwords.length; i++) {
//     const currentPassword = password[i];

//     for(let j = 0; j < currentPassword.length; j++) {
//     const char = currentPassword[j];
//     console.log(`At char ${j}, is char ${char} a special char?`, specialChars.includes(char));

//         if (specialChars.includes(char)){
//             specialCharCount++;
//             if (specialCharCount === 2){
//                 break;
//             }
//         }
//         if (specialCharCount === 2){
//             break;
//         }
//     }
// }

// console.log("Loop is done, special char is found:", specialCharCount);

// const specialCharCount2 = function(specialCharCount) {
//     return specialCharCount
// };

// const sum1 = specialCharCount2(specialCharCount);


// if(passwords.length >= 6 && specialCharCount >= 2) {
//     console.log("a password with 6 characters and two special ones");
//     specialCharCount2(specialCharCount);

// }else if(passwords.length >= 8 && specialCharCount >= 1) {
//     console.log("a password with 8 characters and a special one");
//     specialCharCount2(specialCharCount);

// }else if(passwords.length >= 12 && passwords.includes("-")) {
//     console.log("a password with 12 characters and one -");
//     specialCharCount2(specialCharCount);

// }else if(passwords.length >= 16) {
//     console.log(`${passwords} is a log password`);
//     specialCharCount2(specialCharCount);
    
// } else {
//     console.log("Try another password")
//     specialCharCount2(specialCharCount);
// }
	

// console.log("this is the sum om special characters: ", sum1);

//HÄR SLUTAR MITT DÅLIGA FÖRSÖK

//MATH INBYGGDA FUNKTIONER

//Om jag vill avrunda ett tal

// //flyt-tal
// Math.round(13.37); // round avrundar ett flytande tal neråt, över ".5" så blir det alltid uppåt
// Math.floor(13.5);// floor avrundar alltid ett flytande tal nedåt
// Math.ceil(13.3);// ceil avrundar alltid ett flytande tal uppåt
// //Math.random();// random ger olika tal mellan olika variabler, () tom ger tal mellan 0,0000-9,9999
// //Tar man Math.random() x 10; får man tal mellan 0,0000 - 9,9999

// // ger random numbers mellan 0,0001 och 9,999
// const floatBetweenZeroAndAlmostTen = Math.random() * 10;
// const integerBetweenZeroAndAlmostTen = Math.round(floatBetweenZeroAndAlmostTen);

//Only get number between 1-10
//const integerBetweenOneAndTen = Math.ceil(floatBetweenZeroAndAlmostTen);

//UPPGIFT
// TODO:
//  * getRandomNumber ska kunna generera ett tal mellan 1 - X,
//  * till exempel ska getRandomNumber(20) ge ett tal mellan 1-20,
//  * getRandomNumber(50) ska ge ett tal mellan 1-50 och
//  * getRandomNumber() ska ge ett tal mellan 1-10


// Generate a randome number between 1-10 
// const getRandomNumber = () => { // Ändra här för att fixa uppgiften
//     return Math.floor (Math.random() * 10) + 1; // Ändra här för att fixa uppgiften
// }

// let numbers = [];
// for (let i = 0; i < 50; i++) {
//     numbers.push(getRandomNumber());
// }

// console.log("Numbers:", numbers.join(", "));

// Generate a randome number between 1-20 
// Detta kan vi kopiera till vår uppgift på måndag
// const getRandomNumber = (max = 10) => { // ger den en parameter vilket för att man kan ge den ett värde när amn kallar på den
//     return Math.floor(Math.random() * max) + 1; // Man kan bara returnera en sak, istället för att skriva * 20 så kan man göra en parameter
// }

// let numbers = [];
// for (let i = 0; i < 50; i++) {
//     numbers.push(getRandomNumber(30)); //anropar funktionen, och ger den 20 som indata
// }

// console.log("Numbers:", numbers.join(", "));

// // Generate a randome number between 1-50 
// const getRandomNumber = () => { // Ändra här för att fixa uppgiften
//     return Math.floor (Math.random() * 50) + 1; // Ändra här för att fixa uppgiften
// }

// let numbers = [];
// for (let i = 0; i < 50; i++) {
//     numbers.push(getRandomNumber());
// }

// console.log("Numbers:", numbers.join(", "));

//Scare the nice user, gör en prompt och sedan en alert
// let username = prompt("Please enter your name","Default i rutan");

// if (!username) {      
// username = "boring person";
// }

// alert(`Boo ${username}`);

//Vecka 3

// let names = ["Kalle", "Kajsa", "Joakim", "Knatte", "Fnatte"];
// names.push("Tjatte"); //kallar på metoden push för att lägga till namn i arrayn

// console.log(names);


//ringa till vårdcentralen

// const finallyTalkToAReceptionist = () => {
//     alert("I LOVE JAVASCRIPT!");
// }

// const callClinic = (callback) => { //callback ger kliniken möjlighet att bestämma?

//     for (let i = 0; i < 100000000; i++) {
//         console.log("beep");
//     }
//     callback(); //denna innehåller finallyTalkToAReceptionist-värdet, och kommer efter koden så att när vi har hört beep en mijlon gånger så kommer alerten
// }

// callClinic(finallyTalkToAReceptionist); //skickar in funktionen men kallar inte på den, för det är upp till kliniken att bestämma sig för att ringa tillbaka

// let students = ["Johan", "Pelle", "Börje", "Kajan", "Tiffany"];

// // for (let i = 0; i < students.length; i++) {
// //     const student = students[i];
// //     console.log(`Name of student ${i} is ${student}`);
// // }

// // console.log("thats all");

// students.push("Itzak");

// students.forEach((student) => { //detta är en callback, kan också lägga funktionen i callbacken i en separat variabel - det är bra om man vill använda funktionen flera gånger
// console.log("Student: ", student)
// })

// const fluffles = [
//     "Mr Fluffles",      // 0 name
//     3,                  // 1 age
//     "Bengt",            // 2 owner
//     "Annoy people",     // 3 hobbies
//     "Cat"               // 4 species
// ];

// const captainCat = [
//     "Captain Cat",      // 0 name
//     "Cat",              // 1 species
//     "9",                // 2 age
//     "Agda",             // 3 owner
//     "HIIT"              // 4 hobbies
// ]

// const showPetInfo = (pet) => {
// console.log(`${pet[0]} is a ${pet[4]} of ${pet[1]} years old, his owners name is ${pet[2]} and his hobbies is ta ${pet[3]}`);
// }

// showPetInfo(fluffles);

// /* Arrayer är index-based, alltså beroende av ordningen på listan, den andra kommer inte bli lika bra i console.log:en */

//Hans lösning på uppgiften, kolla på repot

// // Generate a random number between 1 and `max` (default 10)
// const getRandomNumber = (max = 10) => {
// 	return Math.floor( Math.random() * max ) + 1;
// }


// let attempts = 0;
// let continueGame = true;
// let exitGame = false;
// let numberToGuess = getRandomNumber();


// // while (true) {

// // 	if(!exitgame) {
// // 	continue;
// // 	}

// 		while (continueGame) {

// 			let guess = Number(prompt("Guess for a number between 1-10, or write 0 to end the game","Write your guess here"));

// 			//Attempts ökar varje gång en loop görs
// 			// attempts++;	

// 			if (guess === numberToGuess) {
// 				alert(`Congratulations you guessed right! The number of attempts were ${attempts}.`); // Meddelande som visas om man har gissat rätt
//                 continueGame = false;
//                 attempts++;

//                 //get a new number to guess
//                 numberToGuess = getRandomNumber(); //när du har svarat rätt, ge den ett nytt nummer och 0 försök
//                 attempts = 0;

//             } else if ( guess === 0) {    
// 				alert("End of game");  // Meddelande som visas om spelet har avslutats
// 				exitGame++;
//                 attempts++;
// 				continueGame = false;
// 			} else if (guess > numberToGuess) {
// 				alert("Too high, try again"); // Meddelande som visas om man gissat för högt, men inte skrivit 0 och får gissa igen

// 			} else if (guess < numberToGuess) {
// 				alert("Too low, try again"); // Meddelande som visas om man gissat för lågt, men inte skrivit 0 och får gissa igen
// 			} else {
//                 alert("Not a number, try again")
//             }
// 		}

// let email = 'maria@gmail.com';
// let index = email.indexOf('@');

// console.log(index);

// let radius = 10; 		// radien på en cirkel är 10
// const pi = 3.14; 		// konstanten är samma som pi
// console.log(radius, pi);	// ser ut som nummer i konsolen

// const paras = document.querySelectorAll('p');

// paras.forEach(paras => {
// console.log(paras.innerText);
// if (paras.innerText.includes('error')){
// paras.setAttribute('class', 'error');
// } else if (paras.innerText.includes('success')){
// paras.setAttribute('class', 'success');
// }
// })

// let result = String(50);

// console.log(result, typeof result); 

// let result = Boolean(100);
// console.log(result, typeof result);


//Primitiva datatyper



// let name1 = "Johan";
// let name2 = name1;

// name1 = "Pelle"; // detta ändrar inte det andra värdet name2, eftersom när name2 körs så innehåller den Johan, sedan ändras name1 till pelle

// console.log("name1:", name1);
// console.log("name2:", name2);

// //referensdatatyper (arrayer och objects) kopieras inte via värde utan via referens

// const barksby = {
//     name: "Mr barksby",
// }

// const littleBarksby = barksby; // en referens till samma object så littleBarksby === barksby är true 

// //ändra namn på littleBarksby

// littleBarksby.name = "Barksby Jr";

// console.log("Barksby name:", barksby.name);
// console.log("littleBarksby name:", littleBarksby.name);

/* Båda ändras till Barskby Jr eftersom referensen är samma, det är
bara pekaren (som pekar på referensen i the heap) som kopieras till 
the stack, inte själva värdet */

//Arrays are also copied by reference

// const names = ["Johan", "Pelle"];
// const friends = ["Johan", "Pelle"];

// console.log(names === friends) //false, de har olika innehåll och namn

// //Om man istället gör så här:
// const names = ["Johan", "Pelle"];
// const friends = names;


// friends.push("Agda");
// console.log("names:", names);
// console.log("friends:", friends);
// console.log("Is names and friends the same?", names === friends) //true, nu är de samma för att friends har en referens till names värde

//Primitive Data Types are passed by values ("skickas in baserat på sitt värde")

// const happyBirthday = (name, age) => {
// age = age +1;
// console.log(`Happy Birthday ${name}! You are now ${age} years old.`);
// }

// let pelle_name = "Pelle";
// let pelle_age = 2;

// happyBirthday(pelle_name, pelle_age); //här är pelle 3

// console.log(" Pelles age outside of function: ", pelle_age); //Strängar och tal är primitiva datatyper, därför sparas värdet som variabler inte referenser

// //Reference data types (like objects and arrays) are passed by reference
// const moewJr = {
//     name: "Meow Jr",
//     age: 1,
// }


// const happyPetBirthday = (pet) => {
//     pet.age = pet.age +1;
//     console.log(`Happy Birthday ${pet.name}! You are now ${pet.age} years old.`);
// }

// console.log("Meow Jr age outside of function: ", moewJr.age);
// happyPetBirthday(moewJr);
// console.log("Meow Jr age after birthday: ", moewJr.age);

//const pets = [barskby, meowJr];

// const students = [{name: "johan", level: "1337"}, {name: "Newbie", level: "-1"}];
// const newbie = students[1];

// newbie.level = 2;

// console.log(students);

// //Hämta olika element i DOM-hierarkin
// const firstLink = document.querySelector("#link-1"); //Sparar en pekare till elementet "#link-1"

// // Get the element's parent
// const firstLinkParent = firstLink.parentElement;

// // Get the parent's next sibling
// const firstLinkParentNextSibling = firstLinkParent.nextElementSibling;

// //Get the first paragraph on the page
// const firstParagraph = document.querySelector("p");

// //Se innehåll i paragrafen, aningen
// console.log(firstParagraph.innerHTML);

// //eller
// console.log(firstParagraph.innerText);

// //Get the first paragraph with error-class on the page
// let firstErrorParagraph = document.querySelector("p.error"); //Finns två element med klassen error så vi måste säga att det är den första paragrafen med class = error

// console.log(firstErrorParagraph.innerHTML); // får alla "strong"-taggar också

// console.log(firstErrorParagraph.innerText); //får bara text utan taggar

// //Change the content of an element
// firstParagraph.innerText = "Look mom my first paragraph!"; // Ändrar på websidan, men inte i html-koden eller i consolen
// firstParagraph.innerText += " Oh i forgot this!"; //lägger till text

// const msg = "Hello";
// //Hämta alert med klass
// const alertEl = document.querySelector(".alert"); //variabeln döps som "en referens till ett element"

// console.log("alertEl:", alertEl);
// console.log("alertEl innerHTML; ",alertEl.innerHTML); // Här ser man span-taggarna
// console.log("alertEl innerHTML; ",alertEl.innerText); //Här ser man inte texten som är i span-taggen i HTML-koden, bara det som visas i webbläsaren
// console.log("alertEl innerHTML; ",alertEl.textContent); // Visar allt textcontent utan taggarna

// //change content
// alertEl.innerText = "Such error, much danger, very fail";
// alertEl.innerText = "Such <strong>error</strong>, much danger, very fail"; //Fetstilar inte texten

// //say hi to the user
// const h2El = document.querySelector("h2#greetings");
// const username = prompt("What are my name?");
// console.log("hello", username);
// //h2El.innerHTML = "Hello", username; //BIG NO, NO! m någon är lite hacker och klistrar in lite html-kod så kan hela utseendet ändras
// h2El.innerText = "Hello", username; //Därför är detta bättre

// const linkListEl = document.querySelector("ul");
// console.log("linkListEl: ", linkListEl);
// console.log("linkListEl's children: ", linkListEl.children); //får ut en HTML.collection som inte har `.forEach()`
// // - method but we can access the children using square-bracket (index) notation

// //loopa över en HTMLCollection
// for(let i = 0; i < linkListEl.children.length; i++) {
//     console.log(`child ${i}`, linkListEl.children[i]);
// }

// //Om vi vill använda .forEach så måste vi först konvertera HTMLCollection till en riktig array
// const liEls = Array.from(linkListEl.children); //får tillbaka en array

//ELLER, så kan vi använda
//const linkListEl2 = document.querySelectorAll("div.error").forEach; //.querySelectorAll har .forEach, till skillnad från .querySelector 

//const linkListEl2 = document.querySelectorAll("ul > li"); //väljer alla li i ul

//GET and SET attributes
// const memeEl = document.querySelectorAll("li"); // samma sak här, men man får alla li-taggar i hela dokumentet
// const imgSrc = memeEl.getAttribute("src");
// memeEl.setAttribute("alt", "LOL"); //ändrar alt i en src-tag till LOL

// const btnPopupEl = document.querySelector("button");
// console.log("Such button text:", btnPopupEl.innerText);

// //eventListener, ett event sker när vi klickar på knappen, i parentesen (vilket event vill jag lyssna på? + att man lägger till ett event som är en array-function)
// btnPopupEl.addEventListener("click", () => {
//     console.log("Event listener is being called"); //Event-based code, det kommer inte synas förrän man har tryckt på knappen
//     alert("stop it, that ticles!!")
// });

// console.log("After adding event-listener")

const btnSayHiEl = document.querySelector("#btnSayHi");
const inputNameEl = document.querySelector("#inputName");
const username = document.querySelector("#inputName").value;

btnSayHiEl.addEventListener("click", () => {
    const username = inputNameEl.value;

    alert(`Hi ${username}`);
})

//inputNameEl.value = "Hej"; // sätter ett värde i inputrutan