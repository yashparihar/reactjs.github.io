import React from "react";

export class Home extends React.Component {
    constructor(props) {
        console.log(props);
        super();
        this.state = {
            newage: props.age,
            status: 0,
            linkname: props.initialLinkName,
        };

        setTimeout(() => {
            this.setState({
                status: 1
            });
        }, 3000);
    }

    //.LIFE CYCLE..
    /*
    componentWillMount() {
        console.log("Component Will Mount");
    }

    componentDidMount() {
        console.log("Component did Mount");
    }

    componentWillReceiveProps(nextProps) {
        console.log("component will receive props", nextProps);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("should component update ", nextProps, nextState);
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("component will update ", nextProps, nextState);
    }

    componentDidUpdate(nextProps, nextState) {
        console.log("component did update ", nextProps, nextState);
    }

    componentWillUnmount() {
        console.log("component will unmount");
    }


    //.END .. LIFE CYCLE..
*/
    onMakeOlder() {
        this.setState({
            newage: this.state.newage + 3
        });
    }

    onChangeLink() {
        this.props.homelink(this.state.linkname)
    }

    changingLink(e) {
        this.setState({
            linkname: e.target.value
        });

        this.props.homelink(e.target.value);
    }

    render() {
        return (
            <div className="col-sm-3">
                Welcome to Home Page
                my name is {this.props.name} and age is {this.state.newage} <br/>
                <button className="btn btn-primary" onClick={this.onMakeOlder.bind(this)}> MakeMeOlder</button>
                <br/>
                <button className="btn btn-primary" onClick={this.props.greet}> Greetme</button>
                <br/>
                <p> Status: {this.state.status}</p>
                <br/>
                <input type="text" value={this.state.linkname} onChange={(event) => this.changingLink(event)}/>
                <button className="btn btn-primary" onClick={this.onChangeLink.bind(this)}> Change link name
                </button>


            </div>
        );
    }
}

Home
    .propTypes = {
    //  name: React.PropTypes.string,
    //   age: React.PropTypes.number,
    //  user: React.PropTypes.object
    // greet: React.propTypes.method
};

