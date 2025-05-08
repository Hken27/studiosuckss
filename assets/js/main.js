document.addEventListener('DOMContentLoaded', () => {
    const preloader = document.getElementById('preloader');
    const chars = preloader.querySelectorAll('.char');

    // Step 1: Drop-in (jatuh dari atas) satu per satu
    gsap.to(chars, {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "back.out(1.7)",
        stagger: 0.05,
        delay: 0.5
    });

    // Step 2: Smooth scale-up (membesar)
    setTimeout(() => {
        gsap.to(chars, {
            scale: 1.3,
            duration: 1,
            ease: "power2.inOut"
        });
    }, 2000);

    // Step 3: Hancurkan dengan efek "diremas"
    setTimeout(() => {
        gsap.to(chars, {
            scale: 0.3,
            rotate: 180,
            opacity: 0,
            x: () => gsap.utils.random(-300, 300),
            y: () => gsap.utils.random(-300, 300),
            duration: 1.2,
            ease: "power4.inOut",
            stagger: 0.03
        });
    }, 3200);

    // Step 4: Sembunyikan preloader dan tampilkan hero
    setTimeout(() => {
        gsap.to(preloader, {
            opacity: 0,
            duration: 0.8,
            onComplete: () => {
                preloader.style.display = "none";
                gsap.to(hero, {
                    opacity: 1,
                    duration: 1,
                    ease: "power2.out"
                });
            }
        });
    }, 4500);

});

// navigasi ke hero
setTimeout(function() {
    window.location.href = "hero.html";
}, 3000); // 3000 milidetik = 3 detik