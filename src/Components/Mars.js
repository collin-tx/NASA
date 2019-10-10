import React, { Component } from 'react'
import MarsPhoto from './MarsPhoto';
import { randomPhotoIndex } from '../utils/helper';

export class Mars extends Component {
    
    state = { 
        data: '',
        loading: false
    }
    
    componentDidMount(){
        this.getMarsPhotos();
    }

    getMarsPhotos = () => {
        this.setState({ loading: true })
        const key = `1hIiLkyoh1b9IDwIHpQORgrDDsuyixy4FEzybuel`;
        const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${key}`;
        fetch(url).then(response => response.json())
            .then(data => {
                this.setState({ data });
            });
        this.setState( ()=> ({ loading: false }));
    };

    render() {
        const photos = this.state.data.photos;
        const indexArray = randomPhotoIndex();
        const showPhotos = photos && photos.filter((photo, index) => indexArray.includes(index))
            .map(photo => {
                return (
                <MarsPhoto img={photo.img_src} 
                key={photo.id} 
                rover={photo.rover.name} 
                date={photo.earth_date} />)
            });
        return (
            <div id="mars-list">
                <h2 className="text-dark text-center m-5">Mars Rover Photos</h2>
                <ul id="mars-photos-group">
                    {showPhotos}
                </ul>
                <p className="text-dark text-center">{!photos ? 'Loading...':''}</p>
            </div>
        )
    }
}

export default Mars
