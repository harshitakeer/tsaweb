function updateStateIncentives() {
    var stateSelector = document.getElementById('state-selector');
    var allInfos = document.querySelectorAll('.state-info');
    allInfos.forEach(div => div.style.display = 'none');

    var selectedValue = stateSelector.value;
    var selectedInfoDiv = document.getElementById('state-specific-info-' + selectedValue);
    if (selectedInfoDiv) {
        selectedInfoDiv.style.display = 'block';
    } else {
        console.log("No div found for selected state.");
    }
}

