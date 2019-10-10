import React, { Component } from 'react'

export class Asteroids extends Component {
    
    state = {
        data: ''
    }
    
    componentDidMount(){
        this.getData();
    }

    getData = () => {
        const key = `1hIiLkyoh1b9IDwIHpQORgrDDsuyixy4FEzybuel`
        const url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=${key}`
        fetch(url).then(response => response.json())
            .then(data => {
                console.log(data);
            })
    }

    render() {
        return (
            <div>
                <p className="text-dark">asteroids</p>
            </div>
        )
    }
}

export default Asteroids
