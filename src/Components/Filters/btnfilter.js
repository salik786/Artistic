import { useCookies } from "react-cookie"
import { useEffect } from "react"
const ButtonFilter = ({ filters }) => {
    const country = useCookies(['country'])


    const ClickHandler = (e) => {
        e.preventDefault();
        filters(country[0])
        // console.log(country[0])
    }
    useEffect(() => {

    }, [])
    return (
        <button className="btn btn-primary " onClick={ClickHandler}>Apply Filters</button>
    )


}
export default ButtonFilter;