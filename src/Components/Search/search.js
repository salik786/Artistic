import React, { useState, useEffect } from "react";
import { BsSearch } from "react-icons/bs"
import { useCookies } from 'react-cookie'
const Search = () => {
    const [inpVal, setInpVal] = useState("")

    const [cookies, setCookie] = useCookies(['access_token'])

    const HandleChange = (e) => {
        setInpVal(e.target.value);

    }
    const ClickHandler = () => {
        console.log(inpVal)
        setCookie('access_token', inpVal, { path: '/' })
    }
    useEffect(() => {
        const cookVal = cookies.access_token;
        setInpVal(cookVal)
    }, [])
    return (
        <>
            <div class="input-group pt-4">

                <input id="search-focus" type="search" id="form1" value={inpVal} class="form-control" onChange={HandleChange} />

                <button type="button" class="btn btn-primary" onClick={ClickHandler}>
                    <BsSearch />
                </button>
            </div>
        </>


    )



}
export default Search;