import React from "react";
import {render} from "react-dom";
//import {Router, Route} from "react-router";
//import { browserHistory} from "react-router";
//import { browserHistory } from "react-router";
import {BrowserRouter as Router, Link} from 'react-router-dom' ;
import Route from 'react-router-dom/Route';


import {Appy} from "./Appy";
import {Root} from "./components/Root";
import {Home} from "./components/Home";
import {User} from "./components/User";


class App extends React.Component {
    constructor() {
        super();
        this.state = {
            homeLink: "HOME",
            homeMounted: true
        }
    }

    changeLink(newlink) {
        this.setState({
            homeLink: newlink
        });
    }

    onGreet() {
        alert("Hello their , Ur welcome");
    }

    HomeMounting() {
        this.setState({
            homeMounted: !this.state.homeMounted
        });
    }

    render() {
        let homeRender = "";
        if (this.state.homeMounted) {
            homeRender = (
                <Home name={"yash"} age={23} greet={this.onGreet} initialLinkName={this.state.homeLink}
                      homelink={this.changeLink.bind(this)}>
                </Home>
            )
        }

        return (
            /*
            <Router>
                <div>
                <Route path="/" render={
                    ()=> {
                        return (<h3> Hello home</h3>);
                    }
                }/>

                <Route path="/menu" component={Appy}/>
                </div>
            </Router>
            */

            <Router>
                <Route path='/' render={
                    ()=> {
                        return (
                            <Root homeLink={this.state.homeLink} mounting={this.HomeMounting.bind(this)}>
                                {homeRender}
                            </Root>
                        );
                    }
                }/>

            </Router>

        );﻿

    }
}

render(<App/>, window.document.getElementById("app"));

