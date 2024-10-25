//your JS code here. If required.
// Function to change the background color of a specific block
function changeColor() {
    // Get block ID and color from inputs
    const blockId = document.getElementById("block_id").value;
    const color = document.getElementById("colour_id").value;

    // Reset all grid items to transparent
    resetGrid();

    // Select the specified block and apply the new color if a valid ID is provided
    const block = document.getElementById(blockId);
    if (block && color) {
        block.style.backgroundColor = color;
    }
}

// Function to reset all grid items' background color to transparent
function resetGrid() {
    const gridItems = document.querySelectorAll(".grid-item");
    gridItems.forEach(item => {
        item.style.backgroundColor = "transparent";
    });
}
