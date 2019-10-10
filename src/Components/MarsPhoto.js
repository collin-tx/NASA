import React from 'react';

const MarsPhoto = (props) => {
    return (
        <div className="mars-photo">
            <li className="mars-item">
                <p>{props.rover}</p>
                <img src={props.img} alt="mars" />
                <p>{props.date}</p>
            </li>
        </div>
    );
}

export default MarsPhoto;
