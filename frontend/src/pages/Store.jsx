import React from "react";
import Header from "../components/Header";
import "../styles/store.css";

export default function Store() {
  return (
    <div>
      <Header />
      <div className="pt-20 flex justify-between">
        <div className="">
          <div class="sidebarCard ml-8">
            <h2 class="sidebarTitle">Filter by Category</h2>
            <ul class="categoryList">
              <li class="categoryItem">Category 1</li>
              <li class="categoryItem">Category 2</li>
              <li class="categoryItem">Category 3</li>
              <li class="categoryItem">Category 4</li>
              <li class="categoryItem">Category 5</li>
            </ul>
          </div>
        </div>
        <div className="cardContents ml-9 mr-9">
          <div class="grid grid-cols-3 gap-10">
            <div class="item-card">
              <div class="item-image">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Product Image"
                />
              </div>
              <div class="item-details">
                <h2 class="itemName">Product Name</h2>
                <div class="item-price">LKR 19.99</div>
                <div className="btnSection flex justify mt-4">
                  <button class="addToCartBtn">Add to Cart</button>
                  <button class="buyNowBtn  ml-3">Buy Now</button>
                </div>
              </div>
            </div>
            <div class="item-card">
              <div class="item-image">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Product Image"
                />
              </div>
              <div class="item-details">
                <h2 class="itemName">Product Name</h2>
                <div class="item-price">LKR 19.99</div>
                <div className="btnSection flex justify mt-4">
                  <button class="addToCartBtn">Add to Cart</button>
                  <button class="buyNowBtn  ml-3">Buy Now</button>
                </div>
              </div>
            </div>
            <div class="item-card">
              <div class="item-image">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Product Image"
                />
              </div>
              <div class="item-details">
                <h2 class="itemName">Product Name</h2>
                <div class="item-price">LKR 19.99</div>
                <div className="btnSection flex justify mt-4">
                  <button class="addToCartBtn">Add to Cart</button>
                  <button class="buyNowBtn  ml-3">Buy Now</button>
                </div>
              </div>
            </div>
            <div class="item-card">
              <div class="item-image">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Product Image"
                />
              </div>
              <div class="item-details">
                <h2 class="itemName">Product Name</h2>
                <div class="item-price">LKR 19.99</div>
                <div className="btnSection flex justify mt-4">
                  <button class="addToCartBtn">Add to Cart</button>
                  <button class="buyNowBtn  ml-3">Buy Now</button>
                </div>
              </div>
            </div>
            <div class="item-card">
              <div class="item-image">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Product Image"
                />
              </div>
              <div class="item-details">
                <h2 class="itemName">Product Name</h2>
                <div class="item-price">LKR 19.99</div>
                <div className="btnSection flex justify mt-4">
                  <button class="addToCartBtn">Add to Cart</button>
                  <button class="buyNowBtn  ml-3">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
