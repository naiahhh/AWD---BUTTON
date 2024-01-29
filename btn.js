function animateBox(day) {
    var box = document.getElementById('animated-box');

    // Reset any previous animation
    box.style.opacity = '0';
    box.style.top = '-150px';
    box.removeAttribute('class');

    // Delay to allow the box to reset its position
    setTimeout(function() {
        box.classList.add(day.toLowerCase());
        box.style.opacity = '1';
        box.style.top = '320px'; // Move down
    }, 1000); // Small delay to ensure the reset of position is rendered
}


document.getElementById('button1').addEventListener('click', function() {
    animateBox('blue');
});
  

