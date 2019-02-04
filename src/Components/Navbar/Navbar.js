import React, { Component } from 'react';

import './Navbar.css'

/**Material Icons */
import MaterialIcon from 'material-icons-react';

/**Semantic UI */
import { 
    Grid
} from 'semantic-ui-react'

class Navbar extends Component {
    render() {
        return (
            <Grid columns='equal' className="Navbar">
                <Grid.Row>
                <Grid.Column><MaterialIcon size={25} icon="home" color='white' />
                </Grid.Column>
                <Grid.Column>
                    <MaterialIcon  size={25} icon="search" color='white' /> 
                </Grid.Column>
                <Grid.Column>
                    <MaterialIcon  size={25} icon="vertical_split" color='white' />
                </Grid.Column>
                <Grid.Column>
                    <MaterialIcon  size={25} icon="watch_later" color='white' />
                </Grid.Column>
                </Grid.Row>
            </Grid>       
        );
    }
}

export default Navbar;