import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Second from './pages/Second';

function App() {

  function clicked(event){
    event.target.textContent= "changed"
    console.log("button clicked");
  }

  const arr=[{
    title:"KGF",
    genre:"Action",
    rating:7.7,
    available:false
  },
  {
    title:"Ayyapannum Koshiyum",
    genre:"Family-Movie",
    rating:8.7,
    available:true
  },
  {
    title:"Salaar",
    genre:"Mass Entertainment",
    rating:7.2,
    available:true
  },
]

const [movies,setMovies]=useState(arr)

function onAct(e){
  const statusIs = e.target.value

  const newList = arr.filter((i)=>{
    if (statusIs=='all'){
      return true;
    }
    if(statusIs == 'available'){
      return i.available==true
    }
    if(statusIs=='non-available'){
      return i.available==false
    }
  })
  setMovies(newList)
  // console.log(movies);
  }
  
  return (


    <div className="App">
      <button className='btn-primary btn' id='first' onClick={clicked}>Heyy guys</button>
    <br />
      <div>
      <Header onAct={onAct} />
      <Second movies={movies}/>
      </div>
      
    </div>
  );
}

export default App;
