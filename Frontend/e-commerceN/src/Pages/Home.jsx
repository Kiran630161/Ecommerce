import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from '../Components/Navbar'
import Carousel from "../Components/Carousel";
import CategoryCard from "../Components/CategoryCard";
import "./Home.css";
import Footer from "../Components/Footer";

function Home() {

  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const productsPerPage = 16
  const indexOfLast = currentPage * productsPerPage
  const indexOfFirst = indexOfLast - productsPerPage

  const currentProducts = filteredProducts.slice(indexOfFirst, indexOfLast)

  // 🔹 Fetch Products
  useEffect(() => {
    getAllProducts()
  }, [])

  function getAllProducts() {
    axios.get("https://dummyjson.com/products?limit=206")
      .then(res => {
        setProducts(res.data.products)
        setFilteredProducts(res.data.products) // 🔥 IMPORTANT
      })
      .catch(err => console.log(err))
  }

  // 🔹 Fetch Categories
  useEffect(() => {
    axios.get("https://dummyjson.com/products/categories")
      .then(res => setCategories(res.data))
      .catch(err => console.log(err))
  }, [])

  // 🔥 ADD TO CART
  async function addToCart(product) {

    const user = JSON.parse(localStorage.getItem("user"))

    if (!user) {
      alert("Please login first")
      return
    }

    try {
      await axios.post("http://localhost:8080/api/cart/add", {
        userId: user.id,
        productId: product.id,
        title: product.title,
        price: product.price,
        thumbnail: product.thumbnail,
        quantity: 1
      })

      alert("Added to Cart 🛒")

    } catch (error) {
      console.log(error)
      alert("Failed to add to cart ❌")
    }
  }

  // 🔍 SEARCH FUNCTION
  function handleSearch(value) {
  setCurrentPage(1) // 🔥 reset page

  if (value.trim() === "") {
    setFilteredProducts(products)
    return
  }

  const result = products.filter(p =>
    p.title.toLowerCase().includes(value.toLowerCase())
  )

  setFilteredProducts(result)
}

  // 🔹 CATEGORY FILTER
  function filterByCategory(category) {
  setCurrentPage(1) // 🔥 reset page

  if (category === "all") {
    setFilteredProducts(products)
    return
  }

  const result = products.filter(p =>
    p.category === category
  )

  setFilteredProducts(result)
}

  return (
  <div className="home-container">

    <Navbar onSearch={handleSearch} />

    {/* 🔥 HERO TITLE */}
    <h1 className="home-title">Discover Amazing Products 🛍️</h1>

    {/* 🔥 CAROUSEL */}
    <div className="carousel-wrapper">
      <Carousel />
    </div>

    {/* 🔥 CATEGORIES */}
    <div className="section">
      <h2 className="section-title">Shop by Categories</h2>

      <div className="category-container">
        <CategoryCard
          category={{ name: "All", slug: "all" }}
          onClick={filterByCategory}
        />

        {categories.slice(0, 6).map((cat, index) => (
          <CategoryCard
            key={index}
            category={cat}
            onClick={filterByCategory}
          />
        ))}
      </div>
    </div>

    {/* 🔥 PRODUCTS */}
    <div className="section">
      <h2 className="section-title">Featured Products</h2>

      <div className="product-grid">
        {filteredProducts.length === 0 ? (
          <h3 className="no-items">No items found 😢</h3>
        ) : (
          currentProducts.map((p) => (
            <div key={p.id} className="product-card">

              <div className="product-inner">
                <img src={p.thumbnail} alt="product" />

                <h4>{p.title}</h4>

                <p className="price">${p.price}</p>

                <button onClick={() => addToCart(p)}>
                  Add to Cart
                </button>
              </div>

            </div>
          ))
        )}
      </div>
    </div>

    <div className="pagination">
   {Array.from({
    length: Math.ceil(filteredProducts.length / productsPerPage)
  }).map((_, index) => (

    <button
      key={index}
      className={currentPage === index + 1 ? "active-page" : ""}
      onClick={() => setCurrentPage(index + 1)}
    >
      {index + 1}
    </button>

  ))}

</div>
<Footer />

  </div>

  )
}

export default Home