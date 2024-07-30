document.addEventListener("DOMContentLoaded", function() {
    const states = [
        { name: "New Jersey", abbreviation: "NJ" },
        { name: "New York", abbreviation: "NY" },
        { name: "Alabama", abbreviation: "AL" },
        { name: "Alaska", abbreviation: "AK" },
        { name: "Arizona", abbreviation: "AZ" },
        { name: "Arkansas", abbreviation: "AR" },
        { name: "California", abbreviation: "CA" },
        { name: "Colorado", abbreviation: "CO" },
        { name: "Connecticut", abbreviation: "CT" },
        { name: "Delaware", abbreviation: "DE" },
        { name: "Florida", abbreviation: "FL" },
        { name: "Georgia", abbreviation: "GA" },
        { name: "Hawaii", abbreviation: "HI" },
        { name: "Idaho", abbreviation: "ID" },
        { name: "Illinois", abbreviation: "IL" },
        { name: "Indiana", abbreviation: "IN" },
        { name: "Iowa", abbreviation: "IA" },
        { name: "Kansas", abbreviation: "KS" },
        { name: "Kentucky", abbreviation: "KY" },
        { name: "Louisiana", abbreviation: "LA" },
        { name: "Maine", abbreviation: "ME" },
        { name: "Maryland", abbreviation: "MD" },
        { name: "Massachusetts", abbreviation: "MA" },
        { name: "Michigan", abbreviation: "MI" },
        { name: "Minnesota", abbreviation: "MN" },
        { name: "Mississippi", abbreviation: "MS" },
        { name: "Missouri", abbreviation: "MO" },
        { name: "Montana", abbreviation: "MT" },
        { name: "Nebraska", abbreviation: "NE" },
        { name: "Nevada", abbreviation: "NV" },
        { name: "New Hampshire", abbreviation: "NH" },
        { name: "New Mexico", abbreviation: "NM" },
        { name: "North Carolina", abbreviation: "NC" },
        { name: "North Dakota", abbreviation: "ND" },
        { name: "Ohio", abbreviation: "OH" },
        { name: "Oklahoma", abbreviation: "OK" },
        { name: "Oregon", abbreviation: "OR" },
        { name: "Pennsylvania", abbreviation: "PA" },
        { name: "Rhode Island", abbreviation: "RI" },
        { name: "South Carolina", abbreviation: "SC" },
        { name: "South Dakota", abbreviation: "SD" },
        { name: "Tennessee", abbreviation: "TN" },
        { name: "Texas", abbreviation: "TX" },
        { name: "Utah", abbreviation: "UT" },
        { name: "Vermont", abbreviation: "VT" },
        { name: "Virginia", abbreviation: "VA" },
        { name: "Washington", abbreviation: "WA" },
        { name: "West Virginia", abbreviation: "WV" },
        { name: "Wisconsin", abbreviation: "WI" },
        { name: "Wyoming", abbreviation: "WY" }
      ];
    
    const selectElement = document.getElementById("locationsID");
  
    console.log("states added");
    states.forEach(function(state) {
      let option = document.createElement("option");
      option.text = state.name;
      option.value = state.abbreviation;
      selectElement.appendChild(option);
    });


    console.log("locations listener");
    // locations input box action listener 
    const loc = document.getElementById("locationsID");
    loc.addEventListener('mousedown', () =>{
        loc.style.color = "#e7cfbe"; 
        loc.style.border =  "2px solid #da854d";
    })
    loc.addEventListener('focusout', () =>{
        const chosen = loc.options[loc.selectedIndex].value;
        if(chosen === 'Location'){
            loc.style.border = "2px solid white";
            loc.style.color = "white";
        }
       
    })
    
    loc.addEventListener('change', () =>{
        const chosen = loc.options[loc.selectedIndex].value;
        console.log(chosen);
       
        if(chosen != 'Location'){
            loc.style.border = "2px solid #ddbeaa" ;
            loc.style.color = "#ddbeaa";
        }
        else{
            loc.style.border = "2px solid white";
            loc.style.color = "white";
        }
    })


    const dateBox = document.getElementById("dateID");
    //datebox actionlistener
    dateBox.addEventListener('mousedown', () =>{
        dateBox.style.color = "#e7cfbe";
        dateBox.style.border =  "2px solid #da854d";
    })
    
    dateBox.addEventListener('focusout', ()=>{
        const date = dateBox.value;
        if(!date){
            dateBox.style.border = "2px solid white";
            dateBox.style.color = "white";
        }
    })
       
    dateBox.addEventListener('input', ()=>{
        const date = dateBox.value;
        if(!date) {
            console.log(date);
            dateBox.style.border = "2px solid white";
            dateBox.style.color = "white"
            console.log("date is empty");
        }
        else{
            dateBox.style.border = "2px solid #ddbeaa" ;
            dateBox.style.color = "#ddbeaa";
        }
    })

    
    console.log("del Btn");
    addDelListener();
    })



    

    

/**
 * Converts string to "month" + "day (number)" format
 * @param dateString - string of date ie 07/02/2005
 * @returns string  
 */
function formatToMonthDay(dateString){
    var date = new Date(dateString);
    var months = ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'];
    var month_index = date.getMonth();
    var day = date.getDay();

    var formattedDay = months[month_index] + ' ' + day;
    return formattedDay;
}

/**
 * Adds item to table based on input fields 
 * @returns 
 */
function addItem(){
    // add to TABLEBODY not TABLE
    var table = document.getElementById("table");
    var tableBody = table.getElementsByTagName('tbody')[0];

    //get all inputs we need and create td's based on it 
    var companyName = document.getElementById("companyNameID").value;
    if(companyName.length == 0){
        return emptyEntryError(1);
    }
   
    var td_name = document.createElement("td");
    td_name.innerHTML = `
        <div class = "name-container">
            <button class = "delBtn" >x</button>
            <div class = "text">` + companyName + `</div>
        </div>
    `

    var position = document.getElementById("positionID").value;
    if(position.length == 0){
        return emptyEntryError(2);
    }
    var td_pos = document.createElement("td");
    td_pos.textContent = position;


    var location = document.getElementById("locationsID").value;
    if(location === "Location"){
        return emptyEntryError(3);
    }
    var td_loc = document.createElement("td");
    td_loc.textContent = location;

    var td_status = document.createElement("td");
    td_status.innerHTML =  `
        <select name="application-status" id="application-status">
           <option value="Location"> Location </option>
                <option value="Waiting"> Waiting </option>
                <option value="Interview"> Interview </option>
                <option value="Offer"> Offer </option>
                <option value="Rejected"> Rejected </option>
                <option value="Accepted"> Accepted</option>
                <option value="Ghosted"> Ghosted </option>
        </select>`;

    var date =document.getElementById("dateID").value;
    if(date === ""){
        return emptyEntryError(4);
    }
    date =  formatToMonthDay(date);
    var td_date = document.createElement("td");
    td_date.textContent = date;

    var td_notes = document.createElement("td");
    td_notes.contentEditable = true;
    td_notes.textContent = "Insert some NOTES";

    //creates table row which will hold td's 
    var tableRow= document.createElement("tr");
    tableRow.appendChild(td_name);
    tableRow.appendChild(td_pos);
    tableRow.appendChild(td_loc);
    tableRow.appendChild(td_status);
    tableRow.appendChild(td_date);
    tableRow.appendChild(td_notes);
   
    //append this new table row to the body
    tableBody.appendChild(tableRow);
    addDelListener();

    //clears field after adding except for date
    document.getElementById("companyNameID").value = "";
    document.getElementById("positionID").value = "";
    document.getElementById("locationsID").value = "Location";

    //resetting color locationsBox since it is dependent on user interaction to change color
    var locBox = document.getElementById("locationsID");
    locBox.style.border = "2px solid white";
    locBox.style.color = "white";
}

/**
 * Helper method for addDelListener
 * @param {Button} button - removes the row associated with button 
 */
function delItem(button){
    var audio = new Audio("assets/sounds/happy-pop-3-185288.mp3");
    var row = button.closest('tr');
    audio.play();
    row.remove();
}

/**
 * Helper method for addItem
 * -- Returns a popUp window depending on missing entry
 * @param {String} number 
 * @returns 
 */
function emptyEntryError(number){
    switch(number){
        case 1: // companyName box 
        console.log("No Company Name");
        return; 

        case 2: //Position input
        console.log("No Position");
        return; 

        case 3: //location input 
        console.log("No Location Selected");
        return; 

        case 4: //date input
        console.log("No Date Selected");
        return; 
    }
}

/**
 * Add actionListeners to DelButtons
 */
function addDelListener(){
    const button = document.querySelectorAll('.delBtn');
    const delTimeout = 500; 
    let delTimer; 
    

    button.forEach(button => {
        button.addEventListener("mousedown", (event) => {
            delTimer = setTimeout(() => {
                delItem(event.target); // Pass event.target to delItem function
            }, delTimeout)

        });
        button.addEventListener("mouseup", () => {
            clearTimeout(delTimer); // Cancel the timeout if button is released
        });

        button.addEventListener("mouseleave", () => {
            clearTimeout(delTimer); // Cancel the timeout if mouse leaves the button
        });
    });
}

/**
 * hides rows that do not contain letters according to filter
 */
function filter(){
    var filter = document.getElementById("filterID").value.toUpperCase();

    var table = document.getElementById("table");
    var tableBody = table.getElementsByTagName('tbody')[0]; // theres only one tablebody so get first one
    var tr = tableBody.getElementsByTagName("tr"); // use tablebody. because we are looking through rows in tablebody not whole table (exclude headers)

    

    //loop through rows in tablebody and for every row we check if filter = that row's items
    for(var i = 0; i < tr.length; i++){ //look through all rows
        var td = tr[i].getElementsByTagName("td"); //get array of table data
    
        var txtValue = td[0].innerText || td[col].textContent;
        if(txtValue.toUpperCase().indexOf(filter) > -1){ //aka it exists
            tr[i].style.display = "";
            
        }
        else tr[i].style.display = "none";
       
    }
}
