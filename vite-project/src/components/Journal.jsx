import React from "react";
import LocationIcon from "../assets/location.png";

function Journal(props){
    return(
        <section>
            <img className="journal-img" src={props.image}/>
            <div className="journal-info">
                <div className="header">
                    <h1>{props.title}</h1>
                    <div className="journal-location">
                        <a target="_blank" href={props.googleMapsUrl}>
                            <img src={LocationIcon}/>
                            <span>{props.location}</span>
                        </a>
                    </div>
                </div>
                <p className="bold">{props.startDate} - {props.endDate}</p>
                <p>{props.description}</p>
            </div>
        </section>
    )
}

export default Journal