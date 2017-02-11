import { FETCH_POSTS, FETCH_POST } from '../actions/index';
 
// state.posts --> posts: PostsReducer
const INITIAL_STATE = {all: [], post: null};

export default function(state = INITIAL_STATE, action){
  switch (action.type) {
    case FETCH_POST:
      return {...state, post: action.payload.data};
    case FETCH_POSTS:
      // Keep existing state, and replace all
      return {...state, all: action.payload.data};
      break;
    default:
      return state;
  }
}
