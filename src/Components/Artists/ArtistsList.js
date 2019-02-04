import React, { Component } from 'react';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
class ArtistsList extends Component {
    render() {
        
         
        return (
            <div>
                <h4>ArtistsList</h4>
                <OwlCarousel
                className="owl-theme"
                loop
                margin={10}
                nav
            >
                <div class="item"><img src='http://static1.squarespace.com/static/56066cf9e4b0ffbc0fe62db1/56067f85e4b003ca223108b9/575f7bf701dbaeed2ba4a9bd/1465965090557/andy+shauf+cover.jpg?format=1500w'/></div>
                <div class="item"><img src='http://static1.squarespace.com/static/56066cf9e4b0ffbc0fe62db1/56067f85e4b003ca223108b9/575f7bf701dbaeed2ba4a9bd/1465965090557/andy+shauf+cover.jpg?format=1500w'/></div>
                <div class="item"><img src='http://static1.squarespace.com/static/56066cf9e4b0ffbc0fe62db1/56067f85e4b003ca223108b9/575f7bf701dbaeed2ba4a9bd/1465965090557/andy+shauf+cover.jpg?format=1500w'/></div>
                <div class="item"><img src='http://static1.squarespace.com/static/56066cf9e4b0ffbc0fe62db1/56067f85e4b003ca223108b9/575f7bf701dbaeed2ba4a9bd/1465965090557/andy+shauf+cover.jpg?format=1500w'/></div>
                <div class="item"><img src='http://static1.squarespace.com/static/56066cf9e4b0ffbc0fe62db1/56067f85e4b003ca223108b9/575f7bf701dbaeed2ba4a9bd/1465965090557/andy+shauf+cover.jpg?format=1500w'/></div>
                <div class="item"><img src='http://static1.squarespace.com/static/56066cf9e4b0ffbc0fe62db1/56067f85e4b003ca223108b9/575f7bf701dbaeed2ba4a9bd/1465965090557/andy+shauf+cover.jpg?format=1500w'/></div>
                <div class="item"><img src='http://static1.squarespace.com/static/56066cf9e4b0ffbc0fe62db1/56067f85e4b003ca223108b9/575f7bf701dbaeed2ba4a9bd/1465965090557/andy+shauf+cover.jpg?format=1500w'/></div>
                <div class="item"><img src='http://static1.squarespace.com/static/56066cf9e4b0ffbc0fe62db1/56067f85e4b003ca223108b9/575f7bf701dbaeed2ba4a9bd/1465965090557/andy+shauf+cover.jpg?format=1500w'/></div>
                <div class="item"><img src='http://static1.squarespace.com/static/56066cf9e4b0ffbc0fe62db1/56067f85e4b003ca223108b9/575f7bf701dbaeed2ba4a9bd/1465965090557/andy+shauf+cover.jpg?format=1500w'/></div>
                <div class="item"><img src='http://static1.squarespace.com/static/56066cf9e4b0ffbc0fe62db1/56067f85e4b003ca223108b9/575f7bf701dbaeed2ba4a9bd/1465965090557/andy+shauf+cover.jpg?format=1500w'/></div>
                <div class="item"><img src='http://static1.squarespace.com/static/56066cf9e4b0ffbc0fe62db1/56067f85e4b003ca223108b9/575f7bf701dbaeed2ba4a9bd/1465965090557/andy+shauf+cover.jpg?format=1500w'/></div>
                <div class="item"><img src='http://static1.squarespace.com/static/56066cf9e4b0ffbc0fe62db1/56067f85e4b003ca223108b9/575f7bf701dbaeed2ba4a9bd/1465965090557/andy+shauf+cover.jpg?format=1500w'/></div>
            </OwlCarousel>

            </div>
        );
    }
}

export default ArtistsList;