// Function to calculate the total price
function calculateTotal() {
    let total = 0;
    document.querySelectorAll(".cart-item").forEach((item) => {
      const price = parseFloat(item.querySelector(".item-price").textContent.replace("$", ""));
      const quantity = parseInt(item.querySelector(".quantity").textContent);
      total += price * quantity;
    });
    document.querySelector(".total-price").textContent = "$" + total.toFixed(2);
  }
  
  // Add event listeners for "+" and "-" buttons to adjust quantity
  document.querySelectorAll(".cart-item").forEach((item) => {
    const plusButton = item.querySelector(".plus");
    const minusButton = item.querySelector(".minus");
    const quantityElement = item.querySelector(".quantity");
  
    plusButton.addEventListener("click", () => {
      let quantity = parseInt(quantityElement.textContent);
      quantityElement.textContent = ++quantity;
      calculateTotal();
    });
  
    minusButton.addEventListener("click", () => {
      let quantity = parseInt(quantityElement.textContent);
      if (quantity > 1) {
        quantityElement.textContent = --quantity;
        calculateTotal();
      }
    });
  });
  
  // Delete items from the cart
  document.querySelectorAll(".delete").forEach((deleteButton) => {
    deleteButton.addEventListener("click", (event) => {
      const item = event.target.closest(".cart-item");
      item.remove();
      calculateTotal();
    });
  });
  
  // Like items by clicking the heart button
  document.querySelectorAll(".heart").forEach((heartButton) => {
    heartButton.addEventListener("click", () => {
      heartButton.classList.toggle("liked");
    });
  });
  
  // Initial total calculation
  calculateTotal();
  