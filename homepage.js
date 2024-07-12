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
  
    states.forEach(function(state) {
      let option = document.createElement("option");
      option.text = state.name;
      option.value = state.abbreviation;
      selectElement.appendChild(option);
    });
    console.log("states added");

   
    console.log("del Btn");
    addDelListener();
    
  });
// delbtn animation



//incase user does NOT want to actually delete we reset the timer if the timer has reached timeout
/* window.addEventListener('mouseup', (e) =>{
    if(isHolding){
        if(delTimer){
            clearTimeout(delTimer);
        }
    }
}) */



function formatToMonthDay(dateString){
    var date = new Date(dateString);
    var months = ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'];
    var month_index = date.getMonth();
    var day = date.getDay();

    var formattedDay = months[month_index] + ' ' + day;
    return formattedDay;
}

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
    if(location === "Select..."){
        return emptyEntryError(3);
    }
    var td_loc = document.createElement("td");
    td_loc.textContent = location;

    var td_status = document.createElement("td");
    td_status.innerHTML =  `
        <select name="application-status" id="application-status">
           <option value="Select..."> Select... </option>
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
    document.getElementById("locationsID").value = "Select...";
}


function delItem(button){
    var audio = new Audio("assets/sounds/happy-pop-3-185288.mp3");
    var row = button.closest('tr');
    audio.play();
    row.remove();
}
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

// add actionListener to buttons that are added
function addDelListener(){
    const button = document.querySelectorAll('button');
    const delTimeout = 500; 
    let delTimer; 
    let isHoldingDel;
    

    button.forEach(button => {
        button.addEventListener("mousedown", (event) => {
            isHoldingDel = true; 
            delTimer = setTimeout(() => {
                delItem(event.target); // Pass event.target to delItem function
            }, delTimeout)
            
        });
        button.addEventListener("mouseup", () => {
            isHoldingDel = false;
            clearTimeout(delTimer); // Cancel the timeout if button is released
        });
    
        button.addEventListener("mouseleave", () => {
            isHoldingDel = false;
            clearTimeout(delTimer); // Cancel the timeout if mouse leaves the button
        });
    });
}

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

