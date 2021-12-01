
import { useState, useRef, useEffect } from "react";
import "./artist.css"
import data from "../../Utils/data"
import TotalEvents from "../../Components/TotalEvent/totalevent";

import ArtistSearch from "../../Sections/ArtistSearch/artistsearch"
import { useCookies } from "react-cookie";
import DisplayEvents from "../../Sections/EventsInfo/displayevents";
import ArtistInfo from "../../Sections/ArtistInfo/artistinfo"

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
         <ArtistSearch/>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 mt-2 pt-2 pl-4"><TotalEvents len={data.length} /></div>
                </div>
                <div className="row">
                        <div className="col-9">
                        <DisplayEvents />
                        </div>
                        <div className="col-3">
                        {<ArtistInfo />}
                        </div>
                    {/* <div className="col-xl-3"><ArtistInfo /></div> */}
                </div>

                {/* <ModalInfo props={"block"} /> */}

            </div>
        </div>
    </>)
}
export default Artist;