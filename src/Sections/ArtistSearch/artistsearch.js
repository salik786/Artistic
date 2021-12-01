import React, { useState, useEffect } from 'react'
import Search from '../../Components/Search/search'

import CountryFilter from '../../Components/Filters/countryfilter'
import BadgeFilter from '../../Components/BadgeFilter/badgeFilter'
import "./artistsearch.css"
import { useCookies } from "react-cookie"
function ArtistInfo() {
    const [cookies, setCookie, removeCookies] = useCookies(["country"])
    //to show which type of filter applied 
    const [filter, setFilter] = useState(false);
    const FilterRemove = () => {

        removeCookies("country")
        setFilter(false);



    }
    useEffect(() => {
        if (cookies.country != undefined) {
            setFilter(true);
        }


    }, [cookies])
    return (
        <div>
            <div className="row shadow1" >


                <div className="row">
                    <div className=" col-xl-4 col-lg-4 col-md-6 col-sm-12 ">
                        <Search />
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">

                        <CountryFilter />


                    </div>
                </div>





                <form className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                    <h6 className="mt-4">Filters</h6>
                    {filter == true ?
                        <div className="col-sm-12 ">
                            {/* <ButtonFilter  /> */}
                            <BadgeFilter FilterRemove={FilterRemove} />
                        </div> : <><p>No Filters Applied</p></>

                    }</form>

            </div>
        </div>
    )
}

export default ArtistInfo;