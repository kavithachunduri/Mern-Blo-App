import React from 'react'


function OutputMap(props) {

const {mapping} = props            

  return (
    <div className='SearchOutput'>
                 { mapping.map((item)=>{
                    

                    return( 
                    <div className='SearchTile containerimg' key={item.id}>
        <img  className='SearchTile_img' src={item.src.landscape} alt="Post banner" />
     
        <h3  className='SearchTile_name'>{item.photographer}</h3>
        </div>)
                   
                    })
                }
    </div>
  )
}

export default OutputMap