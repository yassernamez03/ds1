a  = Math.random
b = prompt()
alert(`${b}`)
while(b!=a){
    if(b > a){
        b = prompt()
        alert("plus petite")
    }
    else if(b < a){
        b = prompt()
        alert("plus grand")
    }
    i=i+1;
}
if(a == b){
    alert(`bien jouer  votre nbr de coups est :${i}`)
}
