var button1 = document.getElementById('button1');
var button2 = document.getElementById('button2');
var button3 = document.getElementById('button3');
var button4 = document.getElementById('button4');
var button5 = document.getElementById('button5');
var button6 = document.getElementById('button6');
var button7 = document.getElementById('button7');

var box = document.getElementById('animated-box');

function animateBox(day) {

    // Reset any previous animation
    box.style.opacity = '0';
    box.style.top = '-150px';
    box.removeAttribute('class');

    // Delay to allow the box to reset its position
    setTimeout(function() {
        box.classList.add(day.toLowerCase());
        box.style.opacity = '1';
        box.style.top = '320px'; // Move down
    }, 800); // Small delay to ensure the reset of position is rendered
}

button1.addEventListener('click', function() {
    box.style.backgroundColor = '#3498db';
});
button2.addEventListener('click', function() {
    box.style.backgroundColor = '#e74c3c';
});
button3.addEventListener('click', function() {
    box.style.backgroundColor = '#2ecc71';
});
button4.addEventListener('click', function() {
    box.style.backgroundColor = '#f39c12';
});
button5.addEventListener('click', function() {
    box.style.backgroundColor = '#9b59b6';
});
button6.addEventListener('click', function() {
    box.style.backgroundColor = '#1aa4bc';
});
button7.addEventListener('click', function() {
    box.style.backgroundColor = '#eddf1a';
});