import Card from "../Components/Cards/cards";
import Filter from "../Components/Filters/countryfilter";
import { useCookies } from 'react-cookie'
import Search from "../Components/Search/search";
import { useState } from "react";

import "./artist.css"
import ModalInfo from "../Components/ModalInfo/modalinfo";
import data from "../Utils/data"
import TotalEvents from "../Components/TotalEvent/totalevent";
import DatePicker from "react-date-picker";
import ButtonFilter from "../Components/Filters/btnfilter";
import Pagination from "../Components/Pagination/pagination";
const Artist = () => {

    const [cardData, setCardData] = useState(data);
    const [showMod, setShowMod] = useState(false);
    const ModalHandler = () => {
        setShowMod(true);
    }

    console.log(data)
    return (<>
        <div className="container-fluid" >
            <div className="row shadow1 p-4" style={{ backgroundColor: "#0f0452" }}>
                <div className="col-xl-6 col-lg-4 col-lg-4 col-sm-12 col-6">
                    <Search />
                </div>
                <div className=" col-xl-2 col-sm-6 col-2">
                    <Filter />
                </div>

                <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-2">

                    <DatePicker />
                </div>

                <div className="col-xl-2 col-sm-6 col-2">

                    <ButtonFilter />
                </div>
            </div>
            <div className="row">
                <div className="col-12 mt-2 pt-2 pl-4"><TotalEvents len={data.length} /></div>
            </div>
            <div className="row p-4">


                {cardData.map((item, index) => {
                    console.log(item);
                    return (
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 p-1">
                            <Card ModalHandler={ModalHandler} data={item} />
                        </div>
                    )
                })}

            </div>
            <div className="row p-4 text-center">

                <Pagination />
            </div>
            {/* <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 p-4">
                    <Card />
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 p-4">
                    <Card />
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 p-4">
                    <Card />
                </div> */}

            <ModalInfo props={"block"} />

        </div>
    </>)
}
export default Artist;