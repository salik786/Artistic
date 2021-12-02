const SearchCard = ({ item, ClickHandler }) => {

    return (
        <div class="card p-0" onClick={() => ClickHandler(item)} >
            <div class="card-body d-flex flex-row">
                <div className=" p-0">
                    <img
                        className="rounded-circle"
                        src={item.img}
                        width="50"
                        height="50"
                    />
                </div>
                <div>
                    <h6 class="card-title">{item.name}</h6>
                    <p class="card-text"><a href={item.facebook}>Click to view Facebook</a></p>
                </div>
            </div>
        </div>
    )
}
export default SearchCard;