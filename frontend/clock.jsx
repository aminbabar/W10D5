import React from "react";

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.time = new Date();
        this.state = {
            time: this.time
        };
        this.tick = this.tick.bind(this);
    }

    componentDidMount() {
        this.id = setInterval(this.tick, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.id);
    }

    tick() {
        const time = new Date();
        this.setState({
            time: time
        });
    }

    render() {
        return (
            <p>{this.state.time.toTimeString()}</p>
        )
    }
}


export default Clock;