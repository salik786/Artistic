import React, { useEffect } from 'react'
import "./artistinfo.css"
function Artistinfo({ data }) {

    return (
        <div className="info">
            <article className="postcard dark blue">
                <a className="postcard__img_link" href="#">
                    <img className="postcard__img" src={data.image_url} alt="Image Title" />
                </a>
                <div className="postcard__text">
                    <h1 className="postcard__title blue">{data.name}</h1>
                    <div className="postcard__subtitle small">
                        <time datetime="2020-05-25 12:00:00">
                            <i className="fas fa-calendar-alt mr-2"></i><a href={data.facebook_page_url}>facebook</a>
                        </time>
                    </div>
                    <div className="postcard__bar"></div>
                    <div className="postcard__preview-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!</div>
                    <ul className="postcard__tagbox">
                        <li className="tag__item"><i className="fas fa-tag mr-2"></i>Tracker:{data.tracker_count}</li>
                        <li className="tag__item"><i className="fas fa-clock mr-2"></i>Events Upcoming : {data.upcoming_event_count}</li>

                    </ul>
                </div>
            </article>

        </div>
    )
}

export default Artistinfo
