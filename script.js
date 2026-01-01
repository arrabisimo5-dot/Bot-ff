const PRICES = {
  monthly: "95 MAD",
  weekly: "25 MAD",
  booyah: "20 MAD",
  prime1: "X MAD",
  prime2: "X MAD",
  prime3: "X MAD",
  prime4: "20 MAD"
};

window.addEventListener("load", () => {
  document.getElementById("loader").style.display = "none";

  document.querySelectorAll(".price").forEach(el => {
    el.textContent = PRICES[el.dataset.price] || "غير متوفر";
  });
});
