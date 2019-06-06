import postsData from '../data/posts';
import {combineReducers} from 'redux';


function posts(state = postsData, action) {
    console.log(' posts reducer');
    switch (action.type) {
        case 'REMOVE_POST' :
            return [...state.slice(0, action.index), ...state.slice(action.index + 1)];
            break;
        case 'ADD_POST' :
            return [...state, action.post];
            break;
        default :
            return state;
    }
};

function comments(state = {}, action) {

    switch (action.type) {

        case 'ADD_COMMENT' :

            if (!state[action.postId]) {
                return {...state, [action.postId]: [action.comment]};
            } else {
                return {...state, [action.postId]: [...state[action.postId], action.comment]};
            }
            break;
        default :
            return state;
    }


};

const rootReducer = combineReducers({posts, comments});
export default rootReducer;