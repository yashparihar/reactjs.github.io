
import React from "react";
import {render} from "react-dom";

import {Header} from "./Header";

export class Root extends React.Component {
    render(){
        return (
            <div className="container">
                <div className="row">
                    <Header />
                </div>

                <div className="row">
                    {/*{this.props.children}*/}
                </div>

            </div>
        );
    }
}