
// ======= ======= ======= INTRO ======= ======= =======
// ======= ======= ======= INTRO ======= ======= =======
// ======= ======= ======= INTRO ======= ======= =======

// == Luxury Condos!!!
//    lesson goals:
//    • basic object syntax/usage for SPA (single page application)
//    • document object model (DOM)
//    • programmatic DOM manipulation (js vs html/css)
//    • minimum viable product (MVP)
//    MVP goal: dynamically build condo floorplan via divs, styles, XYWH values
//
// // == programming concepts and tools
//     variables
//     data types
//     arrays
//     objects
//     properties
//     methods
//     loops
//     logic
//     query selectors
//     programmatic elements (e.g. divs)
//     programmatic element styles (css)
//     programmatic reading of form data
//     events (user/computer actions)
//
// // == syntax heads-up
//     special characters -- ()  []  {}  ","  ";"  ":"

// ======= ======= ======= CONSOLE ======= ======= =======
// ======= ======= ======= CONSOLE ======= ======= =======
// ======= ======= ======= CONSOLE ======= ======= =======

// // ======= set variables =======

// == number variables ==
// x = 2
// => 2
// x = "2"
// => "2"
// x = 2 + 2
// => 4
// y = x + 3
// => 7

// == string variables ==
// x = "2" + "2"
// => "22"
// x = "Jon"
// => "Jon"

// == semantic string variables ==
// • variable name:value
// • variable key:value
// name = "Jon";
// age = 24;
// occupation = "analyst";
// clientList = ["Apple", "Google", "Amazon"];

// == array variables ==
// • array indexes
// • square bracket notation
// clientList[2]
// => "Amazon"

// == object variables ==
// • curly brackets
// jon = {}
// jon.name = "Jon"
// jon. age = 24
// jon.occupation = "analyst"
// jon.clientList = ["Apple", "Google", "Amazon"]
// jon
// => {name: "Jon", age: 24, occupation: "analyst", clientList: Array(3)}
// 	age: 24
// 	clientList: Array(3)
// 		0: "Apple"
// 		1: "Google"
// 		2: "Amazon"
// 		length: 3
// 	name: "Jon"
// 	occupation: "analyst"


// ======= ======= ======= DOM ======= ======= =======
// ======= ======= ======= DOM ======= ======= =======
// ======= ======= ======= DOM ======= ======= =======

// // ======= get DOM node (title) =======
// mainTitle = document.getElementById("mainTitle")

// // ======= modify DOM node (title) =======
// mainTitle.style.color = "red"

// // ======= methods =======
// • built-in functions that enable behaviors
// • methods belong to their parent object
// 		- document.getElementById()
// 		- getElementById belongs to document

// // ======= manipulate DOM node (condoBox) =======
// condoBox = document.getElementById("condoBox")
// condoUnit = document.createElement("div")
// condoBox.appendChild(condoUnit)
// condoBox.children
// condoBox.children[1]
// condoBox.children[1].setAttribute("id", "condoUnit")
// condoBox.children[1].style.border = "2px solid purple"
// condoBox.children[1].style.width = "320px"
// condoBox.children[1].style.height = "180px"
// condoBox.children[1].style.margin = "100px auto"
// condoBox.children


// ======= ======= ======= OBJECTS ======= ======= =======
// ======= ======= ======= OBJECTS ======= ======= =======
// ======= ======= ======= OBJECTS ======= ======= =======

// == empty object
// myCondo = {}
// => {}
// myCondo = { name: "LuxuryLofts" }
// myCondo.name
// => "LuxuryLofts"


// ======= ======= ======= index.js ======= ======= =======
// ======= ======= ======= index.js ======= ======= =======
// ======= ======= ======= index.js ======= ======= =======
// • link index.js to index.html

// == index.html ==
// 	<body>
// 		...
// 		<script type="text/javascript" src="index.js"></script>
// 	</body>


// ======= ======= ======= PROPERTIES ======= ======= =======
// ======= ======= ======= PROPERTIES ======= ======= =======
// ======= ======= ======= PROPERTIES ======= ======= =======

// == single page app inside single object
// myCondo = {};               // automatically global scope (global variable)
// let myCondo = {};           // let keyword: scope depends on context (could be local variable)

// == properties (key:value pairs, horizontal/vertical syntax)
// • "stand-alone" variables (x = 2) vs "object property" variables (myCondo.address)
// let myCondo = { address: "1400 U St." };
// let myCondo = {
//     address: "1400 U St."
// };

// == accessing properties via dot notation (square bracket notation below)
// console.log("myCondo.address:", myCondo.address);   // print items inside () to console

// == multiple properties
// • variable types: numbers, string, arrays, other objects
// • syntax errors: equals vs colons, commas vs semi-colons

// let myCondo = {
//     floor: 2,                                               					// number
//     unit: "2-B",                                            					// string
//     address: "1400 U St.",                                  					// string
//     rooms: ["livingRoom", "diningRoom", "kitchen", "bedroom", "bathroom"] 	// array
// };
// console.log("myCondo:", myCondo);
// console.log("myCondo.unit:", myCondo.unit);
// console.log("myCondo.rooms:", myCondo.rooms);


// ======= ======= ======= METHODS ======= ======= =======
// ======= ======= ======= METHODS ======= ======= =======
// ======= ======= ======= METHODS ======= ======= =======


// == object methods (functions)
// • name (define) object methods just like name object properties (key:value)
// • call object methods via dot notation and parentheses
// let myCondo = {
//     address: "1400 U St.",
//     floor: "2",
//     unit: "2-B",
//     rooms: ["livingRoom", "diningRoom", "kitchen", "bedroom", "bathroom"],
//     initialize: function() {						// define initialize method
//         console.log("== initialize ==");			// classroom convention: print function name
//     }
// };
// myCondo.initialize();							// call (evoke) the initialize() method

// ======= loops =======
// • example:
// 	for (let i = 0; i < menuItems.length; i++) {
// 	    console.log("menuItems[i]:", menuItems[i]);
// 	};

// • for: keyword that kicks off the loop

// • structure of the loop (single line)
// 	for() {}		

// • structure of the loop (multi line)
// 	for() {
// 		code inside loop
//  	}

// • three components of loop defnition:
// 	- initialize the index variable (i)
// 		let i = 0;				// index (i) is a loop counter and array[index]

// 	- stop the loop (index value 1 less than length of array)
// 		i < array.length;		// "array" is generic placeholder for actual array variable

// 	- increment the index variable
// 		i++						// same as i = i + 1;

// 	- loop definition components together
// 		(let i = 0; i < array.length; i++)

// • code inside loop is executed once for each iteration of the loop
// 	- example: console.log("menuItems[i]:", menuItems[i]);


// ======= define the myCondo object =======
let myCondo = {
    address: "1400 U St.",
    floor: "2",
    unit: "2-B",
    rooms: ["livingRoom", "diningRoom", "kitchen", "bedroom", "bathroom"],
    initialize: function() {
        console.log("== initialize ==");
        // debugger									// pause code execution to check process
        myCondo.makeRoomsMenu();					// call the makeRoomsMenu() method from initialize()
        myCondo.makeCondoUnit();					// call the makeCondoUnit() method from initialize()
        myCondo.makeRoomDivs();						// call the makeRoomDivs() method from initialize()
    },
    makeRoomsMenu: function() {
        console.log("== makeRoomsMenu ==");
        let menuItems = document.getElementsByClassName("menuItem");	// execute right side of "=" first
        console.log("menuItems:", menuItems);		// classroom convention: print variable name:value
        for (let i = 0; i < menuItems.length; i++) {
	        console.log("menuItems[i]:", menuItems[i]);
	        menuItems[i].innerHTML = myCondo.rooms[i];
        };
    },

    // == students write this method independently
    makeCondoUnit: function() {
        console.log("== makeCondoUnit ==");
		let condoBox = document.getElementById("condoBox");
        console.log("condoBox:", condoBox);
		let condoUnit = document.createElement("div");
        console.log("condoUnit:", condoUnit);
		condoBox.appendChild(condoUnit);
		condoBox.children[1].setAttribute("id", "condoUnit");
		condoBox.children[1].style.border = "2px solid purple";
		condoBox.children[1].style.width = "320px";
		condoBox.children[1].style.height = "180px";
		condoBox.children[1].style.margin = "100px auto";
    },
    makeRoomDivs: function() {
        console.log("== makeRoomDivs ==");
		let condoUnit = document.getElementById("condoUnit");
        console.log("condoUnit:", condoUnit);
        for (let i = 0; i < myCondo.rooms.length; i++) {
	        console.log("myCondo.rooms[i]:", myCondo.rooms[i]);
			let nextRoomDiv = document.createElement("div")
			condoUnit.appendChild(nextRoomDiv)
			condoUnit.children[i].setAttribute("id", myCondo.rooms[i]);
			condoUnit.children[i].style.border = "1px solid red";
			condoUnit.children[i].style.width = "20px";
			condoUnit.children[i].style.height = "20px";
			condoUnit.children[i].style.margin = "0";
        };
   }
}
myCondo.initialize();
// myCondo.makeRoomsMenu();							// call (evoke) the makeRoomsMenu() method


// ======= ======= ======= DEFAULT PROPERTIES ======= ======= =======
// ======= ======= ======= DEFAULT PROPERTIES ======= ======= =======
// ======= ======= ======= DEFAULT PROPERTIES ======= ======= =======


// // == default property concepts
// //    defines structure for data
// //    analogous to seeding a database
// //    arrays vs objects (index vs dot notation vs square bracket notation)
// //
// // ======= condo properties =======
// //    id: (e.g. "livingRoom") used for references, element id values
// //    name: (e.g. "Living Room") allows user-friendly display
// //    XYWH: coordinate access to location and size (Xcoordinate, Ycoordinate, width, height)
// //    units: feet (must be converted to pixels for display)

// ======= default objects =======
// let rooms = {
//     livingRoom: { id:"livingRoom", name:"Living Room", X:0, Y:0, W:12, H:18 },
//     kitchen: { id:"kitchen", name:"Kitchen", X:12, Y:0, W:12, H:12 },
//     bathroom: { id:"bathroom", name:"Bathroom", X:12, Y:12, W:12, H:6 },
//     bedroom: { id:"bedroom", name:"Bedroom", X:24, Y:0, W:12, H:18 }
// }
// == console.dir: print the entire object to console
// console.dir(rooms);

// == dot notation
// console.log("rooms:", rooms);
// console.log("rooms.livingRoom:", rooms.livingRoom);
// console.log("...name:", rooms.livingRoom.name);
// console.log("...W:", rooms.livingRoom.W);

// == square bracket notation (specifying via variable)
// console.log("rooms['livingRoom']:", rooms['livingRoom']);
// let selectedRoom = "bathroom";
// console.log("rooms[selectedRoom]:", rooms[selectedRoom]);


                    // BREAK BREAK BREAK BREAK BREAK BREAK BREAK


// ======= ======= ======= FUNCTIONS ======= ======= =======
// ======= ======= ======= FUNCTIONS ======= ======= =======
// ======= ======= ======= FUNCTIONS ======= ======= =======


// ======= object method =======
// let myCondo = {
//     initialize: function(value) {
//         console.log("== initialize ==");
//         console.log("value: ", value);
//     }
// }
// let myVariable = "objectMethod";
// myCondo.initialize(myVariable);
// console.log("myVariable: ", myVariable);
// console.log("value: ", value);

// ======= printThisValue =======               // class convention: comment function start
// function printThisValue(nextVar) {
//     console.log("== printThisValue ==");     // class convention: log function name
//     console.log("nextVar:", nextVar);        // class convention: label/print arguments and variables
// }
//
// let myVariable = "Joe";
// printThisValue(myVariable);


// ======= ======= ======= LOOPS ======= ======= =======
// ======= ======= ======= LOOPS ======= ======= =======
// ======= ======= ======= LOOPS ======= ======= =======


// // ======= for loop =======
// function forLoopFunction(array) {
//     console.log("== forLoopFunction ==");
//
//     for (let index = 0; index < array.length; index++) {
//         console.log("array[index]:", array[index]);
//     }
// }
//
// let loopArray = ["Joe", "Jon", "Jim", "Jill", "Jane"];
// forLoopFunction(loopArray);

// ======= each =======
// function eachLoopFunction(object) {
//     console.log("== eachLoopFunction ==");
//
//     // ======= jquery =======
//     $.each(object, function(key, value) {
//         console.log("key:", key, " value:", value);
//     });
//
//     // ======= javascript =======
//     for (let key in object) {
//         if (object.hasOwnProperty(key)) {               // excludes "built-in" properties
//             console.log("key/value:", key, object[key]);
//         }
//     }
// }
//
// let loopObject = { name:"Tom", email:"teb@gmail.com", cat:"Sebastian" };
// eachLoopFunction(loopObject);

// // ======= while loop =======
// function whileLoopFunction(loopLimit) {
//     console.log("== whileLoopFunction ==");
//     console.log("loopLimit: ", loopLimit);
//     let x = 0;
//     let counter = 0;
//     while (x < loopLimit) {
//         counter++;
//         x = x + 2;
//         console.log("counter/x: ", counter, x);
//     }
//     return x;
// }
// let loopX = whileLoopFunction(10);
// console.log("loopX: ", loopX);























// =======  =======
