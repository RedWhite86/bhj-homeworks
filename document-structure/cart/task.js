const decButtonArr = Array.from(document.getElementsByClassName('product__quantity-control_dec'));
const incButtonArr = Array.from(document.getElementsByClassName('product__quantity-control_inc'));
const addCartBtn = Array.from(document.getElementsByClassName('product__add'));
let cart = document.querySelector('.cart__products');

decButtonArr.forEach((btn) => btn.addEventListener('click', (e) => {
  let targetValue = e.target.nextElementSibling;
  targetValue.textContent > 1 ? targetValue.textContent-- : targetValue.textContent = 1;
}));

incButtonArr.forEach((btn) => btn.addEventListener('click', (e) => {
  let targetValue = e.target.previousElementSibling;
  targetValue.textContent++;
}));

addCartBtn.forEach((btn) => btn.addEventListener('click', (e) => {
  let itemId = e.target.closest('.product').dataset.id;
  let itemImg = e.target.closest('.product').querySelector('.product__image').src;
  let count = e.target.closest('.product').querySelector('.product__quantity-value').textContent;
  let products = Array.from(document.getElementsByClassName('cart__product'));
  let productInCart = false;

  products.forEach((product) => {
    if (product.getAttribute('data-id') === itemId) {
      product.querySelector('.cart__product-count').textContent = parseInt(product.querySelector('.cart__product-count').textContent) + parseInt(count);
      productInCart = true;
    }
  });

  if (!productInCart) {
    cart.innerHTML += `<div class="cart__product" data-id=` + itemId + `>
      <img class="cart__product-image" src=`+ itemImg + `>
      <div class="cart__product-count">` + count + `</div>
      </div>`
  }
}));