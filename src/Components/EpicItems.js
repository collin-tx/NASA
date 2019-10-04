import React from 'react';

const EpicItems = (props) => {
    const month = props.month;
    const day = props.day;
    const year = props.year;
    return (
        <div className="epic-item">
            <li className="epic-list-items">
                <h3>{`${month}.${day}.${year}`}</h3>
                <img className="epic-img" src={`https://epic.gsfc.nasa.gov/archive/natural/${year}/${month}/${day}/png/${props.image}.png`} alt="Epic" />
            </li>
        </div>
    );
}

export default EpicItems;
