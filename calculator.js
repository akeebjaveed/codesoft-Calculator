


function number(inn) {
    let a = document.getElementById("input");
    a.value += inn;
}

function clrscr() {
    document.getElementById("input").value = "";
}



let b; //global variable to accsess anywere
let Operator;
function calculation(getoperator) {
    b = parseInt(document.getElementById("input").value);//i have stored the 1st value in global variable
    // console.log(b);
    document.getElementById("input").value = "";//no storing
    document.getElementById("input").focus();
    Operator = getoperator;
    ;
}

function eq() {
    var z = parseInt(document.getElementById("input").value);//storing 2nd value

    //tryanderror
    //let y=b+z;//retriving the 1st value and adding with 2nd value
    // document.getElementById("input").value=y;//no storing

    // let i=document.getElementById("clac").innerHTML;

    //!Calculation Condition!!!
    if (Operator == '+') {
        let y = b + z;//retriving the 1st value and adding with 2nd value
        document.getElementById("input").value = y;//no storing
    } else if (Operator == '-') {
        let y = b - z;//retriving the 1st value and adding with 2nd value
        document.getElementById("input").value = y;//no storing
    } else if (Operator == '*') {
        let y = b * z;//retriving the 1st value and adding with 2nd value
        document.getElementById("input").value = y;//no storing
    } else if (Operator == '/') {
        let y = b / z;//retriving the 1st value and adding with 2nd value
        document.getElementById("input").value = y;//no storing
    } else if (Operator == '%') {
        let y = b % z;//retriving the 1st value and adding with 2nd value
        document.getElementById("input").value = y;//no storing
    }




}

