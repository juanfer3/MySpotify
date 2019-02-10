import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
                <Grid.Row columns={3} className='topNavbar'>
                    <Grid.Column align='justify' className='iconNavbar' as={ Link } to='/'>
                        <Icon name='angle left'  size='big'  />
                    </Grid.Column>
                    <Grid.Column>
                        <h3>Àlbum</h3>
                    </Grid.Column>
                    <Grid.Column align='right'>
                        <Icon className='iconNavbar' name='heart outline'  color='white' size='big'/>
                        <Modal dimmer='blurring' trigger={ <Icon className='iconNavbar' name='ellipsis vertical' link color='white' size='big'/>} basic size='small' centered={false}>
                            
                            <Modal.Content align='center'>
                                <Image
                                src={this.state.img}
                                as='a'
                                size='medium'
                                target='_blank'
                                />
                                <h3>{this.state.name}</h3>
                            </Modal.Content>
                            <Modal.Actions>
                            <List divided relaxed>
                                <List.Item>
                                <List.Icon className='iconNavbar' link name='heart outline' size='large' verticalAlign='middle' />
                                <List.Content>
                                    <List.Header as='a'>Semantic-Org/Semantic-UI</List.Header>
                                    <List.Description as='a'>Updated 10 mins ago</List.Description>
                                </List.Content>
                                </List.Item>
                                <List.Item>
                                <List.Icon className='iconNavbar' link name='server' size='large' verticalAlign='middle' />
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
            <Grid columns={1}>
                <Grid.Column>
                    <div className='contenImg'>
                        <Image
                            src={this.state.img}
                            as='a'
                            size='medium'
                            target='_blank'
                            className='imgOverlay'
                        />
                        <div className="contenArtist">
                            <h3>
                                {this.state.name}
                            </h3>   
                        </div>
                    </div>
                </Grid.Column>
                <Grid.Column>
                        <h3 >
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
                    <Button positive>ALEATORIO</Button>
                </Grid.Column>
            </Grid>
            <Navbar></Navbar>
            </div>
        );
    }
}

export default ArtistDetail;