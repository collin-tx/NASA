import React, { Component } from 'react'

export class Mars extends Component {
    
    state = { data: ''}
    
    componentDidMount(){
        this.getMarsPhotos();
    }

    getMarsPhotos = () => {
        const key = `1hIiLkyoh1b9IDwIHpQORgrDDsuyixy4FEzybuel`;
        const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${key}`;
        fetch(url).then(response => response.json())
            .then(data => {
                //console.log(data);
                this.setState({ data });
            });
    };

    render() {
        const photos = this.state.data.photos;
        const showPhotos = photos && photos.filter((photo, index) => index < 48);
        console.log(showPhotos);
        return (
            <div>
                MARSSS
            </div>
        )
    }
}

export default Mars
