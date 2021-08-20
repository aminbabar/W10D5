import React from "react";


class Tabs extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            index: 0
        }
    }

    render() {
        const title = this.props.array.map((ele) => {
            return (<li>
                <header>{ele.title}</header>
                <article>{ele.content}</article>
            </li>)
        })

        return(
            <ul>{title}</ul>
        )
    }
    
}



export default Tabs;