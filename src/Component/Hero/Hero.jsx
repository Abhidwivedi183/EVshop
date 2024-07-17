import React from "react";
import './Hero.css'

import arrowicon from '../../assets/arrow_btn.png'
import playicon from '../../assets/play_icon.png'
import pauseicon from '../../assets/pause_icon.png'

const Hero = ({heroData,setHeroCount,heroCount,setPlayStatus,playStatus})=>{
    return(
<div className="hero">
<div className="herotext">

    <p>{
heroData.text1

}</p>
    <p>{heroData.text2}</p>



</div>

<div className="heroexplore">
    <p>Explore the feature</p>
    <img src={arrowicon} alt="" />
</div>

<div className="herodotplay">
    <ul className="herodots">
        <li onClick={()=>{setHeroCount(0)}} className={heroCount === 0 ? "herodot orange" : "herodot"}></li>
        <li onClick={()=>{setHeroCount(1)}} className={heroCount === 1 ? "herodot orange" : "herodot"}></li>
        <li onClick={()=>{setHeroCount(2)}} className={heroCount === 2 ? "herodot orange" : "herodot"}></li>
    </ul>
    <div className="heroplay">
        <img onClick={()=>setPlayStatus(!playStatus)} src={playStatus ? pauseicon : playicon} alt="" />
        <p>See the video</p>
    </div>
</div>

</div>
    )
}
export default Hero