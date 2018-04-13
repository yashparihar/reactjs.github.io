import React from "react";
import {render} from "react-dom";
//import {Router, Route} from "react-router";
//import { browserHistory} from "react-router";
//import { browserHistory } from "react-router";
import {BrowserRouter as Router , Link} from 'react-router-dom' ;
import Route from 'react-router-dom/Route';

export class Appy extends React.Component {

    render() {
        return(
            <div>ddff
            <Route exact path="*/about" render={
                ()=> {
                    return (<h3> about</h3>);
                }
            }/>
            </div>

        );
    }

}

export default Appy;