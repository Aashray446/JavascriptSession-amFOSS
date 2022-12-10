const input = document.querySelector('#number');
const button = document.querySelector('#button');
const result = document.querySelector('#result');

button.addEventListener('click', () => {
    const number = input.value;

    // Find factorial of the number
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial *= i;
    }

    // Display the result
    result.innerHTML = factorial;

});

document.addEventListener('keypress', (e) => {
    const number = input.value;

    if (e.key == "Enter") {

        // Find factorial of the number
        let factorial = 1;
        for (let i = 1; i <= number; i++) {
            factorial *= i;
        }

        // Display the result
        result.innerHTML = factorial;

    }


});