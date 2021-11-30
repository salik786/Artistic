import React, { useState, useEffect } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import DatePicker from 'react-date-picker';
import { useCookies } from 'react-cookie';
import { AiFillCalendar } from "react-icons/ai"
import "./filters.css"
const DateFilter = () => {

    const [startDate, setStartDate] = useState(new Date());
    const [cookies, setCookie] = useCookies(['date'])
    // const [value, setVal] = useState(new Date());

    const SelectHandler = () => {
        console.log("start" + startDate);
        setCookie("date", startDate, { path: '/' })
    }
    useEffect(() => {


    }, [])
    //  <DatePicker inputStyle={styles} onChange={date => setStartDate(date)} />
    return (
        <>
            {/* <DatePicker
                value={value}
                dateFormat="yyyy-MM-dd"
                onChange={() => setVal(value)}
                selected={value}
                inputStyle={styles}

            /> */}
            <p className="text-white">Select Date</p>
            <DatePicker

                selected={startDate}
                value={startDate}
                onSelect={SelectHandler}
                onChange={date => setStartDate(date)}
                className="data-pick"
            />


        </>
    );
}
export default DateFilter;