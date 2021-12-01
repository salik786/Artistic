import React,{useEffect,useState} from 'react'
import {useCookies} from "react-cookie"
import {AiOutlineCloseCircle} from "react-icons/ai"
function BadgeFilter({FilterRemove}) {
  const [cookies,setCookie]= useCookies(["country"])
  const [country,setCountry]=useState(null)
  useEffect(() => {
    if (cookies.country!=undefined)
    {
        setCountry(cookies.country)
    }
  },[cookies])
    return (
        <div>

            <button type="button" class="btn btn-primary">
          {country}<span class="badge badge-light " onClick={FilterRemove}><AiOutlineCloseCircle size="25"/></span>
              
            </button>
        </div>
    )
}

export default BadgeFilter
