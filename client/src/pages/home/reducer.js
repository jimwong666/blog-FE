import {combineReducers} from 'redux-immutable';
import {fromJS} from 'immutable';
import * as constant from './actionsTypes';
import {withAsyncReducer} from '@utils/reduxSimpleAsync';

// 中间件
const testFetch = withAsyncReducer(constant.FETCH_TEST);

// 自定义1
const customTestFetchDefauleValue = fromJS({
	status: false,
	data: [0,1,2,3]
})
const customTestFetch = (
	state = customTestFetchDefauleValue,
	action
) => {
	switch (action.type){
		case constant.FETCH_TEST:
			return state.set("status", !state.get("status")).set("txt", action.data)
		default:
			return state;
	}
}

export default combineReducers({
	testFetch,
	customTestFetch
})