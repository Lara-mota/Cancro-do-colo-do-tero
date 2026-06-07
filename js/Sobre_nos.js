document.addEventListener("DOMContentLoaded", () => {

    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.style.boxShadow = "0 10px 25px rgba(92,63,163,0.2)";
        });

        card.addEventListener("mouseleave", () => {
            card.style.boxShadow = "0 5px 20px rgba(0,0,0,0.08)";
        });
    });

});