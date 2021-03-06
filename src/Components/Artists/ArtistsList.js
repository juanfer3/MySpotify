import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ArtistList.css'

/**Semantic ui */
import { Grid, Image, Label, Icon } from 'semantic-ui-react'
import MaterialIcon, {colorPalette} from 'material-icons-react';


import { Transition, CSSTransition } from 'react-transition-group';


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
            <Transition timeout={200} in={true} appear>
                {(status) =>(
                    <div className={`fade fade-${status}`}>
                        <div className='neon'>
                            <h1 className='neon_a' data-text='ArtistsList'>ArtistsList</h1>
                        </div>
                        <Slider {...settings}>
                            {this.state.myArtist.map(artist => {
                                return (
                                        <div key={artist.name} className='mySlider'>
                                                <Image 
                                                as={Link} to={`/artist/${artist.name}`}
                                                className='BoxArtist' src={artist.image[3]['#text']} />
                                                <br/>
                                                <br/>
                                                <div>
                                                <Label color='teal' horizontal>
                                                    <Icon align='center' name='shuffle' spaced='center'/>
                                                </Label> {artist.name}
                                                </div>
                                        </div>
                                )}
                            )}
                        </Slider>
                    </div>
                )}
            </Transition>
        );
    }
}

export default ArtistsList;