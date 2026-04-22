import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import axios from 'axios'
import "./Cart.css"
import Footer from '../Components/Footer'

function Cart() {

  const [cart, setCart] = useState([])

  const user = JSON.parse(localStorage.getItem("user"))

  // 🔥 FETCH CART
  useEffect(() => {
    if (!user) return;

    axios.get(`http://localhost:8080/api/cart/${user.id}`)
      .then(res => {
        setCart(res.data);
      })
      .catch(err => console.log(err));

  }, [user]);

  // 🔹 INCREASE
  function increaseQty(item) {
    axios.put(`http://localhost:8080/api/cart/${item.id}`, {
      ...item,
      quantity: item.quantity + 1
    })
    .then(res => {
      setCart(prev =>
        prev.map(c => c.id === item.id ? res.data : c)
      );
    })
  }

  // 🔹 DECREASE
  function decreaseQty(item) {

    if (item.quantity === 1) {
      removeItem(item.id);
      return;
    }

    axios.put(`http://localhost:8080/api/cart/${item.id}`, {
      ...item,
      quantity: item.quantity - 1
    })
    .then(res => {
      setCart(prev =>
        prev.map(c => c.id === item.id ? res.data : c)
      );
    })
  }

  // 🔹 REMOVE
  function removeItem(id) {
    axios.delete(`http://localhost:8080/api/cart/${id}`)
      .then(() => {
        setCart(prev => prev.filter(item => item.id !== id));
      })
  }

  // 🔹 TOTAL
  const total = cart.reduce((sum, item) => {
    return sum + item.price * item.quantity
  }, 0)

  // 🔹 PLACE ORDER
  async function placeOrder() {

    try {
      await axios.post("http://localhost:8080/api/order/place", {
        userId: user.id,
        products: JSON.stringify(cart),
        total: total
      })

      alert("Order Placed Successfully ✅")

      setCart([])

    } catch (error) {
      console.log(error)
      alert("Order Failed ❌")
    }
  }

  return (
  <div className="cart-page">

    <Navbar />

    <h1 className="cart-title">Your Cart 🛒</h1>

    {cart.length === 0 ? (
      <h2 className="empty-cart">Cart is Empty</h2>
    ) : (
      <div className="cart-container">

        {/* 🔹 LEFT: CART ITEMS */}
        <div className="cart-items">
          {cart.map(item => (
            <div key={item.id} className="cart-item">

              <img src={item.thumbnail || "https://via.placeholder.com/100"} alt="product" />

              <div className="cart-details">
                <h3>{item.title}</h3>
                <p className="price">${item.price}</p>

                <div className="qty-controls">
                  <button onClick={() => decreaseQty(item)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQty(item)}>+</button>
                </div>

                <button
                  className="remove-btn"
                  onClick={() => removeItem(item.id)}
                >
                  Remove
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* 🔹 RIGHT: SUMMARY */}
        <div className="cart-summary">

          <h2>Order Summary</h2>

          <p>Total Items: {cart.length}</p>
          <h3>Total: ${total.toFixed(2)}</h3>

          <button className="order-btn" onClick={placeOrder}>
            Place Order
          </button>

        </div>

      </div>
    )}
  <Footer />
  </div>
)
}

export default Cart