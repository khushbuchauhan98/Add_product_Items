import './App.css';
import { useState } from 'react';

function App() {
  const [product, setproduct] = useState([
    { id: 1, name: 'p1', quantity: 0 },
    { id: 2, name: 'p2', quantity: 0 },
    { id: 3, name: 'p3', quantity: 0 },
    { id: 4, name: 'p4', quantity: 0 },
  ])
  const IncrementHandler = (id) => {
    const increment = product.map((product) => {
      if (product.id === id && product.quantity < 4) {
        return { ...product, quantity: product.quantity + 1 }
      }
      return product;
    });
    setproduct(increment)
  }
  const DecrementtHandler = (id) => {
    const decrement = product.map((product) => {
      if (product.id === id && product.quantity >0) {
        return { ...product, quantity: product.quantity - 1 }
      }
      return product;
    });
    setproduct(decrement)
  }
  const reserHandler = (id) => {
    const decrement = product.map((product) => {
      if (product.id === id && product.quantity >0) {
        return { ...product, quantity: product.quantity =0 }
      }
      return product;
    });
    setproduct(decrement)
  }
  const gettotal =() =>{
    const total=product.reduce((total,product)=>
    total+product.quantity,0
  );
  return total;
  }
  return (
    <div className="App">
       <h2>total<br/>{gettotal()}</h2>
      {
        product.map((product) => {
          return (
            <div className='flex'>
              <p>{product.quantity}</p>
              <button onClick={() => IncrementHandler(product.id)}>+</button>
              <button onClick={() => DecrementtHandler(product.id)}>-</button>
              <button onClick={()=>reserHandler(product.id)}>Reset</button>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
