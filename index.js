let array1 = ["Image 1 of 4", "Image 2 of 4", "Image 3 of 4", "Image 4 of 4"];
let array = ["LVA1.png", "LVA2.png", "reCAPTCHA.png", "Duolingo.png"];
let x = 0;
function plusImage(){
    if (x===3){
        x=0;
    }
    else{
        x++;
    }
    displayImage()
}
function minusImage(){
    if(x===0){
        x=3;
    }
    else{
        x--;
    }
    displayImage()
}
function displayImage(){
    document.getElementById("images").src=array[x];
    document.getElementById("cap").innerHTML=array1[x];

}
let j=0;
function changeTime(){
    if(j===0){
        document.getElementById("entire").style.color="white";
        document.getElementById("entire").style.backgroundColor="black";
        document.getElementById("changeDay").innerHTML="☀️";
        document.getElementById("changeDay").style.backgroundColor="#e1c39e";
        j=1;
    }
    else{
        document.getElementById("entire").style.color="black";
        document.getElementById("entire").style.backgroundColor="#e1c39e";
        document.getElementById("changeDay").innerHTML="🌙";
        document.getElementById("changeDay").style.backgroundColor="black";
        j=0;
    }

}