import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
                <Grid.Column as={ Link } to='/' ><MaterialIcon size={25} icon="home"  />
                </Grid.Column>
                <Grid.Column>
                    <MaterialIcon  size={25} icon="search"  /> 
                </Grid.Column>
                <Grid.Column>
                    <MaterialIcon  size={25} icon="vertical_split"  />
                </Grid.Column>
                <Grid.Column>
                    <MaterialIcon  size={25} icon="watch_later"  />
                </Grid.Column>
                </Grid.Row>
            </Grid>       
        );
    }
}

export default Navbar;