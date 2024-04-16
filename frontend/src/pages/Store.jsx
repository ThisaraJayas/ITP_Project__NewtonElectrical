import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from '../components/Footer'
import "../styles/store.css";
import axios from "axios";

export default function Store() {
  const [products, setProduct]=useState([])
console.log(products);
    useEffect(()=>{
        const allProducts = async()=>{
            try{
                const product = await axios.get('http://localhost:3000/product/products')
                setProduct(product.data.products) 
            }catch(error){
                console.log(error);
            }
        }
        allProducts()
    })
  return (
    <div>
      <Header />
      <div className="pt-20 pb-20 flex justify-between">
        <div className="">
          <div class="sidebarCard ml-8">
            <h2 class="sidebarTitle">Filter by Category</h2>
            <ul class="categoryList">
              <li class="categoryItem">Electrical Tools</li>
              <li class="categoryItem">Lightings</li>
              <li class="categoryItem">Security Systems</li>
              <li class="categoryItem">Wiring Items</li>
              <li class="categoryItem">Solar Pannel</li>
            </ul>
          </div>
        </div>
        
        <div className="cardContents ml-9 mr-9">
          <div class="grid grid-cols-3 gap-10">
          {products.map((products,index)=>(
          <div key={index} class="item-card">
          <div class="item-image">
            <img
              src={products.productImage}
              alt="Product Image"
            />
          </div>
          <div class="item-details">
            <h2 class="itemName">{products.productTitle}</h2>
            <div class="item-price">{products.productPrice}</div>
            <div className="btnSection flex justify mt-4">
              <button class="addToCartBtn">Add to Cart</button>
              <button class="buyNowBtn  ml-3">Buy Now</button>
            </div>
          </div>
        </div>
        ))}
            
            
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
