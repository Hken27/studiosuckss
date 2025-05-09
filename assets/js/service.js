document.querySelectorAll(".service-item").forEach(item => {
    const descText = item.getAttribute("data-desc");
    item.querySelector(".desc").textContent = descText;
});