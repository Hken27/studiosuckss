document.addEventListener('DOMContentLoaded', function() {
    // Hamburger Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const mainNav = document.querySelector('.main-nav');
    const navLinks = document.querySelectorAll('.nav-link');

    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        mainNav.classList.toggle('active');
        document.body.style.overflow = mainNav.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu when clicking on nav links
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            mainNav.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.hamburger') && !e.target.closest('.main-nav')) {
            hamburger.classList.remove('active');
            mainNav.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Scroll reveal animation
    const galleryItems = document.querySelectorAll('.gallery-img');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    galleryItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'all 0.6s ease';
        observer.observe(item);
    });
});

// Auto-slide hanya di mobile/tablet
function initSlideshow() {
    const gallery = document.querySelector('.gallery');
    const images = gallery.querySelectorAll('img');
    let currentIndex = 0;
    let slideInterval;

    function startSlideshow() {
        if (window.innerWidth >= 1024) return; // Stop di desktop

        slideInterval = setInterval(() => {
            currentIndex = (currentIndex + 1) % images.length;
            gallery.scrollTo({
                left: currentIndex * window.innerWidth,
                behavior: 'smooth'
            });
        }, 1500); // 1.5 detik per slide (bisa diubah ke 500ms jika diinginkan)
    }

    // Responsive control
    window.addEventListener('resize', () => {
        clearInterval(slideInterval);
        if (window.innerWidth < 1024) startSlideshow();
    });

    // Init
    if (window.innerWidth < 1024) startSlideshow();
}

// Jalankan saat halaman dimuat
document.addEventListener('DOMContentLoaded', initSlideshow);