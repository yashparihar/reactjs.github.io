
import React from "react";
import {render} from "react-dom";

import {Header} from "./Header";

export class Root extends React.Component {
    render(){
        return (
            <div className="container">
                <div className="row">
                    <Header homeLink={this.props.homeLink}/>
                </div>

                <div className="row">
                    {this.props.children}
                </div>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.props.mounting.bind(this)}> (Un)Mount Home
                    </button>
                </div>

            </div>
        );
    }
}