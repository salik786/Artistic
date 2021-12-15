import React, { useState, useEffect } from "react";
import { BsSearch } from "react-icons/bs"
import { useCookies } from 'react-cookie'
import "./search.css"
// import Dataset from "../../Utils/MOCK_DATA"
import SearchCard from "../SearchCardDetail/searchcard";
import axios from "axios";
const Search = () => {
    const [inpVal, setInpVal] = useState("")//setting input value
    const [emptyErr, setEmpty] = useState(false);//check for input field if empty
    const [select, setSelect] = useState(false);//selecting filter 
    const [cookies, setCookie, removeCookies] = useCookies(['access_token'])
    const [Dataset, setDataset] = useState([])
    const HandleChange = (e) => {
        axios.get(`https://rest.bandsintown.com/artists/${e.target.value}?app_id=abc`).then((res) => {
            // setDataset(res.data);
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
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

    //can be use for enter button in input
    // const EnterHandler = (event, item) => {
    //     // check for better user experience for search on Enter keyword
    //     if (event.key === 'Enter') {
    //         if (inpVal == "") {
    //             setEmpty(true);
    //             removeCookies("access_token")
    //         }
    //         if (item.name != undefined) {
    //             setInpVal(item.name.toLowerCase())
    //             setEmpty(false);
    //             setCookie('access_token', JSON.stringify(item), { path: '/' })
    //         }
    //         // else {
    //         //     setEmpty(false);
    //         //     setCookie('access_token', inpVal, { path: '/' })
    //         // }
    //     }

    // }
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

                <input id="search" autoComplete="off" type="search" id="form1" value={inpVal} class="form-control" onChange={HandleChange} placeholder="Enter Name of Artist" />
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
                                return (
                                    cookies.country != undefined
                                        ?
                                        item.name.toLowerCase().includes(inpVal) && (cookies.country == item.country)
                                            ?

                                            <SearchCard item={item} ClickHandler={ClickHandler} />
                                            :
                                            <></>
                                        : item.name.toLowerCase().includes(inpVal)
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