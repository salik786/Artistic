import React, { useState, useEffect } from "react";
import { BsSearch } from "react-icons/bs"
import { useCookies } from 'react-cookie'
const Search = () => {
    const [inpVal, setInpVal] = useState("")
    const [emptyErr, setEmpty] = useState(false);
    const [cookies, setCookie] = useCookies(['access_token'])

    const HandleChange = (e) => {
        setInpVal(e.target.value);

    }
    const ClickHandler = () => {
        if (inpVal == "") {
            setEmpty(true);
            setCookie('access_token', "", { path: '/' })
        }
        else {
            setEmpty(false);
            setCookie('access_token', inpVal, { path: '/' })
        }

        console.log(inpVal)
    }

    const EnterHandler = (event) => {
        console.log("dsad")

        if (event.key === 'Enter') {
            if (inpVal == "") {
                setEmpty(true);
                setCookie('access_token', "", { path: '/' })
            }
            else {
                setEmpty(false);
                setCookie('access_token', inpVal, { path: '/' })
            }
        }

    }
    useEffect(() => {
        const cookVal = cookies.access_token;
        setInpVal(cookVal)
    }, [])
    return (
        <>
            <div class="input-group pt-4">

                <input id="search-focus" type="search" id="form1" value={inpVal} class="form-control" onChange={HandleChange} onKeyPress={EnterHandler} placeholder="Enter Name of Artist" />

                <button type="button" class="btn btn-primary" onClick={ClickHandler} >
                    <BsSearch />
                </button>
                {emptyErr == true ? <div><h6 className="text-danger">Artist Field Is Empty</h6></div> : <></>}
            </div>
        </>


    )



}
export default Search;