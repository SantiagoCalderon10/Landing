
const slides = document.querySelectorAll(".hero-slide");
let index = 0;

function changeSlide() {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}

// Mostrar la primera slide
slides[0].classList.add("active");

// Cambiar cada 5 segundos
setInterval(changeSlide, 5000);

emailjs.init('Sq8SOy-lmqLTaK7IT')

document
  .getElementById("formulariocontacto")
  .addEventListener("submit", function (event) {
    event.preventDefault();  // ← AQUÍ ESTABA EL ERROR

    const serviceID = "service_nmzga3q";
    const templateID = "template_q7gcgj3";

    emailjs.sendForm(serviceID, templateID, this).then(
      () => {
        Swal.fire({
          title: "¡Correo enviado!",
          text: "Nos pondremos en contacto contigo",
          icon: "success",
        });
      },
      (err) => {
        Swal.fire({
          title: "¡Ocurrió un error!",
          icon: "error",
        });
      }
    );
  }); 