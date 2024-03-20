import React from 'react'
import '../adminStyles/productManager.css'

export default function Product() {
  return (
    <div className='maincontainer'>
      <div class="container">
    <h2>Add Product Details</h2>
    <form action="#" method="post" enctype="multipart/form-data">
        <div class="form-group">
            <label for="title">Product Title:</label>
            <input type="text" id="title" name="title" required/>
        </div>
        <div class="form-group">
            <label for="price">Product Price:</label>
            <input type="number" id="price" name="price" min="0" step="0.01" required/>
        </div>
        <div class="form-group">
            <label for="image">Product Image:</label>
            <input type="file" id="image" name="image" accept="image/*" required/>
        </div>
        <div class="form-group">
            <label for="discount">Product Discount:</label>
            <input type="number" id="discount" name="discount" min="0" max="100" step="1"/>
        </div>
        <div class="form-group">
            <label for="availability">Product Availability:</label>
            <select id="availability" name="availability" required>
                <option value="">Select Availability</option>
                <option value="In Stock">In Stock</option>
                <option value="Out of Stock">Out of Stock</option>
            </select>
        </div>
        <div class="form-group">
            <input type="submit" value="Submit"/>
        </div>
    </form>
</div>
    </div>
  )
}
