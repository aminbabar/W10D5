import React from "react";
import Header from "./header";

class Tabs extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            index: 0
        }
        // this.updateIndex = this.updateIndex.bind(this);
    }



    render() {
        // const title = this.props.array.map((ele, i) => {
        //     return (<li key={`${i}${ele.title}`}>
        //         <header onClick={this.updateIndex}>{ele.title}</header>
        //         <article>{ele.content}</article>
        //     </li>)
        // })

        const headers = this.props.array.map((ele, i) => {
            return (
                <li key={i}><Header index={i} title={ele.title} content={ele.content} /> </li>
            )
        })

        return(
            <div>
                <p>{this.state.index}</p>
                <ul>{headers}</ul>
            </div>
        )
    }
    
}



export default Tabs;