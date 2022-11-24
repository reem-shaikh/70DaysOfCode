

const checkout = document.querySelector(".checkout");
const chooseBtn = document.querySelectorAll(".choose__btn");

chooseBtn.forEach((item) => {
  item.addEventListener("click", showCheckout);
});

function showCheckout(e) {
  removeSelected();
  checkout.style.transform = "translateY(0)";
  e.target.parentElement.classList.add("selected");

  console.log(e.target.parentElement.childNodes);
  const product = e.target.parentElement.childNodes[3].innerHTML;
  const price = e.target.parentElement.childNodes[7].innerHTML;

  checkout.innerHTML = `
<div class="total__price">
  <div class="selection"><span>${product}</span><span>${price}</span></div>
  <div class="selection"><span>Delivery</span><span>Select before paying</span></div>
  <div class="total"><span>Total</span><span>${price}</span></div>

  <button class="checkout__btn">Checkout</button>
</div>

<a href="#/" class="close__btn"><i class="fas fa-times"></i></a>
`;

  const closeBtn = document.querySelector(".close__btn");
  closeBtn.addEventListener("click", hideCheckout);
}

function hideCheckout() {
  checkout.style.transform = "translateY(100%)";
  removeSelected();
}

function removeSelected() {
  const selectedElements = document.querySelectorAll(".selected");
  selectedElements.forEach((item) => {
    item.classList.remove("selected");
  });
}