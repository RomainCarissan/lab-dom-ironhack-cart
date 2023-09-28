// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector(".price span").innerHTML;
  const quantity = product.querySelector(".quantity input").value;

  console.log(typeof price);
  console.log(quantity);

  const priceXquantity = price * quantity;
  console.log("Calculating subtotal, yey!");

  const subTotal = product.querySelector(".subtotal span");

  console.log(subTotal);

  subTotal.innerHTML = priceXquantity;

  return priceXquantity;
}

function calculateAll() {
  // ITERATION 2

  let finalPrice = 0;
  const products = document.getElementsByClassName("product");

  for (let i = 0; i < products.length; i++) {
    finalPrice += updateSubtotal(products[i]);
  }

  // ITERATION 3

  const total = document.querySelector("#total-value span");
  total.innerHTML = finalPrice;
}

// ITERATION 4
window.addEventListener("load", () => {
  const removeButtons = document.querySelectorAll(".action");
  removeButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const target = event.currentTarget.closest(".product");
      target.remove();
      calculateAll();
    });
  });
});

// ITERATION 5

function createProduct() {
  //... your code goes here
  const newName = document.querySelector("create-product input[type='text']");
  const newQuantity = document.querySelector(
    "create-product input[type='number']"
  );
  console.log(newName);
  console.log(newQuantity);

  const newPriceTimesQuantity = price * quantity;
  console.log("Calculating subtotal, yey!");

  const subTotal = product.querySelector(".subtotal span");

  console.log(subTotal);

  subTotal.innerHTML = priceXquantity;

  return priceXquantity;
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);
  //... your code goes here
});

window.addEventListener("load", () => {
  const creatProductBtn = document.getElementById("create");
  creatProductBtn.addEventListener("click", createProduct);
});
