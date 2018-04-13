import React from "react";
import {render} from "react-dom";
//import {Router, Route} from "react-router";
//import { browserHistory} from "react-router";
//import { browserHistory } from "react-router";
import {BrowserRouter as Router, Link , NavLink , Redirect , Prompt} from 'react-router-dom' ;
import Route from 'react-router-dom/Route';


import {Appy} from "./Appy";
import {Root} from "./component_b/Root";
import {Home} from "./component_b/Home";
import {User} from "./component_b/User";


/*
const topics = [
    {
        page:'Home',
        link:'/'
    },

] */

const jobDet = ({match}) => {
    return (
        <div>
            JOb details {match.params.detId}
        </div>
    );
}

const perDet = ({match}) => {
    return (
        <div>
            Personal details {match.params.detId}
        </div>
    );
}

function Profile() {
    return (
        <div>
            <h3>
                Profile page
                <ul>
                    <li>
                        <Link to="/profile/perDetail/yash"> Personal details </Link></li>
                    <li><Link to="/profile/jobDetail/profYash"> Job details </Link></li>
                </ul>
            </h3>
            <Route path="/profile/perDetail/:detId" component={perDet}/>
            <Route path="/profile/jobDetail/:detId" component={jobDet}/>
        </div>
    );
}

class App extends React.Component {

    loggedInMethod(){
        this.setState({
          loggedIn : ~this.state.loggedIn
        })
    }

    constructor() {
        super();
        this.state = {
            homeLink: "HOME",
            loggedIn:false,
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

    About() {
        return (
            <h3>
                About page
            </h3>
        );
    }


    render() {

        /*
        let homeRender = "";
        if (this.state.homeMounted) {
            homeRender = (
                <Home name={"yash"} age={23} greet={this.onGreet} initialLinkName={this.state.homeLink}
                      homelink={this.changeLink.bind(this)}>
                </Home>
            )
        }

        return (
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
            */

        return (


            <Router>
                <div>
                    <div>
                        <ul>
                            <li>
                                <NavLink to="/" exact activeStyle={{color:'green'}}>Home </NavLink>
                                <NavLink to="/user" activeStyle={{color:'green'}}>User </NavLink>
                                <NavLink to="/profile" activeStyle={{color:'green'}}>Profile </NavLink>
                                <NavLink to="/about" activeStyle={{color:'green'}}>about </NavLink>
                                <button value="login" onClick={this.loggedInMethod.bind(this)}>
                                    {this.state.loggedIn ? "Log Out" : "Log In" }
                                </button>
                            </li>
                        </ul>
                    </div>

                    <Prompt
                        when={!this.state.loggedIn}
                        message={(location)=>{
                            return location.pathname.startsWith('/user')? "Are you sure" : true
                        }}
                    />


                    <Route exact path="/" component={Home}/>
                    <Route path="/user" render={()=>(
                        this.state.loggedIn ? <User/> : <Redirect to="/"/>
                    )}/>

                    <Route path="/profile" render={()=>(
                        this.state.loggedIn ? <Profile/> : <Redirect to="/"/>
                    )}/>

                    <Route path="/about" component={this.About}/>


                </div>
            </Router>

        );﻿
    }
}

render(
    <App/>
    , window.document.getElementById("app"));

