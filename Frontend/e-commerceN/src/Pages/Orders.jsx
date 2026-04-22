import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from '../Components/Navbar'
import "./Orders.css"
import Footer from '../Components/Footer'

function Orders() {

  const [orders, setOrders] = useState([])
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (!user) return;
  
    axios.get(`http://localhost:8080/api/order/${user.id}`)
      .then((res) => {
        setOrders(res.data);
      })
      .catch((err) => console.log(err));
  
  }, []);

  return (
    <div className="orders-container">

  <Navbar />

  <h1 className="orders-title">Your Orders 📦</h1>

  {orders.length === 0 ? (
    <h2 className="no-orders">No Orders Found 😢</h2>
  ) : (
    orders.map(order => (

      <div key={order.id} className="order-card">

        {/* Header */}
        <div className="order-header">
          <span className="order-id">Order ID: {order.id}</span>
          <span className="order-total">Total: ${order.total}</span>
        </div>

        {/* Products */}
        <div className="order-products">
          {JSON.parse(order.products).map((item, index) => (
            <div key={index} className="order-item">

              <img src={item.thumbnail} alt="product" />

              <div className="order-item-details">
                <p><b>{item.title}</b></p>
                <p>Qty: {item.quantity}</p>
                <p>Price: ${item.price}</p>
              </div>

            </div>
          ))}
        </div>

      </div>

    ))
  )}
<Footer />
</div>
  )
}

export default Orders