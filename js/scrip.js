/**HEADER STICKY*/
document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) { // Ajusta el valor de desplazamiento según sea necesario
            header.classList.add('fixed');
        } else {
            header.classList.remove('fixed');
        }
    });
});

/**MENÚ BURGER*/
const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
});

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
});

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');

    // Función para resaltar el enlace activo
    function highlightActiveLink(event) {
        navLinks.forEach(link => {
            link.classList.remove('active'); // Removemos la clase 'active' de todos los enlaces
        });
        event.target.classList.add('active'); // Agregamos la clase 'active' solo al enlace clickeado
    }

    // Listener para resaltar el enlace activo al hacer clic en un enlace
    navLinks.forEach(link => {
        link.addEventListener('click', highlightActiveLink);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Removemos la clase 'active' de todos los enlaces
            navLinks.forEach(link => {
                link.classList.remove('active');
            });

            // Agregamos la clase 'active' solo al enlace que se hizo clic
            this.classList.add('active');
        });
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector("#nav");
    const abrir = document.querySelector("#abrir");
    const cerrar = document.querySelector("#cerrar");
    const navLinks = document.querySelectorAll('.nav-link');

    abrir.addEventListener("click", () => {
        nav.classList.add("visible");
    });

    cerrar.addEventListener("click", () => {
        nav.classList.remove("visible");
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove("visible");
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    let lastScrollTop = 0;

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop && scrollTop > header.offsetHeight) {
            // Scroll hacia abajo, ocultar el header
            header.classList.add('hide');
        } else {
            // Scroll hacia arriba o en la parte superior, mostrar el header
            header.classList.remove('hide');
        }

        lastScrollTop = scrollTop;
    });
});


document.getElementById("myForm").addEventListener("submit", function(event) {
    // Evitar el envío por defecto del formulario
    event.preventDefault();

    // Cambiar el texto del botón y desactivarlo
    var submitButton = document.getElementById("submitButton");
    submitButton.innerHTML = "Enviando mensaje...";
    submitButton.disabled = true;
    submitButton.classList.add("btn-enviando");
    submitButton.style.opacity = "0.5"; // Asegurar que la opacidad sea 1

    // Obtener los datos del formulario
    var formData = new FormData(this);

    // Realizar una solicitud AJAX
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://formspree.io/f/xoqggvpo", true);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // Después de 2 segundos, cambiar el texto a "Mensaje enviado" y cambiar el estilo
            setTimeout(function() {
                submitButton.innerHTML = "Mensaje enviado 🥳";
                submitButton.classList.remove("btn-enviando");
                submitButton.classList.add("btn-enviado");
                submitButton.style.opacity = "1"; // Asegurar que la opacidad sea 1

                // Después de 3 segundos, redirigir al usuario a la página deseada
                setTimeout(function() {
                    window.location.href = "https://gonzalocabreravaras.github.io/gonzalocabrera/";
                }, 3000);
            }, 2000);
        }
    };
    xhr.send(formData);
});



