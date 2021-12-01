import ArtistInfo from "../ArtistInfo/artistinfo";
import { AiOutlineArrowDown } from "react-icons/ai"
import { useCookies } from "react-cookie"
import { useEffect } from "react";
const ToggleArt = () => {
    const [cookies, setCookie] = useCookies(["access_token"])
    useEffect(() => {

    }, [cookies.access_token])
    return (
        <>    {cookies.access_token != undefined ?
            <>
                <p>
                    <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapse" aria-expanded="true" aria-controls="collapse">
                        <span>Click to View Artist Full Detail<AiOutlineArrowDown size="25" /></span>
                    </button>
                </p>
                <div class="collapse" id="collapse" >
                    <ArtistInfo data={cookies.access_token} />
                </div>
            </>
            : <></>}
        </>
    )
}
export default ToggleArt;