// 💰 التحكم في الثمن (غير هنا)
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
  // Hide loader
  document.getElementById("loader").style.display = "none";

  // Apply prices
  document.querySelectorAll(".price").forEach(el => {
    const key = el.dataset.price;
    el.textContent = PRICES[key] || "غير متوفر";
  });
});
