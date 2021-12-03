import React, { useState, useEffect } from 'react';
import CountrySelect from 'react-bootstrap-country-select';
import { useCookies } from "react-cookie"
const CountryFilter = () => {
    //help user to find artist which belongs to specific country
    const [value1, setValue] = useState(null);
    const [cookies, setCookie] = useCookies(['country'])
//add country into cookies  
    const AddCountry = (country) => {
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
    }, [cookies.country])//looking for chnage to remin updated 
    return (
        <>
            <p className="text-dark mb-1">Filter Artist By Country</p>
            <CountrySelect
                className="w-50"
                onChange={AddCountry}
                value={value1}
                selected={value1}
                flags="true"
            />
        </>
    );

};
export default CountryFilter;