// component for reflection page. User will be prompted to put their reflection on art pieces in here

import React from "react";
import "./style.css";

function Reflect() {
    return (
        <div className="card">
                    <div className="card-header">
                        <h4>Saved Piece</h4>
                    </div>
                    <label>Reflect and Meditate on your favorite pieces here:
                        <textarea placeholder="None"></textarea>
                    </label>
                
        </div>
    )
}

export default Reflect;