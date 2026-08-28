const navLinks = document.querySelectorAll('.navbar a');
const sections = document.querySelectorAll('body > section');

function showSection(id) {
    sections.forEach(section => {
        section.style.display = 'none';
    });

    const selectedSection = document.querySelector(id);

    if (selectedSection) {
        selectedSection.style.display = 'block';
    }
}

navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();

        const target = this.getAttribute('href');

        if (target.startsWith('#')) {
            showSection(target);
        }
    });
});

showSection('#home');
   
   function showSkills(box) {
    document.querySelectorAll(".skill-box").forEach(function(item) {
        item.classList.remove("active");
    });

    box.classList.add("active");
}
function showProject(circle) {

    document.querySelectorAll(".project-item").forEach(function(item) {
        item.classList.remove("active");
    });

    circle.parentElement.classList.add("active");
}
function toggleAboutPhoto(photo) {

    photo.classList.toggle("active");

}
document.getElementById("contact-form").addEventListener("submit", function(event) {

    event.preventDefault();

    emailjs.sendForm(
        "service_f70qkbb",
        "template_j9damon",
        this
    )
    .then(function() {

        alert("Message sent successfully! 💜");

        document.getElementById("contact-form").reset();

    })
    .catch(function(error) {

        alert("Failed to send message. Please try again.");

        console.log("EmailJS Error:", error);

    });

});
/* =========================================
   DOWNLOAD MY DIGITAL CARD
========================================= */

function downloadCard() {

    const card = document.getElementById("digitalCard");

    const newWindow = window.open("", "_blank");

    newWindow.document.write(`
        <html>
        <head>

            <title>Manasi Jadhav - Digital Card</title>

            <style>

                body {
                    margin: 0;
                    min-height: 100vh;

                    display: flex;
                    justify-content: center;
                    align-items: center;

                    background: #05000d;

                    font-family: Arial, sans-serif;
                }

                .card {
                    width: 390px;
                    min-height: 520px;

                    padding: 30px;

                    box-sizing: border-box;

                    border-radius: 28px;

                    background:
                        linear-gradient(
                            145deg,
                            #230a41,
                            #0a0519
                        );

                    border: 2px solid #b66cff;

                    color: white;

                    text-align: center;

                    box-shadow:
                        0 0 20px #b66cff,
                        0 0 50px #9b4dff;
                }

                .photo {
                    width: 125px;
                    height: 125px;

                    margin: auto;

                    border-radius: 50%;

                    border: 3px solid #b66cff;

                    overflow: hidden;
                }

                .photo img {
                    width: 100%;
                    height: 100%;

                    object-fit: cover;
                }

                h1 {
                    font-size: 30px;
                    margin: 20px 0 5px;
                }

                .role {
                    color: #c99aff;
                }

                .line {
                    width: 80%;
                    height: 1px;

                    margin: 20px auto;

                    background: #b66cff;
                }

                .details {
                    text-align: left;

                    margin-top: 20px;
                }

                .details p {
                    margin: 18px 0;

                    font-size: 14px;
                }

                .signature {
                    margin-top: 30px;

                    font-family: cursive;

                    font-size: 38px;

                    font-style: italic;

                    color: white;
                }

                .footer {
                    margin-top: 15px;

                    color: #b66cff;

                    letter-spacing: 2px;

                    font-size: 13px;
                }

            </style>

        </head>

        <body>

            <div class="card">

                <div class="photo">
                    <img src="${document.querySelector(".card-photo img").src}">
                </div>

                <h1>Manasi Jadhav</h1>

                <div class="role">
                    Computer Engineering
                </div>

                <div class="line"></div>

                <div class="details">

                    <p>📞 8483019814</p>

                    <p>✉️ mansijadhav8384@gmail.com</p>

                    <p>📍 Nashik, Maharashtra</p>

                </div>

                <div class="signature">
                    Manasi
                </div>

                <div class="footer">
                    💜 by Manasi
                </div>

            </div>

        </body>
        </html>
    `);

    newWindow.document.close();

    setTimeout(function() {
        newWindow.print();
    }, 700);
}