import React, {Component} from 'react';

class AddPhoto extends Component {

    constructor(){
        super();
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
    event.preventDefault();
    const imageLink=event.target.elements.link.value;
    const description=event.target.elements.description.value;
    const post={
        id:Number(new Date()),
        imageLink:imageLink,
        description:description
    };

    if(imageLink && description){
        this.props.addPost(post);
        this.props.onHistory.push('/');
        // console.log(' this.props ',this.props);
    }
    }

    render() {
        return (
            <div>
                <div className="form">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Link " name="link"/>
                    <input type="text" placeholder="Description" name="description"/>
                    <button>post</button>
                </form>
                </div>
            </div>
        )
    }
}

export default AddPhoto;
