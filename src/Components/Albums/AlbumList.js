import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Transition, CSSTransition } from 'react-transition-group';

/**Semantic ui */
import { Grid, Image, Label, Icon } from 'semantic-ui-react'
import MaterialIcon, {colorPalette} from 'material-icons-react';


/**Services */
import { getAlbums } from "../../Services/ApiArtists";

import Slider from "react-slick";

class AlbumList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            myAlbums:[],
           persons:[]
        };
      }

    componentDidMount(){
        getAlbums().then(data => {
            console.log(data)
            this.setState({
                myAlbums: data
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
            <Transition timeout={450} in={true} appear>
                {(status) =>(
                    <div className={`fade fade-${status}`}>
                        <div className='neon'>
                            <h1 className='neon_a' data-text='Lista de Albumnes' >Lista de Albumnes</h1>
                        </div>
                        <Slider {...settings}>
                            {this.state.myAlbums.map(album => {
                                return (
                                        <div key={album.name}  className='mySlider'>
                                                <Image 
                                                className='BoxArtist' 
                                                as={Link}  to={`/${album.artist.name}/${album.name}`}
                                                src={album.image[3]['#text']}/>
                                                <br/>
                                                <br/>
                                                <div>
                                                <Label color='teal' horizontal>
                                                    <Icon align='center' name='shuffle' spaced='center'/>
                                                </Label>
                                                {album.name}
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

export default AlbumList;