
import React, { useEffect, useState } from 'react';
import '../styles/product.css';

export default function Inventory() {
    const [priceRange, setPriceRange] = useState(20000);
    const [category, setCategory] = useState('');

    useEffect(() => {
        const priceRangeInput = document.getElementById('price-range');
        const priceRangeValue = document.getElementById('price-range-value');

        priceRangeInput.addEventListener('input', () => {
            const selectedRange = priceRangeInput.value;
            priceRangeValue.textContent = `RS ${selectedRange} - RS 500000`;
        });

        return () => {
            priceRangeInput.removeEventListener('input', () => {});
        };
    }, []);

    const applyFilters = () => {
        const priceRange = document.getElementById('price-range').value;
        const category = document.querySelector('input[name="category"]:checked').value;

        // Use fetch or AJAX to fetch and display products based on the filters
        // Example:
        fetchProducts(priceRange, category);
    };

    const fetchProducts = (priceRange, category) => {
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
    };

    const displayProducts = (products) => {
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
    };

    return (
        <div>
            <div className="container">
                <div className="sidebar">
                    <h2 className="filter-heading">Filter Products</h2>
                    <div className="filter-input">
                        <label htmlFor="price-range">Price Range:</label>
                        <input type="range" id="price-range" name="price-range" min="20000" max="500000" step="10000" value={priceRange} />
                        <div id="price-range-value" className="price-range-label">RS {priceRange} - RS 500000</div>
                    </div>
                    <div className="filter-input">
                        <label>Category:</label><br />
                        <input type="radio" id="lighting" name="category" className="category-input" value="lighting" />
                        <label htmlFor="lighting">Lighting</label><br />
                        <input type="radio" id="backup-power" name="category" className="category-input" value="backup-power" />
                        <label htmlFor="backup-power">Backup Power Solution</label><br />
                        <input type="radio" id="security-systems" name="category" className="category-input" value="security-systems" />
                        <label htmlFor="security-systems">Security Systems</label><br />
                        <input type="radio" id="solar-panel" name="category" className="category-input" value="solar-panel" />
                        <label htmlFor="solar-panel">Solar Panel</label><br />
                        <input type="radio" id="wiring" name="category" className="category-input" value="wiring" />
                        <label htmlFor="wiring">Wiring</label><br />
                    </div>
                    <button className="filter-btn" onClick={applyFilters}>Apply Filters</button>
                </div>
                <div className="products">
                    {/* Product items will be dynamically loaded here */}
                </div>
            </div>
        </div>
    );
}