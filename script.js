// Select the slider and the elements where the values will be displayed
const slider = document.getElementById("slider");
const leftValue = document.getElementById("leftValue");
const rightValue = document.getElementById("rightValue");

// Add an event listener to update the values dynamically when the slider moves
slider.addEventListener("input", function() {
    const value = slider.value;
    
    // Calculate the left and right values based on the slider position
    const left = 100 - value;
    const right = value;

    // Update the text content for the labels (Swap positions)
    leftValue.textContent = `गुरु ${right}`;  // Swap: गुरु on the left
    rightValue.textContent = `संसार ${left}`; // Swap: संसार on the right
    
    // Update the background of the slider (colored portion)
    slider.style.background = `linear-gradient(to right, #4CAF50 ${value}%, #ddd ${value}%)`;
});
