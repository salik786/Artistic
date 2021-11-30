import "./card.css"
import { useEffect, useState } from "react";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs"
import { useCookies } from "react-cookie";
const Card = ({ ModalHandler, data, index }) => {
    console.log(index)
    const [cookies, setCookie] = useState(["fav_id"])
    const favEvent = [];
    const [fav, setFav] = useState(false);
    const AddFav = (data) => {
        favEvent.push(data.even_id);
        console.log(favEvent)
        setCookie("fav_id ", favEvent, { path: "/ " });
        console.log(data.even_id)


        setFav(!fav);
    }
    const RemoveFav = (data) => {

        setFav(!fav);
    }
    return (

        <div class="card card-margin m-2">

            {fav == false ?

                <div className="favourite" onClick={() => { AddFav(data) }}><BsBookmark size={30} /></div>
                : <div className="favourite" onClick={() => { RemoveFav(data) }}><BsBookmarkFill size={30} color="red" /></div>
            }
            <div class="card-body ">
                <div class="widget-49">
                    <div class="widget-49-title-wrapper">
                        <div class="widget-49-date-primary">
                            <img className="widget-49-date-day" src={data.img}></img>
                        </div>
                        <div class="widget-49-meeting-info">
                            <span class="widget-49-pro-title">{data.event_name}</span>
                            <span class="widget-49-meeting-time">{data.Date}</span>
                        </div>
                    </div>
                    <ul class="widget-49-meeting-points">
                        <li class="widget-49-meeting-item"><span>{data.country}</span></li>
                        <li class="widget-49-meeting-item"><span>{data.city}</span></li>
                        <li class="widget-49-meeting-item"><span>{data.venue}</span></li>
                    </ul>
                    <div class="widget-49-meeting-action">
                        <a href="#" class="btn btn-sm btn-primary" onClick={ModalHandler}>Details</a>
                    </div>
                </div>
            </div>
        </div>


    )
}
export default Card;