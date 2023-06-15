let radio = document.querySelector('.manuelaperta')
let cont = 1
document.getElementById('radio1').ariaChecked = true


setInterval(() => {
proximaImg()




},  5000) 
// tempo

function proximaImg() {
cont ++

if(cont > 2){


    cont = 1

}

document.getElementById('radio').ariaChecked = true
}