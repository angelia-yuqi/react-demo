const  initialState = {
    list:[ {item:'A区商品',done:false},{item:'B区商品',done:false},{item:'C区商品',done:false}],
    newToDo :'test'
};
const INPUT_CHANGE = 'INPUT_CHANGE';
const INPUT_SUBMIT = 'INPUT_SUBMIT';
const DELETE_LIST = 'DELETE_LIST';
export  function inputChange(newToDo) {
    return {
        type:INPUT_CHANGE,
        newToDo
    }

}
export function InputSubmit(newToDo) {
    return {
        type: INPUT_SUBMIT,
        newToDo
    }
}
export function deleteListItem(id) {
    return {
        type: DELETE_LIST,
        id
    }
}
export  default  function  reducer(state = initialState,action) {
    switch  (action.type) {
        case INPUT_CHANGE:
            console.log(action.newToDo);
            return Object.assign(
                {},
                state,
                {newToDo:action.newToDo}
            );
        case INPUT_SUBMIT:
            return { list:[
                ...state.list,
                {
                    item:action.newToDo,
                    done:false
                }

            ]};
        case DELETE_LIST:
            return { list:[
                ...state.list.slice(0, action.id),
                ...state.list.slice(action.id+1)
            ]};
        default:
            return state;
    }

}