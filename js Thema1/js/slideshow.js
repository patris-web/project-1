let image = 1;

slideshow(image);

function nextpre(n){
    slideshow(image += n);
}

function slideshow(n){
    let i;
    let slides = document.getElementsByClassName("slide");

    if(n > slides.length){
        image = 1
    }
    if( n < 1)
    {
        image = slides.length
    }

    for(i=0;i < slides.length; i++)
    {
        slides[i].style.display = "none";
    }
    slides[image - 1].style.display = "block";
}