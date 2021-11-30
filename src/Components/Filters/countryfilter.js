import React, { useState, useEffect } from 'react';
import CountrySelect from 'react-bootstrap-country-select';
import { useCookies } from "react-cookie"
const CountryFilter = () => {

    const [value1, setValue] = useState(null);
    const [cookies, setCookie] = useCookies(['country'])
    const ClickHandler = (country) => {
        setValue(country.name)
        setCookie("country", country.name, { path: '/' })
    }
    useEffect(() => {
        console.log(cookies)
        setValue(cookies.country)
    }, [value1])
    return (
        <>
            <p className="text-white">Select Country</p>
            <CountrySelect


                onChange={ClickHandler}
                value={value1}
                // onClick={ClickHandler}
                flags="false"
            />
        </>
    );

};
export default CountryFilter;