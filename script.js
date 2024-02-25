//your JS code here. If required.
const gridItems = document.querySelectorAll('.grid-item');
        const blockIdInput = document.getElementById('block_id');
        const colorInput = document.getElementById('colour_id');
        const changeButton = document.getElementById('change_button');
        const resetButton = document.getElementById('reset_button');

        // Event listener for changing color
        changeButton.addEventListener('click', () => {
            const blockId = blockIdInput.value;
            const color = colorInput.value;

            // Reset all grid items to transparent background
            gridItems.forEach(item => {
                item.style.backgroundColor = 'transparent';
            });

            // Change the background color of the specified grid item
            const targetItem = document.getElementById(blockId);
            if (targetItem) {
                targetItem.style.backgroundColor = color;
            } else {
                alert('Invalid block ID. Please enter a number between 1 and 9.');
            }
        });

        // Event listener for reset button
        resetButton.addEventListener('click', () => {
            gridItems.forEach(item => {
                item.style.backgroundColor = 'transparent';
            });
        });
