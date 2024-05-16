import React, { useState } from 'react'
import '../adminStyles/ProductManager.css'
import axios from 'axios'
import {getStorage, ref, uploadBytesResumable, getDownloadURL} from 'firebase/storage'
import { app } from '../../firebase'
import ProductTable from '../components/ProductTable'

export default function Product() {
  const [productTitle, setProductTitle] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productImage, setProductImage] = useState(null);
  const [productQty, setProductQty] = useState('');
  const [availability, setProductAvailability] = useState('');
  const [productDescription, setProductDescription] = useState('');

  const handleAddProduct = async (e) => {
    e.preventDefault();
    try {
      let imageUrl = ''; 
      if (productImage) {
        imageUrl = await handleImageUpload(productImage);
      }
      
      const product = await axios.post('https://itp-project-newton-api.vercel.app/product/products', {
        productTitle,
        productDescription,
        productPrice,
        productQty,
        availability,
        productImage: imageUrl, 
      });
      if (product.status === 200) {
        console.log(product);
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleImageUpload = async (image) => {
    try {
      const storage = getStorage(app);
      const fileName = new Date().getTime() + image.name;
      const storageRef = ref(storage, `products/${fileName}`);
      const uploadTask = uploadBytesResumable(storageRef, image);
      await uploadTask;
      const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
      return downloadURL; 
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='container pt-8 pl-8'>
      <div>
        <div className='maincontainer'>
          <div class="containerprod">
            <h2>Add Product Details</h2>
            <form onSubmit={handleAddProduct} encType="multipart/form-data">
              <div class="form-group">
                <label for="title">Product Title:</label>
                <input type="text" id="title" onChange={(e) => setProductTitle(e.target.value)} name="title" required />
              </div>
              <div class="form-group">
                <label for="title">Product Description:</label>
                <input type="text" id="title" onChange={(e) => setProductDescription(e.target.value)} name="title" required />
              </div>
              <div class="form-group">
                <label for="price">Product Price:</label>
                <input type="text" id="price" name="price" onChange={(e) => setProductPrice(e.target.value)} required />
              </div>
              <div class="form-group">
                <label for="image">Product Image:</label>
                <input type="file" id="image" name="image" onChange={(e) => setProductImage(e.target.files[0])} accept="image/*" />
              </div>
              <div class="form-group">
                <label for="discount">Product Quantity:</label>
                <input type="number" id="proquntiy" name="proquntiy" onChange={(e) => setProductQty(e.target.value)} min="0" max="100" step="1" />
              </div>
              <div class="form-group">
                <label for="availability">Product Availability:</label>
                <select id="availability" value={availability} onChange={(e) => setProductAvailability(e.target.value)} name="availability" required>
                  <option value="">Select Availability</option>
                  <option value="In Stock">In Stock</option>
                  <option value="Out of Stock">Out of Stock</option>
                </select>
              </div>
              <div class="form-group">
                <div className='prosubbtns'>
                <input type="submit" value="Submit" />
                </div>
                
              </div>
            </form>
          </div>
          <ProductTable/>

        </div>
      </div>
    </div>
  );
}
