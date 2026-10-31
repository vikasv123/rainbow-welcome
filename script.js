
const celebrateBtn = document.getElementById("celebrateBtn");

const thanksMessage = document.getElementById("thanksMessage");

celebrateBtn.addEventListener("click", function() {

    thanksMessage.style.display = "block";

    celebrateBtn.innerText = "Thank You! ❤️";

});
