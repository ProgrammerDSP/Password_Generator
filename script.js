var SC , SA , CA , No , Len;

function generatePass(){

    const smallAlpha = ["a" , "b" , "c" , "d" , "e" , "f" , "g" , "h" , "i" , "j" , "k" , "l" , "m" , "n" , "o" , "p" , "q" , "r" , "s" , "t" , "u" , "v" , "w" , "x" , "y" , "z"]
    
    const capitalAlpha = ["A" , "B" , "C" , "D" , "E" , "F" , "G" , "H" , "I" , "J" , "K" , "L" , "M" , "N" , "O" , "P" , "Q" , "R" , "S" , "T" , "U" , "V" , "W" , "X" , "Y" , "Z"]

    const specialCharacters = ["!" , "@" , "#" , "$" , "%" , "^" , "&" , "*" , "(" , ")" , "/"]

    var password = ""

    var charac = 0

    for(var i=1; i <= Len; i++){

        if(charac !== Len){

            if(SA === true){

                password = password + smallAlpha[Math.floor(Math.random()*25)]

            }
            
            if(No === true){

                password = password + Math.floor(Math.random()*100)

            }

            if(SC === true){

                password = password + specialCharacters[Math.floor(Math.random()*10)]

            }

            if(CA === true){

                password = password + capitalAlpha[Math.floor(Math.random()*25)]

            }

            charac += 1

        }

    }

    password = password.slice(0 , Len)

    document.getElementById("password").innerHTML = "Password : " + password

}

function getValue(){

    SC = document.getElementById("SC").checked;
    SA = document.getElementById("SA").checked;
    CA = document.getElementById("CA").checked;
    No = document.getElementById("No").checked;
    Len = document.getElementById("Len").value;

    console.log(Len)

    if(Len < 4){
        alert("The minimum length is 4 please reenter the length")
    }

    else if(Len > 15){
        alert("The maximum length is 15 please reenter the length")
    }

    else{
        generatePass()
    }

}