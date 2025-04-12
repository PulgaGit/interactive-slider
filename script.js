const slider = document.getElementById("slider");
const leftLabel = document.getElementById("leftLabel");
const rightLabel = document.getElementById("rightLabel");

// Function to update the slider color based on its value
slider.oninput = function () {
  const sansaarValue = slider.value; // Value on the left side (संसार)
  const guruValue = 100 - sansaarValue; // Value on the right side (गुरु)

  // Update the labels dynamically
  leftLabel.textContent = `संसार ${guruValue}`;
  rightLabel.textContent = `गुरु ${sansaarValue}`;

  // Calculate dynamic color based on the slider value (0-100 range)
  const redValue = Math.min(255, sansaarValue * 2); // Red increases as sansaar value increases
  const greenValue = Math.min(255, guruValue * 2); // Green increases as guru value increases

  // Update the background color of the slider based on the values
  const colorStart = `rgb(${redValue}, ${255 - redValue}, 0)`; // Red to green transition
  const colorEnd = `rgb(${greenValue}, ${255 - greenValue}, 0)`; // Green to red transition

  // Apply the dynamic color to the slider track using a linear gradient
  slider.style.background = `linear-gradient(to right, ${colorStart} 0%, ${colorEnd} 100%)`;
};
