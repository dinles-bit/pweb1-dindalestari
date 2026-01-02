// Fitur 1: Efek Mengetik di Home
const text = "Dinda Lestari";
let i = 0;

function typing() {
    if (i < text.length) {
        document.querySelector(".typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 150);
    }
}

// Fitur 2: Dark Mode Toggle sederhana
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    // Ganti icon
    const icon = themeToggle.querySelector('i');
    icon.classList.toggle('fa-sun');
});

// Jalankan fungsi saat window dimuat
window.onload = typing;
function toggleDetail() {
    const detail = document.getElementById("detailProfil");
    detail.style.display = detail.style.display === "block" ? "none" : "block";
}
window.addEventListener("load", () => {
    document.getElementById("loading").style.display = "none";
});
function openPopup(src) {
    document.getElementById("popup").style.display = "flex";
    document.getElementById("popupImg").src = src;
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}
document.getElementById("darkToggle").onclick = () => {
    document.body.classList.toggle("dark");
};
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        if (top >= offset && top < offset + height) {
            current = sec.getAttribute("id");
        }
    });

    navLinks.forEach(a => {
        a.classList.remove("active");
        if (a.getAttribute("href") === "#" + current) {
            a.classList.add("active");
        }
    });
});
const reveal = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {
    reveal.forEach(sec => {
        const top = window.innerHeight - 100;
        if (sec.getBoundingClientRect().top < top) {
            sec.classList.add("show");
        }
    });
});
document.getElementById("year").innerText = new Date().getFullYear();
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            alert("Pesan berhasil dikirim!\nTerima kasih 😊");

            form.reset();
        });
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Pesan berhasil dikirim!\nTerima kasih sudah menghubungi saya 😊");
        form.reset();
    });
});