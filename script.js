function somar(){

    var name = document.getElementById("name")
    var namea = String(name.value)

    var a = document.getElementById("numone")
    var aa = Number(a.value)

    var b = document.getElementById("numtwo")
    var bb = Number(b.value)

    var c = aa + bb  

    document.getElementById("res").innerText = `${namea}, a soma entre ${aa} + ${bb} é : ${c}.`;

}

function subtrair(){

    var name = document.getElementById("name")
    var namea = String(name.value)

    var a = document.getElementById("numone")
    var aa = Number(a.value)

    var b = document.getElementById("numtwo")
    var bb = Number(b.value)

    var c = aa - bb  

    document.getElementById("res").innerText = `${namea}, a subtração entre ${aa} - ${bb} é : ${c}.`;

}

function multiplicar(){

    var name = document.getElementById("name")
    var namea = String(name.value)

    var a = document.getElementById("numone")
    var aa = Number(a.value)

    var b = document.getElementById("numtwo")
    var bb = Number(b.value)

    var c = aa * bb  

    document.getElementById("res").innerText = `${namea}, a mutiplicação entre ${aa} * ${bb} é : ${c}.`;

}

function dividir(){

    var name = document.getElementById("name")
    var namea = String(name.value)

    var a = document.getElementById("numone")
    var aa = Number(a.value)

    var b = document.getElementById("numtwo")
    var bb = Number(b.value)

    var c = aa / bb  

    document.getElementById("res").innerText = `${namea}, a divisão entre ${aa} / ${bb} é : ${c}.`;

}