import React, { useEffect, useState } from 'react'
import Card from '../../Components/Cards/cards';
// import Card from "../../Components/Cards";
import Events from "../../Utils/EventsData"

function FavEvent() {
    const [favArr, setFavArr] = useState([])
    function GetFav(arr) {

        const arr1 = JSON.parse(arr);//getting favorites array in local Storage

        var j = 0;
        for (let i = 0; i < Events.length; i++) {

            if (arr1.includes(Events[i].even_id)) {
                let arrcop = favArr;
                arrcop.push(Events[i]);
                setFavArr(arrcop)

            }
        }
        // console.log(favArr)




    }
    useEffect(() => {


        let arr = localStorage.getItem("fav");
        if (arr != undefined) {
            GetFav(arr);
        }



    }, [])
    return (
        <div className="container-fluid">

            <div className="row">
                {favArr.map((item, index) => {
                    return (<div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">

                        <Card data={item} index={index} />
                    </div>)
                })}
            </div>


        </div>
    )
}

export default FavEvent;