import Card from "../Components/Cards/cards";
import Filter from "../Components/Filters/filter";
import { useCookies } from 'react-cookie'
import Search from "../Components/Search/search";
import { useState } from "react";

import "./artist.css"
import ModalInfo from "../Components/ModalInfo/modalinfo";
import data from "../Utils/data"
import TotalEvents from "../Components/TotalEvent/totalevent";
const Artist = () => {

    const [cardData, setCardData] = useState(data);
    const [showMod, setShowMod] = useState(false);
    const ModalHandler = () => {
        setShowMod(true);
    }

    console.log(data)
    return (<>
        <div className="container-fluid">
            <div className="row shadow1 p-4" >
                <div className="col-6">
                    <Search />
                </div>
                <div className="col-6">
                    <Filter />
                </div>
            </div>
            <div className="row">
                <div className="col-12 p-3"><TotalEvents len={data.length} /></div>
            </div>
            <div className="row p-4">


                {cardData.map((item, index) => {
                    console.log(item);
                    return (
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 p-1">
                            <Card ModalHandler={ModalHandler} data={item} />
                        </div>
                    )
                })}

                {/* <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 p-4">
                    <Card />
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 p-4">
                    <Card />
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 p-4">
                    <Card />
                </div> */}

            </div>
            <ModalInfo props={"block"} />

        </div>
    </>)
}
export default Artist;