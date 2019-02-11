import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Transition, CSSTransition } from 'react-transition-group';

import './AlbumDetail.css';

import { Grid, Image, Label, Icon, Button, Header, Modal, List } from 'semantic-ui-react'

/**Material Icons */
import MaterialIcon from 'material-icons-react';

/**Services */
import { getAlbumName } from "../../Services/ApiArtists";
import Navbar from '../Navbar/Navbar';

class AlbumDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
           name: '',
           img: '',
           myAlbums:[],
           albumSelecte: [],
           artist: '',

        };
    }

    componentDidMount(){
        const { match: {params} } = this.props;
        getAlbumName(params.album).then((data, i)=>{
            console.log(data)
            this.setState({
                myAlbums: data
            })
            this.state.myAlbums.map((album, index) =>{
                if (album.artist == params.artist && album.name == params.album) {
                    this.setState({
                        img: album.image[3]['#text']
                    })
                }
            })
            this.setState({
                artist: params.artist,
                name: params.album
            })
        })

        
     
    }

    /*
    list(){

        console.log('entra a la lista')
        let artista = this.state.artist
        let arrayAlbum = this.state.myAlbums.find(album => (album.artist == artista))
        console.log(this.state.albumSelecte)

        this.setState({
            albumSelecte: this.state.albumSelecte
        })

        if (this.setState.albumSelecte != arrayAlbum) {
            console.log('variable no nula')
            this.setState({
                img: this.state.albumSelecte.image[3]['#text']
            })
        }
        
        
        /* filert
        this.state.myAlbums.filter(function(album, index){
            return album.artist == artista
        }
            ).map(artits =>{
                console.log(artits)
            return(
                <h1>{artits.name}</h1>
            )
        })
        
}*/



    render() {
        return (
            <div>
            <Grid>
                <Grid.Row columns={3}>
                    <Grid.Column align='justify' className='iconNavbar neon' as={ Link } to='/'>
                        <Icon name='angle left'  className='neon_a'  size='big'  />
                    </Grid.Column>
                    <Grid.Column className='neon'>
                        <h3 className='neon_a'>Àlbum</h3>
                    </Grid.Column>
                    <Grid.Column align='right' className='neon'>
                            <Icon className='iconNavbar neon_a' name='heart outline'   size='big'/>
                     
                        <Modal dimmer='blurring' trigger={ <Icon className='iconNavbar neon_a' name='ellipsis vertical' link 
                         size='big'/>} basic size='small' centered={false}>
                            
                            <Modal.Content align='center'>
                                <Image
                                src={this.state.img}
                                as='a'
                                size='medium'
                                target='_blank'
                                />
                                <div className='neon'>
                                    <h3 className='neon_a' data-text={this.state.name}>{this.state.name}</h3>
                                </div>
                            </Modal.Content>
                            <Modal.Actions>
                            <List divided relaxed>
                                <List.Item className='neon'>
                                    <List.Icon className='iconNavbar neon_a' link name='heart outline' size='large' verticalAlign='middle' />
                                <List.Content>
                                    <List.Header as='a'>Semantic-Org/Semantic-UI</List.Header>
                                    <List.Description as='a'>Updated 10 mins ago</List.Description>
                                </List.Content>
                                </List.Item>
                                <List.Item className='neon'>
                                <List.Icon className='iconNavbar neon_a' link name='server' size='large' verticalAlign='middle' />
                                <List.Content>
                                    <List.Header as='a'>Semantic-Org/Semantic-UI-Docs</List.Header>
                                    <List.Description as='a'>Updated 22 mins ago</List.Description>
                                </List.Content>
                                </List.Item>
                            </List>
                            </Modal.Actions>
                        </Modal>
                    </Grid.Column>
                </Grid.Row>
            </Grid>  
            <Transition timeout={200} in={true} appear>
                {(status) =>(
                    <Grid className={`fade fade-${status}`} columns={1}>
                        <Grid.Column>
                            <div className='contenImg'>
                                <Image
                                    src={this.state.img}
                                    as='a'
                                    size='medium'
                                    target='_blank'
                                    className='imgOverlay'
                                />
                                <div className="contenAlbum neon">
                                    <h3 className='neon_a' >
                                        {this.state.name}
                                    </h3>   
                                </div>
                            </div>
                        </Grid.Column>
                        <Grid.Column className='neon'>
                                <h3 className='neon_a'>
                                    {this.state.name}
                                </h3>  
                        </Grid.Column>
                        <Grid.Column>
                            <Label color='teal'>
                                <Icon align='center' name='shuffle' spaced='center'/>
                                ESCUCHAR EN MODO ALEATORIO
                            </Label>
                            <p>Àlbum de {this.state.artist}</p>
                        </Grid.Column>
                        <Grid.Column>
                            <div className='content_btn_neon '>
                                <button className='btn_neon'>
                                ALEATO<span className="first">R</span>IO
                                </button>
                            </div>
                        </Grid.Column>
                    </Grid>
                 )}
            </Transition>
            <Navbar></Navbar>
            </div>
        );
    }
}

export default AlbumDetail;