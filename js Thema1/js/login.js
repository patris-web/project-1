var modal = document.getElementById("modal1");
window.onclick = function(event){
    if(event.target == modal){
        modal.style.display = "none";
    }
}
function openform(){
    document.querySelector(".form").style.display = "grid";
}
function closeform(){
    document.querySelector(".form").style.display = "none";
}