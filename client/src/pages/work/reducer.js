import {fromJS} from "immutable";
import * as constant from "./actionsTypes";
import {combineReducers} from "redux-immutable";
import {withAsyncReducer} from '@utils/reduxSimpleAsync';

//获取页面初始数据
const preData = (
    state = fromJS({
        isFetching: false,
        data: '初始化'
    }),
    action
) => {
    switch (action.type) {
    case constant.FETCH_PRE_DATA_REQUEST:
        return state.set('isFetching', true);
    case constant.FETCH_PRE_DATA_SUCCESS:
        return state.set('isFetching', false)
            .set('data', action.data);
    case constant.FETCH_PRE_DATA_FAILURE:
        return state.set('isFetching', false);
    default:
        return state
    }
};

const preData2 = withAsyncReducer(constant.FETCH_CUSTOMER_TEMPLATES);

export default combineReducers({
    preData,
    preData2
})