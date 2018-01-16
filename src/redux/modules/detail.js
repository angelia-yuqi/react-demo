import {createAction,handleActions} from 'redux-actions'
export const detailList = createAction('request detail list');

const  initialState = {
    list:[],
    loading:true
};

const detailListRequest = handleActions({
    'request detail list'(state,action) {
        const data = action.payload;
        const list = [...state.list, ...data] ;
        return {list,loading:false}
    }
},initialState);
export  default  detailListRequest;