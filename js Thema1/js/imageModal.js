var openimage = document.getElementById("openimage");
var modal = document.getElementById("modal");
var showimage =document.getElementById("showimage");

openimage.onclick = function() {

    modal.style.display = "block";

    showimage.src=this.src;

}

var span = document.querySelector(".close");
span.onclick = function(){
    modal.style.display = "none";
}