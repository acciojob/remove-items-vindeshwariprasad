//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function() {
    // Get references to the select element and the button
    var colorSelect = document.getElementById("colorSelect");
    var removeButton = document.querySelector("input[type='button']");

    // Add click event listener to the button
    removeButton.addEventListener("click", function() {
        // Get the index of the selected option
        var selectedIndex = colorSelect.selectedIndex;

        // Remove the selected option from the select element
        colorSelect.remove(selectedIndex);
    });
});

