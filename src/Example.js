import React, { Component } from 'react';

class Example extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            count: 0,
        }
        this.handleClick = this.handleClick.bind(this);
    }
    render() { 
        return ( 
            <div>
                <p>You clicked { this.state.count } times</p>
                <button onClick={this.handleClick} >点击</button>
            </div>
        );
    }
    componentDidMount () {
        console.log(`componentDidMount => you clicked ${this.state.count} times`)
    }
    componentDidUpdate () {
        console.log(`componentDidUpdate => you clicked ${this.state.count} times`)
    }
    handleClick () {
        this.setState({count: this.state.count + 1});
    }
}
 
export default Example;