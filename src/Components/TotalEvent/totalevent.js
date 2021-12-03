import React, { useState, useEffect } from "react";
import { useCookies } from 'react-cookie'
import "./totalevent.css"
import Event from "../../Utils/EventsData"
const TotalEvents = () => {
    const [cookies, setCookie] = useCookies(['access_token'])
    const [inpVal, setInpVal] = useState("")
    const [totalEv, setTotalEv] = useState(0)
    useEffect(() => {
        const cookVal = cookies.access_token;
        if (cookVal != undefined) {
            setInpVal(cookVal);
            let count = 0;
            for (var i = 0; i < Event.length; i++) {
             
                if (Event[i].Art_id == cookVal.id) {
                    count++;
                }
            }
            setTotalEv(count)
        }
    }, [cookies])
    return (
        <>
            <h5>
                {
                    inpVal != "" && cookies.access_token != undefined ?
                        <span className="even-info">{`${inpVal.name}`}  {`upcoming events : ${totalEv}`}</span>
                        : <span className="even-info text-success" >No Artist Search </span>
                }
            </h5>
        </>
    )
}
export default TotalEvents;