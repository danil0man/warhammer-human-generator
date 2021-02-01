// Variables
const characteristics = document.querySelectorAll('.char');

// Creating Characteristics
characteristics.forEach(char => {
    const random = 20 + Math.floor(Math.random() * 20 + 1);
    char.innerHTML = random;
    console.log(random);
});