document.getElementById('colorButton').addEventListener('click', function() {
    this.style.backgroundColor = this.style.backgroundColor === 'red' ? 'blue' : 'red';
});

document.getElementById('greetButton').addEventListener('click', function() {
    const currentHour = new Date().getHours();
    let greeting;

    if (currentHour < 12) {
        greeting = 'Good Morning!';
    } else if (currentHour < 18) {
        greeting = 'Good Afternoon!';
    } else {
        greeting = 'Good Evening!';
    }

    alert(greeting);
});

document.getElementById('calculateButton').addEventListener('click', function() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const result = num1 + num2;

    document.getElementById('result').textContent = `Result: ${result}`;
});