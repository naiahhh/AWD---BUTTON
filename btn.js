function myMove2(Day2){
    const days = new Array("Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday");
    let i, l;
    for(i = 0, l = days.length; i < l; i++){
        if(days[i] != Day2){
            document.getElementById(days[i]).style.top = '-450px';
            document.getElementById(days[i]).style.bottom = '-450px';
            document.getElementById(days[i]).style.transition = 'all 0.5s';
        }
    }
}
let id = null;
function myMove(day) {

    var elem = document.getElementById(day);   
    myMove2(day);
    let pos = -450;
    clearInterval(id);
    id = setInterval(frame, 5);

    function frame() {
        if (pos != 160) {
            document.getElementById(day).style.transition = 'all 0.9s';
            if(day == "Monday"){
                document.getElementById("Monday").style.borderColor = "blueviolet";
                document.getElementById("Monday").style.backgroundColor = "blueviolet";
            }
            else if(day == "Tuesday"){
                document.getElementById("Tuesday").style.borderColor = "violet";
                document.getElementById("Tuesday").style.backgroundColor = "violet";
            }
            else if(day == "Wednesday"){
                document.getElementById("Wednesday").style.borderColor = "blue";
                document.getElementById("Wednesday").style.backgroundColor = "blue";
            }
            else if(day == "Thursday"){
                document.getElementById("Thursday").style.borderColor = "greenyellow";
                document.getElementById("Thursday").style.backgroundColor = "greenyellow";
            }
            else if(day == "Friday"){
                document.getElementById("Friday").style.borderColor = "yellow";
                document.getElementById("Friday").style.backgroundColor = "yellow";
            }
            else if(day == "Saturday"){
                document.getElementById("Saturday").style.borderColor = "orange";
                document.getElementById("Saturday").style.backgroundColor = "orange";
            }
            else if(day == "Sunday"){
                document.getElementById("Sunday").style.borderColor = "red";
                document.getElementById("Sunday").style.backgroundColor = "red";
            }

            pos++;
            pos++;
            elem.style.top = pos + 'px'; 
            elem.style.bottom = pos + 'px';
        } 

        else {
            document.getElementById(day).style.backgroundColor = "transparent";
            clearInterval(id);	  
        }
    }
}