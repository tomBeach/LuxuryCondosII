
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


// ======= define roomData object =======
// let roomData = [
//     { id:"livingRoom", name:"Living" },
//     { id:"diningRoom", name:"Dining" },
//     { id:"kitchen", name:"Kitchen" },
//     { id:"bedroom", name:"Bedroom" },
//     { id:"bathroom", name:"Bath" }
// ]

let roomData = [
    { id:"livingRoom", name:"Living", X:0, Y:0, W:12, H:18 },
    { id:"diningRoom", name:"Dining", X:12, Y:0, W:12, H:8 },
    { id:"kitchen", name:"Kitchen", X:12, Y:8, W:8, H:10 },
    { id:"bedroom", name:"Bedroom", X:20, Y:8, W:12, H:10 },
    { id:"bathroom", name:"Bath", X:24, Y:0, W:8, H:8 }
]



// ======= define myCondo object =======
let myCondo = {
    address: "1400 U St.",
    floor: "2",
    unit: "2-B",
    // rooms: ["livingRoom", "diningRoom", "kitchen", "bedroom", "bathroom"],
    rooms: roomData,
    initialize: function() {
        console.log("== initialize ==");
        // debugger									// pause code execution to check process
        myCondo.makeRoomsMenu();					// call the makeRoomsMenu() method from initialize()
        myCondo.makeCondoUnit();					// call the makeCondoUnit() method from initialize()
        myCondo.makeRoomDivs();						// call the makeRoomDivs() method from initialize()
        myCondo.labelRoomDivs();                    // call the labelRoomDivs() method from initialize()
        myCondo.sizeRoomDivs();                     // call the sizeRoomDivs() method from initialize()
        myCondo.locateRoomDivs();                   // call the locateRoomDivs() method from initialize()
        myCondo.activateMenuItems();                // call the activateMenuItems() method from initialize()
    },

    makeRoomsMenu: function() {
        console.log("== makeRoomsMenu ==");
        let menuItems = document.getElementsByClassName("menuItem");
        console.log("menuItems:", menuItems);
        for (let i = 0; i < menuItems.length; i++) {
            let nextMenuItem = menuItems[i];
            let nextRoomData = myCondo.rooms[i];
            let nextRoomId = nextRoomData.id;
            let nextRoomName = nextRoomData.name;
            nextMenuItem.innerHTML = nextRoomName;
            nextMenuItem.setAttribute("id", "menu_" + nextRoomId);
        };
    },

    makeCondoUnit: function() {
        console.log("== makeCondoUnit ==");
        let condoBox = document.getElementById("condoBox");
        let condoUnit = document.createElement("div");
        condoBox.appendChild(condoUnit);
        condoUnit.setAttribute("id", "condoUnit");
        condoUnit.style.border = "2px solid purple";
        condoUnit.style.width = "320px";
        condoUnit.style.height = "180px";
        condoUnit.style.margin = "100px auto";
    },

    makeRoomDivs: function() {
        console.log("== makeRoomDivs ==");
        let condoUnit = document.getElementById("condoUnit");
        for (let i = 0; i < myCondo.rooms.length; i++) {
            let nextRoomDiv = document.createElement("div")
            condoUnit.appendChild(nextRoomDiv)
            nextRoomDiv.setAttribute("id", myCondo.rooms[i].id);
            nextRoomDiv.style.position = "absolute";
            nextRoomDiv.style.border = "1px solid red";
            nextRoomDiv.style.width = "20px";
            nextRoomDiv.style.height = "20px";
            nextRoomDiv.style.margin = "0";
        };
    },

    labelRoomDivs: function() {
        console.log("== labelRoomDivs ==");
        for (let i = 0; i < myCondo.rooms.length; i++) {
            let nextRoomData = myCondo.rooms[i];
            let nextRoomDiv = document.getElementById(nextRoomData.id);
            nextRoomDiv.innerHTML = "<p>" + nextRoomData.name + "</p>";
            nextRoomDiv.style.padding = "10px";
        };
    },

    sizeRoomDivs: function() {
        console.log("== sizeRoomDivs ==");
        for (let i = 0; i < myCondo.rooms.length; i++) {
            let nextRoomData = myCondo.rooms[i];
            let nextRoomDiv = document.getElementById(nextRoomData.id);
            let nextRoomWidth = nextRoomData.W * 10;
            let nextRoomHeight = nextRoomData.H * 10;
            nextRoomDiv.style.width = nextRoomWidth + "px";
            nextRoomDiv.style.height = nextRoomHeight + "px";
        };
    },

    locateRoomDivs: function() {
        console.log("== locateRoomDivs ==");
        let condoUnit = document.getElementById("condoUnit");
        let condoUnitXYWH = condoUnit.getBoundingClientRect();
        console.log("condoUnitXYWH:", condoUnitXYWH);
        for (let i = 0; i < myCondo.rooms.length; i++) {
            let nextRoomData = myCondo.rooms[i];
            let nextRoomDiv = document.getElementById(nextRoomData.id);
            let nextRoomX = (nextRoomData.X * 10) + condoUnitXYWH.left;
            let nextRoomY = (nextRoomData.Y * 10) + condoUnitXYWH.top;
            nextRoomDiv.style.left = nextRoomX + "px";
            nextRoomDiv.style.top = nextRoomY + "px";
        };
    },

    selectTargetRoom: function(targetRoom) {
        console.log("== selectTargetRoom ==");
        console.log("targetRoom:", targetRoom);
        myCondo.clearAllRooms();
        let targetRoomDiv = document.getElementById(targetRoom);
        console.log("targetRoomDiv:", targetRoomDiv);
        targetRoomDiv.style.background = "red";
        targetRoomDiv.style.border = "4px solid purple";
        targetRoomDiv.children[0].style.color = "white";
    },

    clearAllRooms: function() {
        console.log("== clearAllRooms ==");
        let condoRooms = document.getElementById("condoUnit").children;
        for (let i = 0; i < condoRooms.length; i++) {
            condoRooms[i].style.background = "";
            condoRooms[i].style.border = "1px solid red";
            condoRooms[i].children[0].style.color = "purple";
        };
    },

    activateMenuItems: function() {
        console.log("== activateMenuItems ==");
        let menuItems = document.getElementsByClassName("menuItem");
        for (let i = 0; i < menuItems.length; i++) {
            let nextMenuItem = menuItems[i];
            console.log("nextMenuItem:", nextMenuItem);
            nextMenuItem.addEventListener('click', function(e){
                console.log("e.target.id:", e.target.id);
                let targetRoom = e.target.id.split("_")[1];
                console.log("targetRoom:", targetRoom);
                myCondo.selectTargetRoom(targetRoom);
            })
        };
    }

}
myCondo.initialize();


// ======= ======= ======= DEFAULT PROPERTIES ======= ======= =======
// ======= ======= ======= DEFAULT PROPERTIES ======= ======= =======
// ======= ======= ======= DEFAULT PROPERTIES ======= ======= =======

// == rooms array ==
// rooms: ["livingRoom", "diningRoom", "kitchen", "bedroom", "bathroom"]

// == room object ==
// let livingRoom = { id:"livingRoom", name:"Living", W:12, H:18 }
// let diningRoom = { id:"diningRoom", name:"Dining", W:12, H:18 }
// let kitchen = { id:"kitchen", name:"Kitchen", W:12, H:18 }
// let bedroom = { id:"bedroom", name:"Bedroom", W:12, H:18 }
// let bathroom = { id:"bathroom", name:"Bath", W:12, H:18 }

// let roomData = {
//     livingRoom: { id:"livingRoom", name:"Living", W:12, H:18 },
//     diningRoom: { id:"diningRoom", name:"Dining", W:12, H:18 },
//     kitchen: { id:"kitchen", name:"Kitchen", W:12, H:18 },
//     bedroom: { id:"bedroom", name:"Bedroom", W:12, H:18 },
//     bathroom: { id:"bathroom", name:"Bath", W:12, H:18 }
// }

// let roomData = {
//     livingRoom: { id:"livingRoom", name:"Living" },
//     diningRoom: { id:"diningRoom", name:"Dining" },
//     kitchen: { id:"kitchen", name:"Kitchen" },
//     bedroom: { id:"bedroom", name:"Bedroom" },
//     bathroom: { id:"bathroom", name:"Bath" }
// }




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






















// =======  =======
