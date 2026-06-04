/* Portfolio — Metal Karagül */

const translations = {
    de: {
        introHeader: "Hallo",
        introText: "In der Welt der IT, wie im Wunderland, gibt es unzählige Türen zu entdecken, und als Frau habe ich den Mut, jede davon zu öffnen.",
        whoAmIHeader: "Wer bin ich",
        whoAmIText: "Hallo, ich bin Metal Karagül, zweifache Mutter und leidenschaftliche Entwicklerin, die mit 40 Jahren den Schritt in die IT-Branche gewagt hat.",
        whatIDo: "Mit einer positiven Einstellung und dem Mut, mich immer wieder neuen Herausforderungen zu stellen, verfolge ich meine Ziele mit Entschlossenheit und Kreativität. Ich freue mich darauf, mein Wissen und meine Fähigkeiten in spannende Projekte einzubringen und stetig zu wachsen.",
        experienceInIt: "Die Welt der Anwendungsentwicklung hat mich von Anfang an fasziniert, und seither habe ich mich auf verschiedene Programmiersprachen wie Java, Python, C++, PHP, HTML, CSS und JavaScript spezialisiert. Ich bin stets motiviert, Neues zu lernen und mich weiterzuentwickeln, um moderne und innovative Lösungen zu gestalten.",
        menuWhoAmI: "Wer bin ich",
        menuWhatIDo: "Was mache ich",
        menuExperience: "IT Erfahrung",
        menuContact: "Kontakt",
        menuProjects: "Projekte",
        projectsTitle: "Meine Projekte",
        projectsDesc: "Weitere Projekte auf GitHub — von Python-Anwendungen bis hin zu Web-Experimenten.",
        contactMenu: "Sag Hallo",
        contactInfo: "Schreib mir doch gerne eine Nachricht — ich freue mich darauf, von dir zu hören!",
    },
    en: {
        introHeader: "Hello",
        introText: "In the world of IT, like in Wonderland, there are countless doors to discover, and as a woman, I have the courage to open each one of them.",
        whoAmIHeader: "Who am I",
        whoAmIText: "Hello, I am Metal Karagül, a mother of two and a passionate developer who took the step into the IT industry at the age of 40.",
        whatIDo: "With a positive attitude and the courage to constantly face new challenges, I pursue my goals with determination and creativity. I look forward to contributing my knowledge and skills to exciting projects and continuously growing.",
        experienceInIt: "The world of application development has fascinated me from the very beginning, and since then, I have specialized in various programming languages such as Java, Python, C++, PHP, HTML, CSS, and JavaScript. I am always motivated to learn new things and continue to develop myself in order to create modern and innovative solutions.",
        menuWhoAmI: "Who am I",
        menuWhatIDo: "What I do",
        menuExperience: "IT Experience",
        menuContact: "Contact",
        menuProjects: "Projects",
        projectsTitle: "My Projects",
        projectsDesc: "More projects on GitHub — from Python applications to web experiments.",
        contactMenu: "Say Hello",
        contactInfo: "Feel free to send me a message — I look forward to hearing from you!",
    },
    tr: {
        introHeader: "Merhaba",
        introText: "Bilişim dünyasında, tıpkı Harikalar Diyarı'ndaki gibi, keşfedilecek sayısız kapı var ve bir kadın olarak her birini açma cesaretine sahibim.",
        whoAmIHeader: "Ben kimim",
        whoAmIText: "Merhaba, ben Metal Karagül, iki çocuk annesi ve 40 yaşında bilişim sektörüne adım atan tutkulu bir geliştiriciyim.",
        whatIDo: "Pozitif bir tutum ve sürekli yeni zorluklarla yüzleşme cesaretiyle, hedeflerimi kararlılık ve yaratıcılıkla takip ediyorum. Bilgimi ve yeteneklerimi heyecan verici projelere dahil etmeyi ve sürekli olarak büyümeyi dört gözle bekliyorum.",
        experienceInIt: "Uygulama geliştirme dünyası beni en başından beri büyülemiştir ve o zamandan beri Java, Python, C++, PHP, HTML, CSS ve JavaScript gibi çeşitli programlama dillerinde uzmanlaştım. Modern ve yenilikçi çözümler oluşturmak için her zaman yeni şeyler öğrenmeye ve kendimi geliştirmeye motiveyim.",
        menuWhoAmI: "Ben Kimim",
        menuWhatIDo: "Ne Yapıyorum",
        menuExperience: "BT Deneyimi",
        menuContact: "İletişim",
        menuProjects: "Projeler",
        projectsTitle: "Projelerim",
        projectsDesc: "GitHub'daki diğer projeler — Python uygulamalarından web denemelerine kadar.",
        contactMenu: "Merhaba de",
        contactInfo: "Bana bir mesaj yazmaktan çekinme — senden haber almayı sabırsızlıkla bekliyorum!",
    }
};

function switchLanguage() {
    const lang = document.getElementById("languageSwitcher").value;
    const t = translations[lang];

    document.getElementById("heroGreeting").textContent = t.introHeader;
    document.getElementById("heroTagline").textContent = t.introText;
    document.getElementById("aboutTitle").textContent = t.whoAmIHeader;
    document.getElementById("aboutText").textContent = t.whoAmIText;
    document.getElementById("missionText").textContent = t.whatIDo;
    document.getElementById("skillsTitle").textContent = t.menuExperience;
    document.getElementById("skillsDesc").textContent = t.experienceInIt;
    document.getElementById("projectsTitle").textContent = t.projectsTitle;
    document.getElementById("projectsDesc").textContent = t.projectsDesc;
    document.getElementById("contactTitle").textContent = t.contactMenu;
    document.getElementById("contactDesc").textContent = t.contactInfo;

    document.querySelectorAll("[data-nav]").forEach(function(el) {
        var key = el.dataset.nav;
        if (t[key]) el.textContent = t[key];
    });
}

document.addEventListener("DOMContentLoaded", function() {
    switchLanguage();

    // Fade-up on scroll
    var fadeObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });

    document.querySelectorAll(".fade-up").forEach(function(el) {
        fadeObserver.observe(el);
    });

    // Navbar: scrolled state
    var navbar = document.getElementById("navbar");
    window.addEventListener("scroll", function() {
        if (window.scrollY > 24) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    }, { passive: true });

    // Hamburger menu
    var hamburger = document.getElementById("navHamburger");
    var mobileMenu = document.getElementById("navMobile");

    if (hamburger && mobileMenu) {
        hamburger.addEventListener("click", function() {
            hamburger.classList.toggle("open");
            mobileMenu.classList.toggle("open");
        });

        mobileMenu.querySelectorAll("a").forEach(function(link) {
            link.addEventListener("click", function() {
                hamburger.classList.remove("open");
                mobileMenu.classList.remove("open");
            });
        });
    }

    // Active section highlight in navbar
    var navLinks = document.querySelectorAll(".nav-links a[href^='#']");

    var sectionObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                var id = entry.target.id;
                navLinks.forEach(function(link) {
                    link.classList.remove("active");
                    if (link.getAttribute("href") === "#" + id) {
                        link.classList.add("active");
                    }
                });
            }
        });
    }, { threshold: 0.45 });

    document.querySelectorAll("section[id]").forEach(function(sec) {
        sectionObserver.observe(sec);
    });

    // 3D tilt effect on showcase cards
    document.querySelectorAll(".sc-card").forEach(function(card) {
        card.addEventListener("mousemove", function(e) {
            var rect = card.getBoundingClientRect();
            var x = (e.clientX - rect.left) / rect.width  - 0.5;
            var y = (e.clientY - rect.top)  / rect.height - 0.5;
            card.style.transform = "perspective(600px) rotateY(" + (x * 14) + "deg) rotateX(" + (-y * 10) + "deg) scale(1.02)";
        });
        card.addEventListener("mouseleave", function() {
            card.style.transform = "perspective(600px) rotateY(0deg) rotateX(0deg) scale(1)";
        });
    });
});

// Mobile menu translations
var _origSwitch = switchLanguage;
switchLanguage = function() {
    _origSwitch();
    var lang = document.getElementById("languageSwitcher").value;
    var t = translations[lang];
    document.querySelectorAll("[data-nav-mobile]").forEach(function(el) {
        var key = el.dataset.navMobile;
        if (t[key]) el.textContent = t[key];
    });
};

// Gallery lightbox
(function($) {
    $(window).on('load', function() {
        var $gallery = $('.gallery');
        if ($gallery.length) {
            $gallery.poptrox({
                baseZIndex: 10001,
                useBodyOverflow: false,
                usePopupEasyClose: true,
                overlayColor: '#08080f',
                overlayOpacity: 0.88,
                usePopupDefaultStyling: false,
                usePopupCaption: true,
                popupLoaderText: '',
                windowMargin: 50,
                usePopupNav: true
            });
        }
    });
})(jQuery);
