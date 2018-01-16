import {connect} from 'react-redux';
import ToDoApp from '../components/ToDoApp';
import {
    inputChange,
    InputSubmit,
    deleteListItem
} from "../redux/modules/toDoApp";

function  mapStateToProps(state) {
    return {
        toDoApp:state.toDoApp
    }

}
function mapDispatchToProps(dispatch) {
   return{
       inputChange : (value) => dispatch(inputChange(value)),
       InputSubmit : (value) => dispatch(InputSubmit(value)),
       deleteListItem : (id) => dispatch(deleteListItem(id)),
   };
}
export  default connect(
    mapStateToProps,
    mapDispatchToProps
)(ToDoApp)