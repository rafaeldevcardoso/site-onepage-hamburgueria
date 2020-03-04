window.onscroll = function(){
    scroll();
};
function scroll(){
    let btn = document.getElementById("btnTop")
    if (document.documentElement.scrollTop > 570){
        btn.style.display = "block";
    }else{
        btn.style.display ="none";
    }
}
function backToTop(){
    document.documentElement.scrollTop = 0;
}







/*
As partes no HTML e no CSS

CSS
#btnTop{
    position: fixed;
    bottom: 20px;
    right: 20px;

    height: 80px;
    width: 80px;
    color:#FF0000;
    background: #333333;
    border: none;
    border-radius: 50vh;
    display: none; //o botão ficará invisivel
}

.setop{
    height: 75%;
    width: 75%;
}

HTML

<button onclick="backToTop()" id="btnTop"></button>
*/