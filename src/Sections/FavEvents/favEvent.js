import React, { useEffect, useState } from 'react'
import Card from '../../Components/Cards/cards';
// import Card from "../../Components/Cards";
import Events from "../../Utils/EventsData"

function FavEvent() {
    const [favArr, setFavArr] = useState([])
    //Method will get value and stores favorites items in array of objects

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
    }
    useEffect(() => {

        //getting data from local storages and checking for Error
        let arr = localStorage.getItem("fav");

        if (arr != undefined) {
            GetFav(arr);
        }



    }, [])
    return (
        <div className="container-fluid">
            {/* <div className="row">
                {favArr.map((item, index) => {
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">

                        <Card data={item} index={index} />
                    </div>
                })}
            </div> */}

            <h1>{favArr.length}</h1>
        </div>
    )
}

export default FavEvent;