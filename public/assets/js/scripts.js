const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {

    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } 
    
    else {
        navbar.classList.remove('scrolled');
    }

});

const modal = document.getElementById("teamModal");
const modalName = document.getElementById("modalName");
const modalDescription = document.getElementById("modalDescription");

function openModal(name, description){

    modal.style.display = "flex";

    modalName.innerText = name;

    modalDescription.innerText = description;
}

function closeModal(){
    modal.style.display = "none";
}

window.addEventListener("click", (e) => {

    if(e.target === modal){
        closeModal();
    }

});

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    item.addEventListener("click", () => {

        const isActive = item.classList.contains("active");

        faqItems.forEach(faq => {
            faq.classList.remove("active");
        });

        if(!isActive){
            item.classList.add("active");
        }

    });

});