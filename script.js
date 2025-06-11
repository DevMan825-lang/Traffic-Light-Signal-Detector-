function checkSignal(){
    var text = document.getElementById("signal").value; 
    if(text == "red"){
        alert(" Detected Signal is red ! Please Stop ");
        document.getElementById("red").style.backgroundColor = "red"; 
    }
    else if(text == "green"){
        alert(" Detected Signal is green ! Go "); 
        document.getElementById("green").style.backgroundColor = "green"; 

    }
    else if(text == "yellow"){
        alert(" Detected Signal is Yellow ! Check "); 
        document.getElementById("yellow").style.backgroundColor = "yellow"; 

    }
    else{
        alert(" Light is broken "); 
    }
}