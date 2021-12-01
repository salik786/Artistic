
import FavEvents from "../FavEvents/favevents";
import "./card.css"
import { useEffect, useState } from "react"
const Card = ({ Count, ModalHandler, data, index }) => {
    const [favArr, setfavArr] = useState([])

    useEffect(() => {



    })
    return (

        <div class="card card-margin m-2">

            <FavEvents data={index} />

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