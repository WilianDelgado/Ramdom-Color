
    

const cargarColor = function(){
    const ranColor = getColor();
    const conten = document.getElementById("color");
    conten.style.background = ranColor;
    const codColor = document.getElementById("nomColo");
    codColor.innerHTML = ranColor;
    codColor.style.color = ranColor;
    console.log("Random Color:" + ranColor);
}




const getColor = () => "#" + Math.floor(Math.random() * 16777215).toString(16);