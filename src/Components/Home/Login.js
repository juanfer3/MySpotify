import React, { Component } from 'react';
import './Login.css'

import { Grid, Image } from 'semantic-ui-react'

import Vintage from '../../Images/fondo_1.jpg';

class Login extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Grid.Row spacing={0}>
                        <Grid.Column width={8} style={ { backgroundImage: `url(require(${Vintage}))` } }>
                            <Image src={Vintage} />
                        </Grid.Column>
                        <Grid.Column width={8} className='fondo_degrade'>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>

                <div className='content_btn_neon '>
                    <button className='btn_neon'>
                    My SPOT<span className="first">I</span>FY
                    </button>
                </div>
            </div>
        );
    }
}

export default Login;