
const inputCount = document.getElementById('counter');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');

incrementButton.addEventListener('click', () => {
    inputCount.value = parseInt(inputCount.value) + 1;
});

decrementButton.addEventListener('click', () => {
    if (parseInt(inputCount.value) > 1) {
        inputCount.value = parseInt(inputCount.value) - 1;
    } else {
        inputCount.value = 1;
    }
});