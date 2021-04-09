var myScreen = document.querySelector(".calculator-screen");

function kaku(obj){
    var myValue = obj.innerHTML;
    if(myValue == "="){

        //Calculation Algorithm

        myScreen.innerHTML = eval(myScreen.innerHTML);
    } else if(myValue == "AC") {
myScreen.innerHTML = "0";
    } else {
        if(myScreen.innerHTML == "0"){
            myScreen.innerHTML = myValue;
        } else{
            myScreen.innerHTML += myValue;
        }
    }
}