const title = document.getElementById('stickyTitle');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) { // Mulai efek setelah scroll 100px
        title.classList.add('scaled');
    } else {
        title.classList.remove('scaled');
    }
});
document.querySelectorAll(".service-item").forEach(item => {
    const descText = item.getAttribute("data-desc");
    item.querySelector(".desc").textContent = descText;
});