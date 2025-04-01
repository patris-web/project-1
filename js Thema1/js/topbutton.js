let topbutton = document.getElementById("topbutton");

window.onscroll = function(){
    if(document.documentElement.scrollTop > 20)
    {
        topbutton.style.display = "block";
    }
    else
    {
        topbutton.style.display = "none";
    }
}

function toppage (){
    document.documentElement.scrollTop = 0;
}