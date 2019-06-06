import React,{Component} from 'react';
import Photo from './Photo';
import Comments from './Comments';


class Single extends Component{
    render() {

        const {match,posts,comments}=this.props;
        const id=Number(match.params.id);
        const post= posts.find((post)=> post.id===id);
        const commentArray= this.props.comments[id] || [];
        const index= posts.findIndex((post)=> post.id ===id);

        return (
            <div className='single-photo'>
                <Photo post={post} index={index} {...this.props}/>
                <Comments addComment={this.props.addComment} comments={commentArray} id={id}/>
            </div>
        );
    }
}

export default Single;
