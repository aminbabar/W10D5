import Clock from "./clock";
import React from "react";
import Tabs from "./tabs";

export const Root = () => {
    // debugger;
    return (
        <div>
            <Clock />
            <Tabs array={[
                { title: 1,content: 2 }, 
                { title: 3, content: 4 },
                { title: 5, content: 6 }
                ]} />
        </div>
    )
}