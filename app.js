let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}


function toggleNav() {
var   x = document.getElementById("Nav-info") 
var   y = document.getElementById("Navbar-Resp")
  if (x.className === "Nav-info") {
    x.className += " Nav-on"
  }
  else {
    x.className = "Nav-info"
  }
  if (y.className === "Nav-bar") {
    y.className += " Navbar-Resp"
  }
  else {
    y.className = "Nav-bar"
  }
}

document.getElementById("downloadBtn").addEventListener("click", function() {
  // Create a dummy link element
  var link = document.createElement('a');
  link.href = './my-cv (1).pdf';  // Replace with the actual path to your PDF file
  link.download = 'ADIL AZIZ CV.pdf';  // Replace with the desired file name

  // Trigger the download
  link.click();
});
function sendMessage(){
  var params = {
    name : document.getElementById("name").value ,
    email : document.getElementById("email").value ,
    message : document.getElementById("message").value
  }
  emailjs.send('service_275vqd6', 'template_kxvr8ww', params)
    .then(function(response) {
      document.getElementById("name").value = "",
      document.getElementById("email").value = "",
      document.getElementById("message").value = ""
       console.log('SUCCESS!', response.status, response.text);
       alert("Your Message Sent Sucessfully")
    }, function(error) {
       console.log('FAILED...', error);
       alert("Your Message Can't Sent Try Again")
    });
}

about = () => location.href="#main-about"
service = () => location.href="#main-service"
summary = () => location.href="#main-summary"
port = () => location.href="#main-port"
testi = () => location.href="#main-testi"
contact = () => location.href="#main-contact"
home = () => location.href="#main-home"