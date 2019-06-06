import React, {Component} from 'react';
import Photo from './Photo';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

class PhotoWall extends Component {
    render() {
        console.log('this.props=> ',this.props);
        return (
            <div>

                <Link to="/AddPhoto" className="add-icon"></Link>
                <div className="photo-grid">
                    {this.props.posts

                        .sort(function (x, y) {
                            return y.id - x.id
                        })
                        .map((post, index) => <Photo key={index} {...this.props} post={post} index={index}/>)}
                </div>
            </div>

        )
    }
}

export default PhotoWall;


PhotoWall.propTypes = {
    posts: PropTypes.array.isRequired,
}