import React, { useState, useEffect } from "react";
import { BsSearch } from "react-icons/bs"
import { useCookies } from 'react-cookie'
import "./search.css"
import Dataset from "../../Utils/MOCK_DATA"
import SearchCard from "../SearchCardDetail/searchcard";
const Search = () => {
    const [inpVal, setInpVal] = useState("")
    const [emptyErr, setEmpty] = useState(false);

    const [cookies, setCookie] = useCookies(['access_token'])

    const HandleChange = (e) => {
        setInpVal((e.target.value.toLowerCase()));

    }

    const ClickHandler = (item) => {


        // error handling if search field is empty
        if (inpVal == "") {
            setEmpty(true);
            setCookie('access_token', "", { path: '/' })
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
        if (cookVal != undefined) {
            setInpVal(cookVal.name)
        }
    }, [])
    return (
        <>
            <form className="form-d">
                <div class="input-group ">
                    <input id="search-focus" type="search" id="form1" value={inpVal} class="form-control" onChange={HandleChange} onKeyPress={EnterHandler} placeholder="Enter Name of Artist" />

                    <button type="button" class="btn btn-primary" onClick={ClickHandler} >
                        <BsSearch />
                    </button>
                    {emptyErr == true ? <div><h6 className="text-danger">Artist Field Is Empty</h6></div> : <></>}
                </div>
                {inpVal != "" ? (
                    <div className="card-contain">
                        {Dataset.map((item, index) => {
                            return ((item.name.toLowerCase()).includes(inpVal) ?
                                <>
                                    <SearchCard item={item} ClickHandler={ClickHandler} />
                                </>
                                :
                                <></>
                            )
                        })}
                    </div>
                ) : (
                    <>No such artist</>
                )}
            </form>


        </>


    )



}
export default Search;