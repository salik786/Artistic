import "./card.css"
import { useState } from "react";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs"
const Card = ({ ModalHandler, data }) => {
    const [fav, setFav] = useState(false);
    const ClickHandler = (data) => {
        localStorage.setItem("favour", JSON.stringify(data));
        setFav(!fav);
    }

    return (

        <div class="card card-margin m-2">

            {fav == false ?
                <div className="favourite" onClick={() => { ClickHandler(data) }}><BsBookmark size={30} /></div>
                : <div className="favourite" onClick={() => { setFav(!fav) }}><BsBookmarkFill size={30} color="red" /></div>
            }
            <div class="card-body pt-0">
                <div class="widget-49">
                    <div class="widget-49-title-wrapper">
                        <div class="widget-49-date-primary">
                            <img className="widget-49-date-day" src={data.img}></img>
                        </div>
                        <div class="widget-49-meeting-info">
                            <span class="widget-49-pro-title">PRO-08235 DeskOpe. Website</span>
                            <span class="widget-49-meeting-time">12 NOv 2021</span>
                        </div>
                    </div>
                    <ul class="widget-49-meeting-points">
                        <li class="widget-49-meeting-item"><span>Country</span></li>
                        <li class="widget-49-meeting-item"><span>City</span></li>
                        <li class="widget-49-meeting-item"><span>Venue</span></li>
                    </ul>
                    <div class="widget-49-meeting-action">
                        <a href="#" class="btn btn-sm btn-primary">View Details</a>
                    </div>
                </div>
            </div>
        </div>
        // <div class="card" style={{ width: "18rem" }}>
        //     {fav == false ?
        //         <div className="favourite" onClick={() => { ClickHandler(data) }}><AiOutlineStar size={25} /></div>
        //         : <div className="favourite" onClick={() => { setFav(!fav) }}><AiFillStar size={25} color="#eadd52" /></div>
        //     }
        //     <img class="card-img-top" src={data.img} alt="Card image cap" />
        //     <div class="card-body">
        //         <h5 class="card-title">{data.name}</h5>
        //         <p class="card-text"><span>Artist:</span><span>{data.name}</span></p>
        //     </div>

        //     <div class="card-body">
        //         <a href="#" class="card-link" onClick={() => ModalHandler}>Details</a>
        //         <a href="#" class="card-link">Another link</a>
        //     </div>
        // </div>

    )
}
export default Card;