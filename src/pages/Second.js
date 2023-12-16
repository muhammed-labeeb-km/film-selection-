import React from 'react'

function Second(props) {
    
    // const {arr}=props
    const {movies}=props
    console.log(movies);
    
    
  return (

      <div className='container border text-black w-50'>
      {movies.map((i,index)=>(
        
        /*style={{backgroundColor:i.title=='KGF'?'red':i.rating==8.7?'blue':'gold'}} */

        <div key={index} className='container border p-5 text-center' style={{background:'gray'}}>
        <span className='fs-1' style={{color:'goldenrod'}}> <b>{i.title}</b></span>
        <h2  >{i.genre}</h2>
        <h1>{i.rating}</h1>
        <button className='btn btn-light text-dark w-25 p-4 fs-4'><b>{i.available?'Available':'Not Available'}</b></button>
        </div>
    
      )
       )}  
      </div>  
  )
}

export default Second
