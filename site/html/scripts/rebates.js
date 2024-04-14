function updateStateIncentives() {
    console.log("Function is called."); // Check if function is triggered
    var stateSelector = document.getElementById('state-selector');
    var allInfos = document.querySelectorAll('.state-info');
    allInfos.forEach(div => div.style.display = 'none'); // Hide all info divs

    var selectedValue = stateSelector.value;
    console.log("Selected Value:", selectedValue); // Debug selected value

    var selectedInfoDiv = document.getElementById('info' + selectedValue);
    if (selectedInfoDiv) {
        selectedInfoDiv.style.display = 'block'; // Show the selected state's info
    } else {
        console.log("No div found for selected state.");
    }
}


