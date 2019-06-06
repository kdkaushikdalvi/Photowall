import React, {Component} from 'react';
import Title from '../Components/Title';
import {Route} from 'react-router-dom';
import Single from './Single';


// Redux
import {connect} from 'react-redux';
import PhotoWall from "./PhotoWall";
import {removePost} from "../redux/actions";
import AddPhoto from './AddPhoto'

class Main extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <Title title="Photowall"/>
                <Route path="/" exact render={() => (
                    <div>
                        <PhotoWall {...this.props}/>
                    </div>
                )}/>

                <Route path="/AddPhoto" exact render={({history}) => (
                    <AddPhoto {...this.props} onHistory={history}/>
                )}/>

                <Route path="/single/:id" exact render={(params) => (
                    <Single {...this.props} {...params}/>
                )}/>

            </div>
        )
    }
}


export default Main;
