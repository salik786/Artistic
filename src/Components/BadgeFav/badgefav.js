
import { BsBookmark, FcBookmark } from "react-icons/all"
import "./badgefav.css"
import { useEffect, useState } from "react"
import { useCookies } from "react-cookie";
var arr = []
function FavEvents({ data }) {
    // helps tp add favorite events so that user can view in future easily
    const [cookies, setCookie] = useCookies(["fav_id"])

    const [fav, setFav] = useState(false);
    const [count, setCount] = useState(0);
    // adding favorites to localstorage to get persistant data along the tabs
    const AddFav = (e) => {
        var getLocal = localStorage.getItem("fav")
        if (getLocal == undefined) {
            arr.push(data);
            localStorage.setItem("fav", JSON.stringify(arr))
        }
        else {
            var arr1 = JSON.parse(getLocal);
            if (!arr1.includes(data)) {

                arr1.push(data);
                localStorage.setItem("fav", JSON.stringify(arr1))
                arr.push(arr1)
            }

        }
        setFav(!fav);
    }
    //for removing fav events from localstorage
    const RemoveFav = (e) => {
        e.preventDefault();
        var a = localStorage.getItem("fav");
        if (a != undefined) {
            var arr1 = JSON.parse(a);
            for (var i = 0; i < arr1.length; i++) {

                if (arr1[i] === data) {
                    console.log("Array :" + arr1[i]);
                    arr1.splice(i, 1);
                }

            }

            console.log(arr1);
        }

        setFav(!fav);
    }

    return (
        <>

            {fav == true ?
                <div className="favourite" ><FcBookmark size={40} onClick={RemoveFav} /></div>
                : <div className="favourite" ><BsBookmark size={30} onClick={AddFav} /></div>
            }
        </>
    )
}

export default FavEvents
