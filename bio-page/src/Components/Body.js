import React, { Component } from 'react';
import Home from './Home'
import Images from './Images'
import Games from './Games'
import Videos from './Videos'

export class Body extends Component {
    displayContent = () => {
        var activeTab = this.props.activeTab
        if(activeTab == 1){
            return <Home/>
        }
        else if(activeTab == 2){
            return <Images/>
        }
        else if(activeTab == 3){
            return <Games/>
        }
        else{
            return <Videos/>
        }
    }
    render() {
        return (this.displayContent());
    }
}

export default Body;