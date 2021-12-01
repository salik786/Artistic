import React,{useState,useEffect} from 'react'
import Search from '../../Components/Search/search'
import ButtonFilter from '../../Components/Filters/btnfilter'

import CountryFilter from '../../Components/Filters/countryfilter'
import BadgeFilter from '../../Components/BadgeFilter/badgeFilter'
import "./artistsearch.css"
import {useCookies} from "react-cookie"
function ArtistInfo() {
    const [cookies,setCookie,removeCookies] = useCookies(["country"])
    //to show which type of filter applied 
    const [filter,setFilter]=useState(false);
    const FilterRemove=()=>{
        
        removeCookies("country")
        setFilter(false);
       

    }
    useEffect(()=>{
        if(cookies.country!=undefined)
        {
            setFilter(true);
        }


    },[cookies])
    return (
        <div>
               <div className="row shadow1 d-flex " >
               
               <form className=" col-12 d-flex flex-row ">
                   <div className="row">
                       <div className=" col-xl-12 col-lg-8 col-md-6 col-sm-12  text-center">
                           <Search />
                       </div>
                       <div className="row w-100 justify-content-end mt-4">
                           <h5>Filters</h5>
                       {filter==true?
                       <div className="col-sm-12 ">
                           {/* <ButtonFilter  /> */}
                           <BadgeFilter FilterRemove={FilterRemove} />
                       </div>:<><h6>No Filters Applied</h6></> 

                       }</div>
                   </div>

                   <div className="row w-25">
                       <div className="col-sm-12 ">
                           {/* <ButtonFilter  /> */}
                           <CountryFilter />
                       </div>
                   </div>
                
               </form>

           </div>
        </div>
    )
}

export default ArtistInfo;