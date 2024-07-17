import { useEffect, useState } from 'react'

import './App.css'
import Background from './Component/Background/Background';
import Navbar from './Component/Navbar/Navbar';
import Hero from './Component/Hero/Hero';

function App() {
 
  let heroData = [
    {text1:"Dive into",text2:"what you love"},
    {
       text1:"Indulge",text2:"your passions"
    },
    {text1:"Give in to",text2:"your Passions"}
  ]
const [heroCount,setHeroCount] = useState(2);
const[playStatus,setPlayStatus] = useState(false);
useEffect(()=>{
  setInterval(()=>{
setHeroCount((count)=>{return count === 2? 0 : count+1})
  },3000);
},[])
  return (
  <div>
   <Background playStatus= {playStatus} heroCount = {heroCount}/>
   <Navbar/>
   <Hero
   setPlayStatus = {setPlayStatus}
   heroData = {heroData[heroCount]}
   heroCount = {heroCount}
   setHeroCount = {setHeroCount}
   playStatus = {playStatus}
   
   />
  </div>
  )
}

export default App
