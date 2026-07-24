// Dark Mode

const darkBtn = document.getElementById("darkModeBtn");

darkBtn.addEventListener("click", function(){

    document.body.classList.toggle("dark-mode");

});


// Form Validation

const form = document.getElementById("contactForm");

const message = document.getElementById("formMessage");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const text = document.getElementById("message").value.trim();

    console.log(name);
    console.log(email);
    console.log(text);

    if(name==="" || email==="" || text===""){

        message.style.color="red";

        message.textContent="Please fill in all fields.";

        return;

    }

    const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(email)){

        message.style.color="red";

        message.textContent="Enter a valid email.";

        return;

    }

    message.style.color="green";

    message.textContent="Message sent successfully!";

});