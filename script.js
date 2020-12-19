var form = document.querySelector('form');
var numberPlace = document.querySelector('#numberPlace');
var render = document.querySelector('#render');

function amountOfPaint(amount) {
    render.innerHTML = "";
    var num = parseInt(amount);
    if (num >= 50) {
        var reste = num % 50;
        var  noReste = num - reste;
        var final = noReste / 50;
        render.innerHTML = "Il faut acheter " + final + " pot de 25kg";
        if (reste >= 10) {
            var resteTwo = reste % 10;
            var noResteTwo = reste - resteTwo;
            var finalTwo = noResteTwo / 10;
            if (resteTwo != 0) {
                render.innerHTML += " et il faut acheter " + ( finalTwo + 1 ) + " pots de 5kg";
            }
            else {
                render.innerHTML += " et il faut acheter " + finalTwo + " pots de 5kg";
            }
        }
        else {
            if (reste != 0) {
                render.innerHTML += " et il faudrat un pot de 5 kg";
            }
        }
    }
    else if (50 > num && num >= 10) {
        var resteThree = num % 10;
            var noResteThree = num - resteThree;
            var finalThree = noResteThree / 10;
            if (resteThree != 0) {
                if (finalThree + 1 == 5){
                    render.innerHTML = "Il faut acheter 1 pot de 25kg";
                }
                else {
                    render.innerHTML = "Il faut acheter " + ( finalThree + 1 ) + " pots de 5kg";
                }
            }
            else {
                render.innerHTML = "Il faut acheter " + finalThree + " pots de 5kg";
            }
    }
    else if (10 > num && num > 0) {
        render.innerHTML = "Il faudrat un pot de 5 kg";
    }
    else {
        render.innerHTML = "Il faut rentrer un nombre positif different de 0";
    }
}

document.getElementById("button").addEventListener("click", function () {
    amountOfPaint(numberPlace.value);
  });
