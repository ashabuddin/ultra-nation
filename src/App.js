import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './Component/Country/Country';
import Cart from './Component/Cart/Cart';


function App() {
  const[countries, setCountries] =useState([]);
  const [cart, setCart] = useState([]);
  useEffect(()=>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => {
      setCountries(data)
     data.map(country => country.name)
    })
  }, [])
  const handleAddCountry =(country)=>{
    const newCart = [...cart, country]
    setCart(newCart)
  }
  return ( 
    <div className="App">
      <h1>Country Load:{countries.length}</h1>
      <h3>Country Added:{cart.length}</h3>
      <Cart cart={cart}></Cart>
      <ul>
         {
          countries.map(country => <Country country={country} handleAddCountry={handleAddCountry} key={country.alpha3Code}></Country> )}
      </ul>
    </div>
  );
}

export default App;
