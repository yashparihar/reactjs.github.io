import React from "react";

export const Header = (props) => {
    return (
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand" href="#">React Demo</a>
                </div>
                <ul className="nav navbar-nav">
                    <li className="active">
                        <a href="#">Home</a></li>

                    <li className="active">
                        <a href="#">User</a></li>
                </ul>
            </div>
        </nav>
    );
}
