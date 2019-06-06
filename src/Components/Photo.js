import React, {Component} from 'react';
import {Link} from 'react-router-dom';
class Photo extends Component {
    render() {
        const post = this.props.post;
        console.log(' this.props.index',this.props);
        return (

            <figure className="figure">
                <Link to={`/single/${post.id}`}><img className="photo" src={post.imageLink} alt={post.description}/></Link>
                <figcaption> <p>{post.description}</p></figcaption>
                <div className="button-container">
                    <button onClick={()=>{
                        this.props.removePost(this.props.index);
                        this.props.history.push('/');
                    }}>Remove</button>

                    <button>{this.props.comments[post.id] ? this.props.comments[post.id].length : 0}</button>

                    {/*<Link className="button" to={`/single/${post.id}`}>*/}
                        {/*<div className="comment-count">*/}
                            {/*{this.props.comments[post.id] ? this.props.comments[post.id].length : 0}*/}
                        {/*</div>*/}
                    {/*</Link>*/}
                </div>

            </figure>
        )
    }
}

export default Photo;
