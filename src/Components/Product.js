import { useState, useEffect } from "react";
import "./Product.css";


function Product() {
  const [products, setProducts] = useState([]);
  const [initialProducts, setInitialProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products`);
        const data = await response.json();
        console.log(data.products);
        setProducts(data.products);
        setInitialProducts(data.products)
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const sortProducts = (option) => {
    let sortedProducts = [...products];

    if (option === "title") {
      sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
    } else if (option === "price") {
      sortedProducts.sort((a, b) => a.price - b.price);
    }

    setProducts(sortedProducts);
  };
 

  const resetProducts = (e) => {
    e.stopPropagation();
    setProducts(initialProducts);
  };

  return (

   <>
   <button className="button-25 btn" onClick={resetProducts}>
                    Reset
                  </button>
   <div>
  <label htmlFor="productSort">Sort By:</label>
  <select
    name="productSort"
    id="productSort"
    onChange={(e) => sortProducts(e.target.value)}
  >
  <option value='choose'>Choose</option>
    <option value="title">Name</option>
    <option value="price">Price</option>
   
  </select>
</div>

    <div className="product-container">
      {products.map((product)=>
      <div className="product-card">
      <div className="thumbnail">
        <img src={product.thumbnail} alt="Product Thumbnail"/>
      </div>
      <div className="product-details">
        <h3 className="product-title">{product.title}</h3>
        <p className="product-description">{product.description}</p>
        <p className="product-price">${product.price}</p>
        <p className="product-discount">{product.discountPercentage}% off</p>
        <div className="rating">

          <span className="rating-value">⭐⭐⭐⭐{product.rating}</span>
        </div>
        <p className="product-stock">In Stock: {product.stock}</p>
        <p className="product-brand">Brand: {product.brand}</p>
        <p className="product-category">Category: {product.category}</p>
      </div>
      <div className="product-images">
        <img src={product.images[0]} alt="Product Images 1"/>
        <img src={product.images[1]}  alt="Product Images 2"/>
        
        <img src={product.images[2]} alt="Product Images 3"/>
      </div>
    </div>
    
      )}
     </div>
     </>
  );
}

export default Product;