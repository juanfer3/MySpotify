import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ArtistList.css'

/**Semantic ui */
import { Grid, Image, Label, Icon } from 'semantic-ui-react'
import MaterialIcon, {colorPalette} from 'material-icons-react';


/**Services */
import { getArtist } from "../../Services/ApiArtists";

import Slider from "react-slick";

class ArtistsList extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
           myArtist:[],
           persons:[]
        };
      }

    componentDidMount(){
        getArtist().then(data => {
            this.setState({
                myArtist: data
            })}
        )
    }
    //<Link to={`/artist/${artist.name}`} className="link">
    //</Link>

    render() {
        var settings = {
            focusOnSelect: false,
            infinite: true,
            speed: 700,
            slidesToShow: 5,
            slidesToScroll: 3,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,

                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]
          };
        return (
            <div>
                <h1>ArtistsList</h1>
                
                <Slider {...settings}>
                    {this.state.myArtist.map(artist => {
                        return (
                                <div key={artist.name} className='mySlider'>
                                        <Image 
                                        as={Link} to={`/artist/${artist.name}`}
                                        className='BoxArtist' Linkto={`/artist/dave`} src={artist.image[3]['#text']} />
                                        <br/>
                                        <br/>
                                        <div>
                                        <Label color='teal' horizontal>
                                            <Icon align='center' name='shuffle' spaced='center'/>
                                        </Label>{artist.name}
                                        </div>
                                </div>
                        )}
                    )}
                </Slider>
                
            </div>
        );
    }
}

export default ArtistsList;