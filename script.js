// Navigasi Mobile (Burger Menu)
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Menampilkan Menu
        nav.classList.toggle('nav-active');

        // Animasi Link
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Animasi Burger menjadi Silang (X)
        burger.classList.toggle('toggle');
    });
}

// Sapaan otomatis berdasarkan waktu
const setGreeting = () => {
    const greetingElement = document.getElementById('greeting');
    const hour = new Date().getHours();
    let greetingText = 'Selamat Datang di Web Kelas!';

    if (hour >= 5 && hour < 12) {
        greetingText = 'Selamat Pagi, Tetap Semangat!';
    } else if (hour >= 12 && hour < 15) {
        greetingText = 'Selamat Siang, Jangan Lupa Istirahat!';
    } else if (hour >= 15 && hour < 18) {
        greetingText = 'Selamat Sore!';
    } else {
        greetingText = 'Selamat Malam, Waktunya Belajar!';
    }

    if(greetingElement) {
        greetingElement.innerText = greetingText;
    }
}

// Menjalankan fungsi saat halaman dimuat
navSlide();
setGreeting();
