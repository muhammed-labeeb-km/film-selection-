import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Second from './pages/Second';
import Adding from './pages/Adding';

function App() {

  function clicked(event){
    event.target.textContent= "changed"
    console.log("button clicked");
  }

  const arr=[{
    id:1,
    title:"KGF",
    genre:"Action",
    rating:7.7,
    available:false
  },
  {
    id:2,
    title:"Ayyapannum Koshiyum",
    genre:"Family-Movie",
    rating:8.7,
    available:true
  },
  {
    id:3,
    title:"Salaar",
    genre:"Mass Entertainment",
    rating:7.2,
    available:true
  },
]

const [forList,setList]=useState('all')

const [movies,setMovies]=useState(arr)

const [detail, setDetail] = useState({
  title: '',
  genre: '',
  rating: '',
  available: false, // Initial value for the 'available' field
});

const selectingAll = () => {
  setMovies([
    ...movies,
    detail]
  )
};
console.log(movies);


const listAll = (e) =>{
  // console.log(e);
  const listIt = movies.filter((i)=>i.available == e.available)
  if(e.available==true){
    setList('available')
  }
  else{
    setList('non-available')
  }
  setMovies(listIt)
}

const deleting = (e) =>{
  // console.log(e);

  const updateMovies = movies.filter((i)=>i.id !== e.id);
  setMovies(updateMovies)

  


}


function onAct(e){
  const statusIs = e.target.value

  const newList = arr.filter((i)=>{
    if (statusIs=='all'){
      setList('all')
      return true;
    }
    if(statusIs == 'available'){
      setList('available')
      return i.available==true
    }
    if(statusIs=='non-available'){
      setList('non-available')
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
      <Header onAct={onAct} forList={forList}  />
      <Adding selectingAll={selectingAll} detail={detail} setDetail={setDetail}  movies={movies} setMovies={setMovies} />
      <Second movies={movies} listAll={listAll} deleting={deleting}/>
      </div>
      
    </div>
  );
}

export default App;
