document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.item');
    const totalPriceElement = document.querySelector('.total-price');
  
    let totalPrice = parseInt(totalPriceElement.textContent);
  
    items.forEach(item => {
      const decrementBtn = item.querySelector('.decrement');
      const incrementBtn = item.querySelector('.increment');
      const removeBtn = item.querySelector('.remove');
      const likeBtn = item.querySelector('.like');
      const quantityElement = item.querySelector('.quantity');
      const price = 10; // Prix de chaque article
  
      decrementBtn.addEventListener('click', function() {
        let quantity = parseInt(quantityElement.textContent);
        if (quantity > 0) {
          quantity--;
          quantityElement.textContent = quantity;
          totalPrice -= price;
          totalPriceElement.textContent = totalPrice;
        }
      });
  
      incrementBtn.addEventListener('click', function() {
        let quantity = parseInt(quantityElement.textContent);
        quantity++;
        quantityElement.textContent = quantity;
        totalPrice += price;
        totalPriceElement.textContent = totalPrice;
      });
  
      removeBtn.addEventListener('click', function() {
        let quantity = parseInt(quantityElement.textContent);
        totalPrice -= price * quantity;
        totalPriceElement.textContent = totalPrice;
        quantityElement.textContent = 0;
      });
  
      likeBtn.addEventListener('click', function() {
        likeBtn.classList.toggle('active');
      });
    });
  });
  