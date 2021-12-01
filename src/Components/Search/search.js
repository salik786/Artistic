import React, { useState, useEffect } from "react";
import { BsSearch } from "react-icons/bs"
import { useCookies } from 'react-cookie'
import "./search.css"
import Dataset from "../../Utils/MOCK_DATA"
import SearchCard from "../SearchCardDetail/searchcard";
const Search = () => {
    const [inpVal, setInpVal] = useState("")
    const [emptyErr, setEmpty] = useState(false);
    const [select, setSelect] = useState(false);
    const [cookies, setCookie, removeCookies] = useCookies(['access_token'])

    const HandleChange = (e) => {
        setSelect(false)
        setInpVal((e.target.value.toLowerCase()));

    }

    const ClickHandler = (item) => {

        setSelect(true)
        // error handling if search field is empty
        if (inpVal == "") {
            setEmpty(true);
            removeCookies("access_token")

        }
        if (item.name != undefined) {
            setInpVal(item.name.toLowerCase())
            setEmpty(false);
            setCookie('access_token', JSON.stringify(item), { path: '/' })
        }



    }

    const EnterHandler = (event) => {
        // check for better user experience for search on Enter keyword
        if (event.key === 'Enter') {
            if (inpVal == "") {
                setEmpty(true);
                removeCookies("access_token")
            }
            else {
                setEmpty(false);
                setCookie('access_token', inpVal, { path: '/' })
            }
        }

    }
    useEffect(() => {
        const cookVal = cookies.access_token;
        if (cookVal != undefined) {
            setInpVal(cookVal.name)
        }
    }, [])
    return (
        <>

            <h5 className="">Search Your Favourite Artists</h5>
            <div class="input-group w-75">

                <input id="search-focus" autocomplete="off" type="search" id="form1" value={inpVal} class="form-control" onChange={HandleChange} onKeyPress={EnterHandler} placeholder="Enter Name of Artist" />
                <button type="button" class="btn btn-primary" onClick={ClickHandler} >
                    <BsSearch />

                </button>

            </div>

            {emptyErr == true ? <div><h6 className="text-danger">Artist Field Is Empty</h6></div> : <></>}

            {
                select == false ?

                    inpVal != "" ? (
                        <div className="card-contain" >
                            {Dataset.map((item, index) => {
                                return (item.name.toLowerCase().includes(inpVal)
                                    ?

                                    <SearchCard item={item} ClickHandler={ClickHandler} />


                                    :


                                    <></>
                                )
                            })}
                        </div>
                    ) : (
                        <></>
                    )
                    : <></>}



        </>


    )



}
export default Search;