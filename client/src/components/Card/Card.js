// Card component displays in App.js. Border does not display even if I try to style it
import React, { Component } from "react";
import "./style.css";

// Will need to pass props through to render data from API calls. Component is prepared for inserting API data from pieces of art

class Card extends Component {
    render() {
    return (
        <div className="card lb-card">
            <div className="card-divider">
                <h4>Title of Piece</h4>
            </div>
            <div className="card-section">
                <p>Artist</p>
            </div>
            <div className="card-section">
                <p>Date</p>
            </div>
            <div className="card-section">
                <p>Other data</p>
            </div>
        </div>
    )
}
};

export default Card;