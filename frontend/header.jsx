import React from "react";

class Header extends React.Component {

    // conatructor() {
    //     this.state = {
    //         index: null
    //     }
    //     // this.updateIndex = this.updateIndex.bind(this);
    // }


    // updateIndex(e) {
    //     debugger;
    //     // if (this.props.index === e.target.i) {

    //     // }
    //     // this.setState({
    //     //     index: this.state.index + 1
    //     // })
    // }

    
    render() {
        // let ele = this.props.title;
        // let content = this.props.content;
        // debugger;
        let classes = `${this.props.index} ${this.props.name}`
        return (
            <>
                <header className={classes} onClick={this.props.updateIndex}>{this.props.title}</header>
                <article>{this.props.content}</article>
            </>
        )
    }

}


export default Header;