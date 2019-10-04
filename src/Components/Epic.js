import React, { Component } from 'react'
const key = `1hIiLkyoh1b9IDwIHpQORgrDDsuyixy4FEzybuel`;
export class Epic extends Component {
    
    state = {
        data: ''
    }

    componentDidMount(){
        this.getEPIC();
    }

    getEPIC = () => {
        const url = `https://api.nasa.gov/EPIC/api/natural/images?api_key=${key}`;
        fetch(url).then(response => response.json())
        .then(data => {
            console.log(data);
            this.setState({ data })
        })
    }
    
    render() {
        const data = this.state.data;
        const allPics = data[1] && data.map(pic => {
            let dateArr = pic.date.split('-');
            let year = dateArr[0];
            let month = dateArr[1];
            let day = dateArr[2].slice(0, 2);
            console.log(year, month, day);

            return (
                <li>
                    <h3>{`${month}.${day}.${year}`}</h3>
                    <img src={`https://epic.gsfc.nasa.gov/archive/natural/${year}/${month}/${day}/png/${pic.image}.png`} alt="Epic" />
                </li>
            )
        })
        return (
            <div>
                epic
                <ul>
                    {allPics}
                </ul>
            </div>
        )
    }
}

export default Epic
