var button1 = document.getElementById('button1');
var button2 = document.getElementById('button2');
var button3 = document.getElementById('button3');
var button4 = document.getElementById('button4');
var button5 = document.getElementById('button5');
var button6 = document.getElementById('button6');
var button7 = document.getElementById('button7');

var box = document.getElementById('animated-box');

function animateBox(backgroundColor, borderColor) {
    box.style.top = '-150px';


    setTimeout(function() {
        box.style.backgroundColor = backgroundColor; 
        box.style.borderColor = borderColor; 
        box.style.top = '320px';
    }, 800); 
}

button1.addEventListener('click', function() { animateBox('rgba(52, 152, 219, 0.2)', 'rgba(52, 152, 219, 0.9)'); }); 
button2.addEventListener('click', function() { animateBox('rgba(231, 76, 60, 0.2)', 'rgba(231, 76, 60, 0.9)'); }); 
button3.addEventListener('click', function() { animateBox('rgba(46, 204, 113, 0.2)', 'rgba(46, 204, 113, 0.9)'); }); 
button4.addEventListener('click', function() { animateBox('rgba(243, 156, 18, 0.2)', 'rgba(243, 156, 18, 0.9)'); }); 
button5.addEventListener('click', function() { animateBox('rgba(155, 89, 182, 0.2)', 'rgba(155, 89, 182, 0.9)'); }); 
button6.addEventListener('click', function() { animateBox('rgba(26, 164, 188, 0.2)', 'rgba(26, 164, 188, 0.9)'); }); 
button7.addEventListener('click', function() { animateBox('rgba(237, 223, 26, 0.2)', 'rgba(237, 223, 26, 0.9)'); }); 
