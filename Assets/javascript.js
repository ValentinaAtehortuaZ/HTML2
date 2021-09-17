var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var slides = document.getElementsByClassName("mySlide");
    var dots = document.getElementsByClassName("dot");


    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

    slideIndex++;

    setTimeout(() => {
        showSlides(slideIndex)
    }, 10000);

}

function validForm() {
var name = document.getElementById("name").value;
var error = document.getElementById("errorName");
var gender = document.getElementById("Gender").value;
var errorGender = document.getElementById("errorGender");
var result = document.getElementById("result");


if (name === "") {
   error.innerText = "Field is required";
   return;
} else {
    error.innerText = "";  
}

if (name.length > 10) {
    error.innerText = "Maxlength is 10"; 
return;
} else {
    error.innerText = "";  
}

if (gender === "e") {
    errorGender.innerText = "Field is required";
    return;
 } else {
     errorGender.innerText = "";  
 }

 var gender2 = "";
 if (gender === "M") {
     gender2 = "Masculino";
 } else {
    gender2 = "Femenino";
 }

 result.innerText = `${ name } es de género ${ gender2 }`;

}

