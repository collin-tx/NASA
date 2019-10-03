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
            <div>
                <h2>Astronomy Picture of the Day</h2>
                <h3>{data.title && data.title}</h3>
                {data.date && 
                <p>{dateArr[1]}.{dateArr[2]}.{dateArr[0]}</p>
                }
                <img src={data.url && data.url} alt="APOD" />
                <p>{data.explanation && data.explanation}</p>
            </div>
        )
    }
}

export default Apod
