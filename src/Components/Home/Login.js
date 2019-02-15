import React, { Component } from 'react';
import './Login.css'

import { Grid, Image, Form, Button, Icon  } from 'semantic-ui-react'

import Vintage from '../../Images/fondo_1.jpg';

import { Input } from 'semantic-ui-react'
import { login } from '../../Services/Firebase'

class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            username:'',
            password:'',
            user: ''
        }
    }

    handleChange(evt){
        this.setState({ [evt.target.name]: evt.target.value });
    }

    login(){
        const user = login();

        console.log(user.displayName);
    }

    render() {
        return (
            <div>
                <Grid>
                    <Grid.Row spacing={0}>
                        <Grid.Column width={8} className='background_black'>
                        <Form>
                            <Form.Field>
                            <label>First Name</label>
                            <input placeholder='Username' 
                            value={this.state.username} 
                            name='username'
                            onChange={(e)=>this.handleChange(e)} />
                            </Form.Field>
                            <Form.Field>
                            <label>Password</label>
                            <input placeholder='Password' 
                            name='password'
                            type='password'
                            value={this.state.password} 
                            onChange={(e)=>this.handleChange(e)}/>
                            </Form.Field>
                            <Form.Field>
                            </Form.Field>
                            <Button 
                            type='submit' 
                             >Submit</Button>
                        </Form>
                        </Grid.Column>
                        <Grid.Column width={8} style={ { backgroundImage: `url(require(${Vintage}))` } } >
                        </Grid.Column>
                    </Grid.Row>
                </Grid>

                <div className='content_btn_neon ' onClick={() => this.login()}>
                    <button className='btn_neon'>
                    <Icon circular className="first" name='gofore' />
                    LO<span className="first">G</span>IN
                    </button>
                </div>
            </div>
        );
    }
}

export default Login;