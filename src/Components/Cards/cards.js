import "./card.css"
import { useState } from "react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai"
const Card = ({ ModalHandler, data }) => {
    const [fav, setFav] = useState(false);
    const ClickHandler = (data) => {
        localStorage.setItem("favour", JSON.stringify(data));
        setFav(!fav);
    }
    console.log(data);
    return (
        <div class="card" style={{ width: "18rem" }}>
            {fav == false ?
                <div className="favourite" onClick={() => { ClickHandler(data) }}><AiOutlineStar size={25} /></div>
                : <div className="favourite" onClick={() => { setFav(!fav) }}><AiFillStar size={25} color="#eadd52" /></div>
            }
            <img class="card-img-top" src={data.img} alt="Card image cap" />
            <div class="card-body">
                <h5 class="card-title">{data.name}</h5>
                <p class="card-text"><span>Artist:</span><span>{data.name}</span></p>
            </div>

            <div class="card-body">
                <a href="#" class="card-link" onClick={() => ModalHandler}>Details</a>
                <a href="#" class="card-link">Another link</a>
            </div>
        </div>

    )
}
export default Card;