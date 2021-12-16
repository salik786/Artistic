const SearchCard = ({ item, ClickHandler }) => {
    console.log(item.name)
    return (
        <div class="card p-0" onClick={() => ClickHandler(item)} >
            <div class="card-body d-flex flex-row ">
                <div className="" >
                    <img
                        className="rounded-circle "
                        src={item.image_url}
                        width="50"
                        height="50"
                    />
                </div>
                <div>
                    <h6 class="card-title">{item.name}</h6>
                    {/* <p class="card-text"><a href={item.facebook}>Click to view Facebook</a></p> */}
                </div>
            </div>
        </div>
    )
}
export default SearchCard;