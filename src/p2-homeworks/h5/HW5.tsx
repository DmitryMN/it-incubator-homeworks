import React from 'react'
import Header from './Header'
import {HashRouter} from "react-router-dom";
import RoutesHW from "./RoutesHW";

function HW5() {
    return (
        <div>
            <HashRouter>
                <Header/>
                <RoutesHW/>
            </HashRouter>
        </div>
    )
}

export default HW5
