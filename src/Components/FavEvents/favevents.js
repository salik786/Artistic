
import { BsBookmark, FcBookmark } from "react-icons/all"
import "./favevents.css"
import { useEffect, useState } from "react"
import { useCookies } from "react-cookie";
function FavEvents({ data }) {
    const [cookies, setCookie] = useCookies(["fav_id"])
  
    const [fav, setFav] = useState(false);
    const [count,setCount]=useState(0);


    const AddFav = (e) => {
        e.preventDefault();
       
        // localStorage.setItem("fav",favEvent)
  
        setFav(!fav);
    }
    const RemoveFav = (e) => {
        e.preventDefault();
    
       
       
        setFav(!fav);
    }
    
    return (
        <>
            {fav == true ?
                <div className="favourite" ><FcBookmark size={40} onClick={AddFav} /></div>
                : <div className="favourite" ><BsBookmark size={30} onClick={RemoveFav} /></div>
            }
        </>
    )
}

export default FavEvents
