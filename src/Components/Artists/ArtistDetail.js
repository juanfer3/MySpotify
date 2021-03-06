import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Transition, CSSTransition } from 'react-transition-group';

import './ArtisDetail.css';

import { Grid, Image, Label, Icon, Button, Header, Modal, List } from 'semantic-ui-react'

/**Material Icons */
import MaterialIcon from 'material-icons-react';

/**Services */
import { getArtistName } from "../../Services/ApiArtists";
import Navbar from '../Navbar/Navbar';

class ArtistDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
           name: '',
           img: '',
        };
    }

    componentDidMount(){
        const { match: {params} } = this.props;
        getArtistName(params.name).then(data=>{
            console.log(data);
            this.setState({
                name: data.name,
                img: data.image[3]['#text']
            })
        })
    }

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
                                <div className="contenArtist neon">
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

export default ArtistDetail;