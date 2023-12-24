let menu=document.querySelector("#menu");
let toggle=true
let bg =document.querySelector(".bg")

menu.addEventListener('click',()=>{
    if(toggle==true){
        bg.style.transform='scale(.7)'
        bg.style.borderRadius='10px'
        bg.style.boxShadow='0 150px 45px -100px rgba(0,0,0,0.2)'
        toggle=false
    }else{
        bg.style.transform='scale(1)'
        bg.style.borderRadius='0px'
        toggle=true
    }
})


let typed=new Typed(".lblue",{
    strings:["WEB DEVELOPMENT","HTML CSS JAVASCRIPT"],
    typeSpeed:100,
    backSpeed:10,
    loop:true
})