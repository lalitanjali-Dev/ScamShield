document.addEventListener("DOMContentLoaded", function () {
    console.log("Scam Types page loaded successfully.");
});
// SCAM SEARCH

const scamSearch = document.getElementById("scamSearch");
const scamCards = document.querySelectorAll(".scam-card");

scamSearch.addEventListener("input", function () {

    const searchText = scamSearch.value.toLowerCase().trim();

    scamCards.forEach(function (card) {

        const cardText = card.textContent.toLowerCase();

        if (cardText.includes(searchText)) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }

    });

});