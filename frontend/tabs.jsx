import React from "react";
import Header from "./header";

class Tabs extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            index: 0
        }
        this.updateIndex = this.updateIndex.bind(this);
        this.headers = this.createHeaders();
    }


    updateIndex(e) {

        let index = e.target.className === "" ? 0 : e.target.className;
        // debugger;
        this.setState({
            index: parseInt(index)
        });
    }

    createHeaders() {
        let headers = this.props.array.map((ele, i) => {
            // debugger;
            return (
                <li key={i}><Header index={i} title={ele.title} content={ele.content} updateIndex={this.updateIndex}/> </li>
            )
        });
        return headers;
    }


    render() {
        // const title = this.props.array.map((ele, i) => {
        //     return (<li key={`${i}${ele.title}`}>
        //         <header onClick={this.updateIndex}>{ele.title}</header>
        //         <article>{ele.content}</article>
        //     </li>)
        // })

        let headers = this.props.array.map((ele, i) => {
            let name = "";
            if (this.state.index === i) {
                name = "selected";
            }

            // debugger;
            return (
                <li key={i}><Header index={i} title={ele.title} content={ele.content} updateIndex={this.updateIndex} name={name}/> </li>
            )
        });


        return(
            <div className="headers">
                <p>{this.state.index}</p>
                <ul>{headers}</ul>
            </div>
        )
    }
    
}



export default Tabs;