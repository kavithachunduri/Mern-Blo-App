import React from 'react'


function Popular(props) {
   
    const {map} = props;
    console.log("popularmap", map)





  return (
   
    <div className="popular">
    
        {map && map.map((item)=>{
            return <div  className='popularwall containerimg' key={item.id} >
              
                <img src={item.src.landscape} alt="Post banner" />
                <h3>{item.photographer}</h3>
                </div>
    
       })}
    </div>
   
  )
}

export default Popular