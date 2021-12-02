import React, { useEffect, useState } from 'react'
import FavEvent from '../../Sections/FavEvents/favEvent';

function FavEventsPage() {
    const [listen, setlisten] = useState(true)
    useEffect(() => {
        window.addEventListener("storage", (e) => {
            setlisten(!listen)
        })
    }, [listen])
    return (
        <div>
            <FavEvent />
        </div>
    )
}

export default FavEventsPage;
