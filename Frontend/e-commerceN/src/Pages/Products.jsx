// import React, { useEffect, useState } from 'react'
// import axios from 'axios'

// function Products() {

//   const [products, setProducts] = useState([])

//   useEffect(() => {

//     axios.get("https://fakestoreapi.com/products")
//       .then((res) => {
//         setProducts(res.data)
//       })
//       .catch((err) => {
//         console.log(err)
//       })

//   }, [])

//   return (
//     <div>
//       <h1>Products</h1>

//       {
//         products.map((p) => (
//           <div key={p.id} style={{border:'1px solid black', margin:'10px', padding:'10px'}}>
//             <h3>{p.title}</h3>
//             <img src={p.image} width="100" />
//             <p>Price: ${p.price}</p>
//             <button>Add to Cart</button>
//           </div>
//         ))
//       }

//     </div>
//   )
// }

// export default Products