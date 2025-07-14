const menuIcon = document.getElementById("threelines");
const navbar = document.getElementById("head-links");

menuIcon.addEventListener("click",() =>{
  navbar.classList.toggle("active");
});

document.querySelectorAll(".head-links a").forEach(link =>{
  link.addEventListener("click", () => {
    navbar.classList.remove("active");
  });
});

const contactForm=document.getElementById("contact-form");
if(contactForm){
contactForm.addEventListener("submit",function(e){
  e.preventDefault();
  
  const email = this.elements["email"].value.trim();
  const phone = this.elements["phone"].value.trim();
  const phoneregex = /^\d{10}$/;
  if (!phoneregex.test(phone)){
    alert("Please enter a valid 10-digit mobile number");
    return;
  }

  
  if (!email.includes('@')){
    alert("Please enter a valid email address with '@' symbol");
    return;
  }

  emailjs.sendForm("Veda_2105", "template_d8i2187", this)
    .then(function(response){
      alert("Message sent successfully!");
     contactForm.reset();
    },function(error){
    alert("Failed to send message. Please try again.");
    });
});
}