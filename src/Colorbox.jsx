import { useState } from "react";
import './Colorbox.css';
export default function Colorbox({colors}){
    function randomPick(arr){
        const idx = Math.floor(Math.random()* arr.length);
        return arr[idx];
    }
    const [color,setColor] = useState(randomPick(colors));
    const randomcolor = () => {
        const randomCol = randomPick(colors);
        setColor(randomCol);
    }
    return(
    <div className="Colorbox" onClick={randomcolor} style={{backgroundColor: color}}>

    </div>
    )
}