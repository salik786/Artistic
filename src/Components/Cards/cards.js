
import FavEvents from "../BadgeFav/badgefav";
import "./card.css"
import { useEffect, useState } from "react"
const Card = ({ data, index }) => {

    // this compoennt will receive id and data to display and to favourites based on id
    return (

        <div class="card card-margin m-2">

            <FavEvents data={index} />

            <div class="card-body ">
                <div class="widget-49">
                    <div class="widget-49-title-wrapper">
                        <div class="widget-49-date-primary">
                            <img className="widget-49-date-day" src={`https://picsum.photos/200/300?random=${index}`}></img>
                        </div>
                        <div class="widget-49-meeting-info">
                            <span class="widget-49-pro-title">{data.venue.name}</span>
                            <span class="widget-49-meeting-time">{ }</span>
                        </div>
                    </div>
                    <ul class="widget-49-meeting-points text-dark">
                        <li class="widget-49-meeting-item "><span>Country - {data.venue.country}</span></li>
                        <li class="widget-49-meeting-item"><span>City - {data.venue.city}</span></li>

                        <li class="widget-49-meeting-item"><span>Dated - {data.date}</span></li>
                        <li class="widget-49-meeting-item"><span>Time - {data.time}</span></li>
                    </ul>
                    <div class="widget-49-meeting-action">
                        <a href="#" class="btn btn-sm btn-primary" >Details</a>
                    </div>
                </div>
            </div>
        </div>


    )
}
export default Card;