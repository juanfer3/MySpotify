import React, { Component } from 'react';

import Navbar from '../Navbar/Navbar';
import AlbumList from '../Albums/AlbumList';
import ArtistsList from '../Artists/ArtistsList';

class Home extends Component {
    render() {
        return (
            <div>
                <ArtistsList></ArtistsList>
                <AlbumList></AlbumList>
                <Navbar></Navbar>
            </div>
        );
    }
}

export default Home;