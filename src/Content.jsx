import React, { useState } from 'react'

export default function Content(prpps) {
 const [v1,setV1]=useState( 0)
 const [v2,setV2]=useState(0)
 const [resultat,setresultat]=useState(0)
 const calculer=()=>{
    setresultat(parseInt(v1)+parseInt(v2));
 }
 const recuperer1=(e)=>{
    setV1(e.target.value);
 }
 const recuperer2=(e)=>{
    setV2(e.target.value);
 }
 const monstyle={color:'black',border:'1px solid black',padding:'3px'}
      //   
    return (
    <div className='Content1 bg-cover bg-[url(https://images.frandroid.com/wp-content/uploads/2024/09/set-top-google-tv-streamer-resized-1200x800-1.jpeg)]'>
        {prpps.data}
     
       <style> 
        {`
           .A{
                  color:red;font-size:26px
              }
       
       ` }
         </style>
          className='div3'
           <img src="" alt="" />
        <div  >
        <input  onChange={recuperer1}  type="text" name="v1" id="" value={v1}/>
        <input  onChange={recuperer2} type="text" name="v2" id="" value={v2}/>
        <button className='bg-yellow-500' type="button" onClick={calculer}>calculer</button>
        <input type="text" name="v3" id="" value={resultat}/>
        </div>
        <div  style={monstyle}>
         <p className='A'> style form script </p>
         <p className='B'>import file.css</p>
         <p className='C' style={{color:'yellow',background:'blue',padding:'5px',borderRadius:'5px',boxShadow:'5px 5px 5px black'}}>inline</p>
         <h3 className='bg-yellow-500' style={monstyle}>Mon style const</h3>
         <h3 className='m-3 text-green-500 bg-red-700 rounded-full border-2 border-solid border-black ' >tailwind</h3>  </div>
        </div>
  )
}
