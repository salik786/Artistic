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
    const [cardData, setCardData] = useState([]);
    const [postsToShow, setPostsToShow] = useState([])
    const [eventInf, setEventInf] = useState({})
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
    //this function to pre defined set data before sending to Card component
    const EventDataSetter = even => {

        let dummyArr = [];
        for (let i = 0; i < even.length; i++) {
            let dummyObj = {};
            dummyObj.venue = even[i].venue;
            // dummyObj.date = even[i].datetime;
            dummyObj.title = even[i].title;
            console.log(even[i].artist);
            // dummyObj.img = even[i].artist.image_url;
            dummyObj.date = GetDate(even[i].datetime)
            dummyObj.time = GetTime(even[i].datetime)
            dummyArr.push(dummyObj);
        }
        setCardData(dummyArr);



    }
    function GetDate(dat) {
        let date = new Date(dat);

        let fullDate = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
        return fullDate;

    }
    function GetTime(date) {
        const time = new Date(date).toLocaleTimeString('en',
            { timeStyle: 'short', hour12: false, timeZone: 'UTC' });
        return time;
    }
    useEffect(() => {
        const cookVal = cookies.access_token;

        if (cookVal != undefined) {
            setCook(true);
            const dat = cookies.access_token.name;
            axios.get(`https://rest.bandsintown.com/artists/${dat}/events?app_id=abc`).then(res => {


                EventDataSetter(res.data);

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


                {cardData.map((item, index) => {
                    // console.log(item)
                    return (
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">

                            <Card key={index} data={item} index={index} />
                        </div>

                    )
                })
                }

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