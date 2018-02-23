import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions';

export default function(state = {}, action) {
	switch (action.type) {
	case DELETE_POST:
		return _.omit(state, action.payload);
	case FETCH_POST:
		// const post = action.payload.data;
		// const newState = { ...state };
		// newState[post.id] = post;
		// return newState;


		return { ...state, [action.payload.data.id]: action.payload.data }; //...state mean object in state
	case FETCH_POSTS:
		const mapData = action.payload.data;
		//console.log(mapData);
		return mapData;
		//return _.mapKeys(action.payload.data, 'id');

		//console.log(action.payload.data); // [ post1, post2 ]
		// { 4: post }
	default:
		return state;
	}
}