import Pagination from "../../Components/Pagination/pagination";
import { useState, useEffect } from "react";
import Card from "../../Components/Cards/cards"
import data from "../../Utils/EventsData"
import { useCookies } from "react-cookie";
import axios from "axios"
var postsPerPage = 5

const DisplayEvents = () => {
    const [myData, setMy] = useState([]);
    const [cookies, setCookie] = useCookies(['access_token'])
    const [checkCook, setCook] = useState(false)
    const [count, setCount] = useState(0)
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
    //cHECK HOW ,MANY EVENT A ARTIST HAVE
    const IncCount = () => {
        setCount(count + 1)
    }
    const handleShowMorePosts = () => {
        postsPerPage += 3;
        loopWithSlice(0, postsPerPage)
    }
    useEffect(() => {
        const cookVal = cookies.access_token;

        if (cookVal != undefined) {
            setCook(true);
            const dat = cookies.access_token.name;
            axios.get(`https://rest.bandsintown.com/artists/${dat}/events?app_id=abc`).then(res => {
                console.log(res.data)


                setMy(res.data);
            }).catch((err) => {
                console.log(err)
            })
            // loopWithSlice(0, 100)
        }
        else {
            loopWithSlice(0, 10)
        }
    }, [cookies])


    return (
        <>
            <div className="row">
                {myData.map((item, index) => {
                    return (

                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                            <Card key={index} data={item} index={index} />
                        </div>


                    )
                })}

                {
                    cookies.access_token == undefined ?

                        <div className="row p-4 text-center">
                            <Pagination MorePosts={handleShowMorePosts} />
                        </div> : <></>
                }
            </div>
        </>
    )
}
export default DisplayEvents;