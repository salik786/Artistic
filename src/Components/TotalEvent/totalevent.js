import React, { useState, useEffect } from "react";
import { useCookies } from 'react-cookie'
import "./totalevent.css"
const TotalEvents = ({ len }) => {
    const [cookies, setCookie] = useCookies(['access_token'])
    const [inpVal, setInpVal] = useState("")

    useEffect(() => {
        const cookVal = cookies.access_token;
        setInpVal(cookVal)
    }, [cookies])

    return (
        <>
            <h5>
                {
                    inpVal != "" ?
                        <span className="even-info">{`${inpVal}`}  {`upcoming events : ${len}`}</span>
                        : <span className="even-info text-danger" >No Artist Search </span>
                }
            </h5>
        </>
    )
}
export default TotalEvents;