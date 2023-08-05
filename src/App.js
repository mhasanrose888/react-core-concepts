import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const cricketers = ['Tamim', 'Sakib', 'Masrafee', 'Musterfizer', 'Tankin']
  const productList = [
    { name: 'Photoshop', price: '$85.99' },
    { name: 'Illustrator', price: '$55.90' },
    { name: 'PDF Reader', price: '$10.90' },
    { name: 'Adobe Premiere Pro', price: '$110.90' }
  ]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            cricketers.map(cricketer => <li>{cricketer}</li>)
          }
          <br></br>
          {
            productList.map(product => <li>{product.name}</li>)
          }
          <li>{cricketers[0]}</li>
          <li>{cricketers[2]}</li>
          <li>{cricketers[4]}</li>
        </ul>

        <Players name="Lionel Messi" country="Argentina"></Players>
        <Players name="Cristiano Rolando" country="Portugal"></Players>
        <Players name="Muhammad Salah" country="Egypt"></Players>
        <Players name="Mbappe" country="France"></Players>

{
  productList.map(pd => <Products product={pd}></Products>)
}
        {/* <Products product={productList[0]} ></Products>
        <Products product={productList[1]}></Products>
        <Products product={productList[2]}></Products>
        <Products product={productList[3]}></Products> */}
      </header>
    </div>
  );
}


function Counter(){
  const [count, setCount] = useState(10);
  const handleIncrease = () => setCount(count + 1);
   
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onMouseMove={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}



function Players(props) {
  return (
    <div style={{ border: '2px solid red', margin: '10px', borderRadius: '20px', padding: '30px' }}>
      <h1>Footballer {props.name}</h1>
      <h2>Player of {props.country}</h2>
      <button style={{ backgroundColor: 'blue', color: 'white', borderRadius: '10px', height: '30px', width: '100px' }}>Buy Now</button>
    </div>
  )
}

function Users(){
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch ('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])
  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.email}</li>)
        }
      </ul>
    </div>
  )
}

function Products(props) {
  const productStyle = {
    width: '400px',
    height: '300px',
    border: '1px solid red',
    borderRadius: '20px',
    margin: '10px',
    padding: '10px',
    color: 'white',
    backgroundColor: 'black',
    float: 'left'
  }
  const {name, price} = props.product;
  // console.log(name, price);
  return (
    <div style={productStyle}>
      <h2>{name}</h2>
      <h1>{price}</h1>
      <button>Boy Now</button>
    </div>
  )
}


export default App;
