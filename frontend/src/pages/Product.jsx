import React from 'react'
import '../styles/product.css'

export default function Product() {
  return (
    <div>
      <div class="container">
    <div class="sidebar">
        <h2 class="filter-heading">Filter Products</h2>
        <div class="filter-input">
            <label for="price-range">Price Range:</label>
            <input type="range" id="price-range" name="price-range" min="20000" max="500000" step="10000" value="20000">
            <div id="price-range-value" class="price-range-label">RS 20000 - RS 500000</div>
        </div>
        <div class="filter-input">
            <label>Category:</label><br>
            <input type="radio" id="lighting" name="category" class="category-input" value="lighting">
            <label for="lighting">Lighting</label><br>
            <input type="radio" id="backup-power" name="category" class="category-input" value="backup-power">
            <label for="backup-power">Backup Power Solution</label><br>
            <input type="radio" id="security-systems" name="category" class="category-input" value="security-systems">
            <label for="security-systems">Security Systems</label><br>
            <input type="radio" id="solar-panel" name="category" class="category-input" value="solar-panel">
            <label for="solar-panel">Solar Panel</label><br>
            <input type="radio" id="wiring" name="category" class="category-input" value="wiring">
            <label for="wiring">Wiring</label><br>
        </div>
        <button class="filter-btn" onclick="applyFilters()">Apply Filters</button>
    </div>
    <div class="products">
        <!-- Product items will be dynamically loaded here -->
    </div>
</div>

<script>
    const priceRangeInput = document.getElementById('price-range');
    const priceRangeValue = document.getElementById('price-range-value');

    priceRangeInput.addEventListener('input', () => {
        const selectedRange = priceRangeInput.value;
        priceRangeValue.textContent = `RS ${selectedRange} - RS 500000`;
    });

    function applyFilters() {
        const priceRange = document.getElementById('price-range').value;
        const category = document.querySelector('input[name="category"]:checked').value;

        // Use fetch or AJAX to fetch and display products based on the filters
        // Example:
        fetchProducts(priceRange, category);
    }

    function fetchProducts(priceRange, category) {
        // Fetch products based on the provided filters
        // Replace this with your actual API call or product fetching logic
        // Example:
        const products = [
            { name: 'Product 1', category: 'lighting', price: 50000, image: 'product1.jpg', discount: 10 },
            { name: 'Product 2', category: 'solar-panel', price: 100000, image: 'product2.jpg', discount: 15 },
            { name: 'Product 3', category: 'backup-power', price: 75000, image: 'product3.jpg', discount: 20 },
            // Add more products here
        ];

        displayProducts(products);
    }

    function displayProducts(products) {
        const productsContainer = document.querySelector('.products');
        productsContainer.innerHTML = ''; // Clear previous products

        products.forEach(product => {
            const productItem = document.createElement('div');
            productItem.classList.add('product-item');

            const productImage = document.createElement('img');
            productImage.src = product.image;
            productImage.alt = product.name;
            productItem.appendChild(productImage);

            const productName = document.createElement('h3');
            productName.textContent = product.name;
            productItem.appendChild(productName);

            const productCategory = document.createElement('p');
            productCategory.textContent = `Category: ${product.category}`;
            productItem.appendChild(productCategory);

            const productPrice = document.createElement('p');
            productPrice.textContent = `Price: RS ${product.price.toFixed(2)}`;
            productItem.appendChild(productPrice);

            if (product.discount > 0) {
                const discountBadge = document.createElement('div');
                discountBadge.classList.add('discount-badge');
                discountBadge.textContent = `-${product.discount}%`;
                productItem.appendChild(discountBadge);
            }

            productsContainer.appendChild(productItem);
        });
    }

    // Initial fetch or display all products when the page loads
    window.addEventListener('load', () => {
        fetchProducts(20000, ''); // Initial load with default filters
    });
</script>

    </div>
  )
}
