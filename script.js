const slider = document.getElementById("slider");
const leftValue = document.getElementById("leftValue");
const rightValue = document.getElementById("rightValue");

slider.addEventListener("input", () => {
    const value = slider.value;
    const left = 100 - value;
    const right = value;
    
    leftValue.textContent = `संसार ${left}`;
    rightValue.textContent = `गुरु ${right}`;

    // Change color dynamically based on the value (optional)
    if (value < 50) {
        slider.style.background = "red";
    } else {
        slider.style.background = "green";
    }
});
