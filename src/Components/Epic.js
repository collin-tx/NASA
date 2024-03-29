import React, { Component } from 'react'
import EpicItems from './EpicItems';
const key = `1hIiLkyoh1b9IDwIHpQORgrDDsuyixy4FEzybuel`;
export class Epic extends Component {
    
    state = {
        data: '',
        loading: false
    }

    componentDidMount(){
        this.setState({ loading: true })
        this.getEPIC();
    }

    getEPIC = () => {
        const url = `https://api.nasa.gov/EPIC/api/natural/images?api_key=${key}`;
        fetch(url).then(response => response.json())
        .then(data => {
            this.setState({ data, loading: false });
        });
    }
    
    render() {
        const data = this.state.data;
        const allPics = data[1] && data.map(pic => {
            let dateArr = pic.date.split('-');
            let year = dateArr[0];
            let month = dateArr[1];
            let day = dateArr[2].slice(0, 2);
            return (
                <EpicItems year={year} month={month} day={day}
                    image={pic.image} key={Math.random()+32*899} />
            )
        });

        let loading
        return (
            <div id="epic">
                <h1 className="epicText text-center mb-5">EPIC</h1>
                <p className="text">{this.state.loading ? 'Loading...':''}</p>
                <ul className="epic-list-group">
                    {allPics}
                </ul>
            </div>
        )
    }
}

export default Epic
