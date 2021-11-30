// import Card from "../../Components/Cards/cards";
// import Filter from "../../Components/Filters/countryfilter";
import Search from "../../Components/Search/search";
import { useState, useRef, useEffect } from "react";
import "./artist.css"
// import ModalInfo from "../../Components/ModalInfo/modalinfo";
import data from "../../Utils/data"
import TotalEvents from "../../Components/TotalEvent/totalevent";
// import DatePicker from "react-date-picker";
import ButtonFilter from "../../Components/Filters/btnfilter";

// import BackTop from "../../Components/BackTop/backtop";
// import DateFilter from "../../Components/Filters/datepicker";
import { useCookies } from "react-cookie";
import DisplayEvents from "../../Sections/displayevents";


const Artist = () => {

    const [cardData, setCardData] = useState(data);
    const [showMod, setShowMod] = useState(false);
    const allFilter = useCookies(["access_token"])
    // [Start] for pagination and loading of new data 
    const GetFilters = (obj) => {
        console.log(obj)
    }
    // [END]  for pagiantion and loading of new data 
    const ModalHandler = () => {
        setShowMod(true);
    }

    return (<>
        <div className="container-fluid" >
            <div className="row shadow1 d-flex " >
                {/* <div className="col-xl-6 col-lg-4 col-md-6 col-sm-12 "> */}
                {/* <h4 className="text-white ">Search Your Favourite Artists Here</h4> */}
                {/* <Search /> */}
                {/* </div> */}
                <form className=" col-12 d-flex flex-row ">
                    <div className="row">
                        <div className=" col-xl-12 col-lg-8 col-md-6 col-sm-12 text-center">
                            {/* <h3 className="text-white mb-4">Search Your Favourite <span style={{ color: "#ffb703", fontSize: "30px" }}>Artists</span></h3> */}
                            <Search />

                        </div>
                    </div>

                    <div className="row w-100 justify-content-end">
                        <div className="col-sm-12 ">
                            <ButtonFilter filters={GetFilters} />
                        </div>
                    </div>
                </form>

            </div>

            <div className="container">
                <div className="row">
                    <div className="col-12 mt-2 pt-2 pl-4"><TotalEvents len={data.length} /></div>
                </div>
                <div>
                    <DisplayEvents />
                </div>

                {/* <ModalInfo props={"block"} /> */}

            </div>
        </div>
    </>)
}
export default Artist;