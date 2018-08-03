
    // locateRoomDivs: function() {
    //     console.log("== locateRoomDivs ==");
    //     for (let i = 0; i < myCondo.rooms.length; i++) {
    //         let nextRoomData = myCondo.rooms[i];
    //         let nextRoomDiv = document.getElementById(nextRoomData.id);
    //         let nextRoomOffsetX = nextRoomData.X * 10;
    //         let nextRoomOffsetY = nextRoomData.Y * 10;
    //         condoUnit.style.left = nextRoomOffsetX + "px";
    //         condoUnit.style.top = nextRoomOffsetY + "px";
    //     };
    // },


    // makeRoomsMenu: function() {
    //     console.log("== makeRoomsMenu ==");
    //     let menuItems = document.getElementsByClassName("menuItem"); // execute right side of "=" first
    //     console.log("menuItems:", menuItems);        // classroom convention: print variable name:value
    //     for (let i = 0; i < menuItems.length; i++) {
    //         let nextMenuItem = menuItems[i];
    //         let nextRoomName = myCondo.rooms[i];
       //      nextMenuItem.innerHTML = nextRoomName;
    //         nextMenuItem.setAttribute("id", nextRoomName);
    //     };
    // },





        myCondo.activateMenuItems();                // call the activateMenuItems() method from initialize()

    insertSelectedRoom: function(e) {
        console.log("== insertSelectedRoom ==");
    },

    activateMenuItems: function() {
        console.log("== activateMenuItems ==");
        let menuItems = document.getElementsByClassName("menuItem");
        for (let i = 0; i < menuItems.length; i++) {
            menuItems[i].onclick = function(e) {
                console.log("this.id:", this.id);
            };
        };
   },
