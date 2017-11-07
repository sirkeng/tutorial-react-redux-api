import _ from 'lodash';
import { FETCH_POSTS } from '../actions';

export default function(state = {}, action) {
	switch (action.type) {
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