var form = document.querySelector('form');
var numberPlace = document.querySelector('#numberPlace');
var render = document.querySelector('#render');
form.addEventListener('submit',(ev) => 
    {
        ev.preventDefault();
        amountOfPaint(numberPlace.value);
        // console.log(numberPlace.value);
    });

function amountOfPaint(amount) {
    // console.clear();
    render.innerHTML = "";
    var num = parseInt(amount);
    if (num >= 50) {
        var reste = num % 50;
        var  noReste = num - reste;
        var final = noReste / 50;
        // console.log("il faut acheter " + final + " pot de 25kg");
        render.innerHTML = "Il faut acheter " + final + " pot de 25kg";
        if (reste >= 10) {
            var resteTwo = reste % 10;
            var noResteTwo = reste - resteTwo;
            var finalTwo = noResteTwo / 10;
            if (resteTwo != 0) {
                // console.log("et il faut acheter " + ( finalTwo + 1 ) + " pots de 5kg");
                render.innerHTML += "et il faut acheter " + ( finalTwo + 1 ) + " pots de 5kg";
            }
            else {
                // console.log("et il faut acheter " + finalTwo + " pots de 5kg");
                render.innerHTML += "et il faut acheter " + finalTwo + " pots de 5kg";
            }
        }
        else {
            if (reste != 0) {
                // console.log("et il faudrat un pot de 5 kg");
                render.innerHTML += "et il faudrat un pot de 5 kg";
            }
        }
    }
    else if (50 > num && num >= 10) {
        var resteThree = num % 10;
            var noResteThree = num - resteThree;
            var finalThree = noResteThree / 10;
            if (resteThree != 0) {
                if (finalThree + 1 == 5){
                    // console.log("il faut acheter 1 pot de 25kg");
                    render.innerHTML = "Il faut acheter 1 pot de 25kg";
                }
                else {
                    // console.log("il faut acheter " + ( finalThree + 1 ) + " pots de 5kg");
                    render.innerHTML = "Il faut acheter " + ( finalThree + 1 ) + " pots de 5kg";
                }
            }
            else {
                // console.log("il faut acheter " + finalThree + " pots de 5kg");
                render.innerHTML = "Il faut acheter " + finalThree + " pots de 5kg";
            }
    }
    else if (10 > num && num > 0) {
        // console.log("il faudrat un pot de 5 kg");
        render.innerHTML = "Il faudrat un pot de 5 kg";
    }
    else {
        // console.log('il faut rentrer un nombre positif different de 0');
        render.innerHTML = "Il faut rentrer un nombre positif different de 0";
    }
}

document.getElementById("button").addEventListener("click", function () {
    amountOfPaint(numberPlace.value);
  });
