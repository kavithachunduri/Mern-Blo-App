
import React from 'react'
import {useState, useEffect} from "react"
import {popularWallPaper,searchWallPaper} from "../ApiCall"
import OutputMap from '../OutputMap';
import Error from './Error';
import Popular from "../Popular";
//import TvRoundedIcon from '@mui/icons-material/TvRounded';
//import './tvshows.scss';
import Nav from "./Nav"
import Footer from './Footer'


function WallPapers() {
  //const [value , setValue] = useState('');
  const [click,setClick] = useState([]);
  const [search,setSearch] = useState('');
  const[error,setError] =useState('')
  const[popular,setPopular]= useState([]);
  
  useEffect(()=>{
    getPopular();
    //console.log('i am loaded')

   },[]);
  
  

  
  const getPopular =async() =>{
   
     let response1 = await popularWallPaper();
    console.log("popularwallpaper response",response1)
      
    const  data= response1.data.photos;
    console.log("populardata", data)
        setPopular(data)     

  }

  //getPopular();
  const buttonClick =async() =>{
      
    if(search!==""){
    let response = await searchWallPaper(search);
    console.log("search response",response)
    setPopular('');
     if( response.data.photos.length!==0){
      let output=response.data.photos;
      console.log('output',output)
       
       setSearch('')
       setClick(output)
       setError("")
    }
      else{
      setError(`There are no results for ${search} `)
    }
  }
    else{
      
        setError("Type the kind of wallpapers you want")
    }
 console.log("click", click);
}
  
  
  
  
  return (
    <div>
    <Nav />
    <div className='Wallpapers'>
        <h1> WallPapers  </h1>
        <h4>If you want to use a wallpaper right click on the image and copy the image address</h4>
        <input  type="text" placeholder="Search Your Wallpaper...."  onChange={(e)=>setSearch(e.target.value)} />
     
     <button    onClick={buttonClick}  > Search </button>
     <div>
    <OutputMap mapping={click}/>
    <Popular   map={popular}/>
    </div>
     <div>
      { error!=="" && <Error error={error}/>}

    </div>
    </div>
    <Footer/>
    </div>
  )
 }

 export default WallPapers
