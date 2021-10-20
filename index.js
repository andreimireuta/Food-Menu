var icons= document.querySelectorAll('.section-1-icons i');
//querySelectorAll returneaza un array cu elemetele care se potrivesc cautarii

var i=1;

setInterval( () =>{
    i+=1;
    var icon = document.querySelector('.section-1-icons .prima');

    icon.classList.remove('prima');

    //verificam daca i are valoarea mai mare decat a ultimului elemnt din array.
    // inseamna ca am trecut de ultimul elem si nu are un urmator frate.
    // trebuie sa ne intoarcem la primul ca sa nu avem erori
    if(i>icons.length){
        icons[0].classList.add('prima');
        i=1;
    }else{
        icon.nextElementSibling.classList.add('prima');
    };


},3000);

//dam ca parametri o functie si un interval in care vrem sa executam aceasta functie
// intrevalul este in ms . inn czul nostru ne va crea un interval de 4s