import Card from "../Components/Cards/cards";
import Filter from "../Components/Filters/countryfilter";
import { useCookies } from 'react-cookie'
import Search from "../Components/Search/search";
import { useState, useRef, useEffect } from "react";
import "./artist.css"
import ModalInfo from "../Components/ModalInfo/modalinfo";
import data from "../Utils/data"
import TotalEvents from "../Components/TotalEvent/totalevent";
import DatePicker from "react-date-picker";
import ButtonFilter from "../Components/Filters/btnfilter";
import Pagination from "../Components/Pagination/pagination";
import BackTop from "../Components/BackTop/backtop";
var postsPerPage = 5
const Artist = () => {

    const [cardData, setCardData] = useState(data);
    const [showMod, setShowMod] = useState(false);
    // [Start] for pagination and loading of new data 
    const [postsToShow, setPostsToShow] = useState([])
    let arrayForHoldingPosts = []
    const loopWithSlice = (start, end) => {
        const slicedPosts = cardData.slice(start, end)
        arrayForHoldingPosts = arrayForHoldingPosts.concat(slicedPosts)
        setPostsToShow(arrayForHoldingPosts)
    }
    const handleShowMorePosts = () => {
        postsPerPage += 3;
        loopWithSlice(0, postsPerPage)
    }
    useEffect(() => {
        loopWithSlice(0, postsPerPage)
    }, [])

    // [END]  for pagiantion and loading of new data 
    const ModalHandler = () => {
        setShowMod(true);
    }

    return (<>
        <div className="container-fluid" >
            <div className="row shadow1 " >
                <div className="col-xl-6 col-lg-12 col-md-4 col-sm-12 ">
                    {/* <h4 className="text-white ">Search Your Favourite Artists Here</h4> */}
                    <Search />
                </div>
                <div className=" col-xl-2 col-md-3 col-sm-2 ">
                    <Filter />
                </div>

                <div className="col-xl-2 col-lg-2 col-md-3 col-sm-2">

                    <DatePicker />
                </div>

                <div className="col-xl-2 col-lg-2 col-md-3 col-sm-2 ">

                    <ButtonFilter />
                </div>
            </div>
            <div className="row">
                <div className="col-12 mt-2 pt-2 pl-4"><TotalEvents len={data.length} /></div>
            </div>
            <div className="row p-4">
                {postsToShow.map((item, index) => {

                    return (
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 p-1">
                            <Card ModalHandler={ModalHandler} data={item} />
                        </div>
                    )
                })}
            </div>
            {postsToShow.length == postsPerPage ?

                <div className="row p-4 text-center">

                    <Pagination MorePosts={handleShowMorePosts} />
                </div> : <></>
            }
            {/* <ModalInfo props={"block"} /> */}

        </div>
    </>)
}
export default Artist;