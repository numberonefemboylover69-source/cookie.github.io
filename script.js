
// Create animated stars
const stars = document.getElementById("stars");

for (let i = 0; i < 250; i++) {
    const star = document.createElement("span");

    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";

    const size = Math.random() * 3 + 1;
    star.style.width = size + "px";
    star.style.height = size + "px";

    star.style.animationDelay = (Math.random() * 5) + "s";
    star.style.animationDuration = (2 + Math.random() * 5) + "s";

    stars.appendChild(star);
}

// Mouse glow
const glow = document.createElement("div");
glow.className = "mouse-glow";
document.body.appendChild(glow);

document.addEventListener("mousemove", (e) => {
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
});
