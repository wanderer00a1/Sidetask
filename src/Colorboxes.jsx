
import Colorbox from "./Colorbox"
import './Colorboxes.css'
export default function Colorboxes({colors}){
    const box = [];
    for(let i = 0; i < 25; i++){
        box.push(<Colorbox colors={colors}/>)
    }
    return(
        <div className="Colorboxes">
            {box}
        </div>
    )
}