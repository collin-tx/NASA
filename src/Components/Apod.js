import React, { Component } from 'react'

const key = `1hIiLkyoh1b9IDwIHpQORgrDDsuyixy4FEzybuel`;
export class Apod extends Component {
    
    state = {
        data: ''
    }


    componentDidMount(){
        this.getAPOD();
    }

    getAPOD = () => {
        fetch(`https://api.nasa.gov/planetary/apod?api_key=${key}`)
        .then(response => {
            return response.json();
        }).then(data => {
            console.log(data);
            this.setState({ data })
        })
    }


    render() {
        const data = this.state.data;
        const dateArr = data.date && data.date.split('-');
        return (
            <div id="apod">
                <h2 className="p-4 text-center">Astronomy Picture of the Day</h2>
                <h4 className="pb-2 text-center">{data.title && data.title}</h4>
                {data.date && 
                <p className="text-center">{dateArr[1]}.{dateArr[2]}.{dateArr[0]}</p>
                }
                <img src={data.url && data.url} alt="APOD" />
                <p className="p-5">{data.explanation && data.explanation}</p>
            </div>
        )
    }
}

export default Apod
