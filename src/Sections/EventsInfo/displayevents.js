import Pagination from "../../Components/Pagination/pagination";
import { useState, useEffect } from "react";
import Card from "../../Components/Cards/cards"
import data from "../../Utils/EventsData"
import { useCookies } from "react-cookie";
var postsPerPage = 5

const DisplayEvents = () => {

    const [cookies, setCookie] = useCookies(['access_token'])
    const [checkCook, setCook] = useState(false)
    const [cardData, setCardData] = useState(data);
    const [postsToShow, setPostsToShow] = useState([])
    let arrayForHoldingPosts = []
    // this part will help to pagination when lot of data to be show
    const loopWithSlice = (start, end) => {
        const slicedPosts = cardData.slice(start, end)
        arrayForHoldingPosts = arrayForHoldingPosts.concat(slicedPosts)
        setPostsToShow(arrayForHoldingPosts)
    }
    // increment when user wants to get more events data
    const handleShowMorePosts = () => {
        postsPerPage += 3;
        loopWithSlice(0, postsPerPage)
    }
    useEffect(() => {
        const cookVal = cookies.access_token;

        if (cookVal != undefined) {
            setCook(true);
        }
        loopWithSlice(0, 100)

    }, [checkCook])


    return (
        <>
            <div >
                {postsToShow.map((item, index) => {
                    return (
                        <>
                            {checkCook == true
                                ? item.Art_id == cookies.access_token.id ?

                                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 ">
                                        <Card key={index} data={item} index={index} />
                                    </div>

                                    : <></>
                                : <></>
                            }
                        </>
                    )
                })} 
            </div>
            {
                postsToShow.length == postsPerPage ?

                    <div className="row p-4 text-center">
                        <Pagination MorePosts={handleShowMorePosts} />
                    </div> : <></>
            }
        </>
    )
}
export default DisplayEvents;