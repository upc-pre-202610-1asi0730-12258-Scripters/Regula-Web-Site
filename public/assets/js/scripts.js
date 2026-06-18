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

const authPages = document.querySelectorAll(".auth-page");
const landingSections = document.querySelectorAll("section:not(.auth-page)");
const footer = document.querySelector(".footer");

const signInHeaderButton = document.querySelector(".btn-signin");
const signUpHeaderButton = document.querySelector(".btn-signup");

function showAuthPage(pageId) {
    landingSections.forEach(section => {
        section.style.display = "none";
    });

    if (footer) {
        footer.style.display = "none";
    }

    authPages.forEach(page => {
        page.classList.remove("active");
    });

    const selectedPage = document.querySelector(pageId);

    if (selectedPage) {
        selectedPage.classList.add("active");
        window.scrollTo(0, 0);
    }
}

function showLandingSection(sectionId) {
    authPages.forEach(page => {
        page.classList.remove("active");
    });

    landingSections.forEach(section => {
        section.style.display = "";
    });

    if (footer) {
        footer.style.display = "";
    }

    setTimeout(() => {
        const section = document.querySelector(sectionId);

        if (section) {
            section.scrollIntoView({
                behavior: "smooth"
            });
        }
    }, 50);
}

if (signInHeaderButton) {
    signInHeaderButton.addEventListener("click", (event) => {
        event.preventDefault();
        showAuthPage("#signin");
    });
}

if (signUpHeaderButton) {
    signUpHeaderButton.addEventListener("click", (event) => {
        event.preventDefault();
        showAuthPage("#signup");
    });
}

document.querySelectorAll(".navbar nav a").forEach(link => {
    link.addEventListener("click", (event) => {
        event.preventDefault();

        const sectionId = link.getAttribute("href");

        showLandingSection(sectionId);
    });
});

document.querySelectorAll(".show-signin").forEach(link => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        showAuthPage("#signin");
    });
});

document.querySelectorAll(".show-signup").forEach(link => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        showAuthPage("#signup");
    });
});

document.querySelectorAll(".auth-password-toggle").forEach(button => {
    button.addEventListener("click", () => {
        const input = button.parentElement.querySelector("input");

        if (input.type === "password") {
            input.type = "text";
            button.innerHTML = '<i class="fa-regular fa-eye-slash"></i>';
        } else {
            input.type = "password";
            button.innerHTML = '<i class="fa-regular fa-eye"></i>';
        }
    });
});

const DEMO_EMAIL = "prueba@regula.com";
const DEMO_PASSWORD = "123456";

const signInForm = document.getElementById("signInForm");
const signInMessage = document.getElementById("signInMessage");

if (signInForm) {
    signInForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const email = document.getElementById("signinEmail").value.trim();
        const password = document.getElementById("signinPassword").value.trim();

        if (email === "" || password === "") {
            signInMessage.textContent = "Please complete all fields.";
            signInMessage.className = "auth-message error";
            return;
        }

        if (email === DEMO_EMAIL && password === DEMO_PASSWORD) {
            signInMessage.textContent = "Sign in successful";
            signInMessage.className = "auth-message success";

// Para conectar con el front end
    // setTimeout(() => {
    //     window.location.href = "";
    // }, 1000);

        } else {
            signInMessage.textContent = "Invalid email or password.";
            signInMessage.className = "auth-message error";
        }
    });
}

const signUpForm = document.getElementById("signUpForm");
const signUpMessage = document.getElementById("signUpMessage");

if (signUpForm) {
    signUpForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = document.getElementById("signupName").value.trim();
        const company = document.getElementById("signupCompany").value.trim();
        const email = document.getElementById("signupEmail").value.trim();
        const password = document.getElementById("signupPassword").value.trim();
        const confirmPassword = document.getElementById("signupConfirmPassword").value.trim();
        const termsCheck = document.getElementById("termsCheck").checked;

        if (name === "" || company === "" || email === "" || password === "" || confirmPassword === "") {
            signUpMessage.textContent = "Please complete all fields.";
            signUpMessage.className = "auth-message error";
            return;
        }

        if (password !== confirmPassword) {
            signUpMessage.textContent = "Passwords do not match.";
            signUpMessage.className = "auth-message error";
            return;
        }

        if (!termsCheck) {
            signUpMessage.textContent = "You must accept the terms and privacy policy.";
            signUpMessage.className = "auth-message error";
            return;
        }

        signUpMessage.textContent = "Account created successfully. You can now sign in.";
        signUpMessage.className = "auth-message success";

        setTimeout(() => {
            showAuthPage("#signin");
        }, 1300);
    });
}