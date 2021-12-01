import React, { useState, useEffect } from 'react';
import CountrySelect from 'react-bootstrap-country-select';
import { useCookies } from "react-cookie"
const CountryFilter = () => {

    const [value1, setValue] = useState(null);
    const [cookies, setCookie] = useCookies(['country'])
    const ClickHandler = (country) => {
        if (country != undefined) {
            console.log(country)
            setValue(country.name)
            setCookie("country", country.name, { path: '/' })

        }
    }
    useEffect(() => {

        // error handle for if county value not set in cookies
        if (cookies.country != undefined) {
            setValue(cookies.country)
        }
    }, [cookies.country])
    return (
        <>
            <p className="text-white">Select Country</p>
            <CountrySelect
                onChange={ClickHandler}
                value={value1}
                selected={value1}
                flags="true"
            />
        </>
    );

};
export default CountryFilter;