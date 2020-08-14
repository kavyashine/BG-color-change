let colors = ["#2d3436", "#e84393","#6c5ce7", "#b2bec3","#e17055","#ffeaa7","#dfe6e9","#a29bfe","#81ecec"];
let btn = document.getElementById("btn");
btn.addEventListner("click",function(){
    let random = Math.floor(Math.random()*colors.length);
    let color1 = colors[random];
    let rand = Math.floor(Math.random()*colors.length);
    let color2 = colors[rand];
    gradient = "linear-gradient(to left"+","+color1+","+color2+")";
    document.body.style.backgroundImage = gradient;
    document.getElementById("change").innerHTML = gradient;
})
