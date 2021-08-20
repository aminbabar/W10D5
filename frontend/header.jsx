import React from "react";

class Header extends React.Component {

    conatructor() {
        this.state = {
            index: null
        }
        this.updateIndex = this.updateIndex.bind(this);
    }


    updateIndex(e) {
        if (this.props.index === e.target.i) {

        }
        // this.setState({
        //     index: this.state.index + 1
        // })
    }

    
    render() {
        return (
            <>
            <header onClick={this.updateIndex}>{ele.title}</header>
            <article>{ele.content}</article>
            </>
        )
    }

}


export default Header;