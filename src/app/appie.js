import React from "react";
import {render} from "react-dom";
//import {Router, Route} from "react-router";
//import { browserHistory} from "react-router";
//import { browserHistory } from "react-router";
import {BrowserRouter as Router , Link} from 'react-router-dom' ;
import Route from 'react-router-dom/Route';


export class Appie extends React.Component {

    render() {
        <Router>
            <div className="appie">

            <Route path="/" render={
                ()=> {
                    return (<h1> Hello HOME</h1>);
                }
            }/>

            </div>
        </Router>
    }

}

export default Appie;