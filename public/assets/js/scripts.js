const translations = {
    es: {
        nav_home: "Inicio",
        nav_about: "Nosotros",
        nav_features: "Beneficios",
        nav_pricing: "Precios",
        nav_faq: "Preguntas Frecuentes",
        nav_contact: "Contacto",
        nav_terms: "Términos y Condiciones",
        hero_title: "Sistema Inteligente<br>de Monitoreo de<br>Balones de Gas",
        hero_desc: "Monitorea el inventario, optimiza la distribución y responde a incidentes desde una sola plataforma inteligente.",
        btn_demo: "Iniciar App <i class='fa-solid fa-arrow-right'></i>",
        btn_video: "<i class='fa-regular fa-circle-play'></i> Ver video introductorio",
        features_title: "BENEFICIOS",
        f1: "Control de inventario",
        f2: "Gestión de distribución",
        f3: "Prevención de fugas",
        faq_title: "Preguntas Frecuentes",
        faq_1: "¿Regula detecta fugas de gas en tiempo real?",
        faq_2: "¿Qué procesos puedo gestionar desde la plataforma?",
        faq_3: "¿Regula es adecuado para distribuidores pequeños?",
        faq_4: "¿Puedo rastrear a los repartidores en tiempo real?",
        faq_5: "¿Puedo registrar clientes que compran a crédito?",
        footer_desc: "Monitoreo inteligente y control operativo<br>para distribuidoras y empresas de almacenamiento de gas.",
        footer_nav: "Navegación",
        footer_legal: "Legal",
        footer_copy: "Todos los derechos reservados © 2026 Regula"
    },
    en: {
        nav_home: "Home",
        nav_about: "About Us",
        nav_features: "Benefits",
        nav_pricing: "Pricing",
        nav_faq: "FAQ",
        nav_contact: "Contact",
        nav_terms: "Terms and Conditions",
        hero_title: "Intelligent Gas<br>Cylinder<br>Monitoring System",
        hero_desc: "Monitor inventory, optimize distribution, and respond to incidents from one intelligent platform.",
        btn_demo: "Start App <i class='fa-solid fa-arrow-right'></i>",
        btn_video: "<i class='fa-regular fa-circle-play'></i> Watch introductory video",
        features_title: "BENEFITS",
        f1: "Inventory control",
        f2: "Distribution management",
        f3: "Gas leak prevention",
        faq_title: "Frequently Asked Questions",
        faq_1: "Does Regula detect gas leaks in real time?",
        faq_2: "What processes can I manage from the platform?",
        faq_3: "Is Regula suitable for small distributors?",
        faq_4: "Can I track delivery drivers in real time?",
        faq_5: "Can I register customers who buy on credit?",
        footer_desc: "Smart monitoring and operational control<br>for gas distributors and storage companies.",
        footer_nav: "Navigation",
        footer_legal: "Legal",
        footer_copy: "All rights reserved © 2026 Regula"
    }
};

let currentLang = "en";

const langToggleBtn = document.getElementById("langToggle");

if (langToggleBtn) {
    langToggleBtn.innerText = "ES";

    langToggleBtn.addEventListener("click", () => {
        currentLang = currentLang === "en" ? "es" : "en";
        langToggleBtn.innerText = currentLang === "en" ? "ES" : "EN";
        translate();
    });
}

function translate() {
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");

        if (translations[currentLang][key]) {
            el.innerHTML = translations[currentLang][key];
        }
    });
}
