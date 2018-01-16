import React from 'react';
import List from './List';
import Input from './Input'
import PropTypes from 'prop-types'
import '../style/app.scss'
 class  ToDoApp extends React.Component{
     constructor(props) {
         super(props);
     }
     static contextTypes = {
         router: PropTypes.object
     };
     componentDidMount() {
         // console.log(this.props.toDoApp)

         // this.setState ({
         //     list:[ {item:'A区商品',done:false},{item:'B区商品',done:false},{item:'C区商品',done:false}],
         //     newToDo :'test'
         // });

     }
     onInputChange=(event) => {
         this.props.inputChange(event.target.value)
         // this.setState({newToDo: event.target.value}); // updates state to new value when user changes the input value
     };
     onInputSubmit = (event) => {
         event.preventDefault();
         this.props.InputSubmit(this.props.toDoApp.newToDo)
         // this.setState((previousState)=>({
         //     list: [...previousState.list,{item:previousState.newToDo,done:false} ], // the spread opperator is called by using the ... preceding the array
         // }));
     };
     onListItemClick = (i) => { // takes the index of the element to be updated
         let url= '/list/detail/'+(i+1);
         this.context.router.history.push(url);
         this.setState((previousState)=>({
             list: [
                 ...previousState.list.slice(0, i), // slice returns a new array without modifying the existing array. Takes everything up to, but not including, the index passed in.
                 Object.assign({}, previousState.list[i], {done: !previousState.list[i].done}), // Object.assign is a new ES6 feature that creates a new object based on the first param (in this case an empty object). Other objects can be passed in and will be added to the first object without being modified.
                 ...previousState.list.slice(i+1) // takes everything after the index passed in and adds it to the array.
             ]

         }))
     };
     deleteListItem = (i) => {
         this.props.deleteListItem(i)
         // this.setState((previousState)=>({ // using previous state again
         //     list: [
         //         ...previousState.list.slice(0, i), // again with the slice method
         //         ...previousState.list.slice(i+1) // the only diffence here is we're leaving out the clicked element
         //     ]
         // }))
     };
     render(){
         return (
             <div className="row">
                 <div className="col-md-12 ">
                     <div className="panel panel-default">
                         <div className="panel-body">
                             <h1 className="app-font">My To Do App</h1>
                             <hr/>
                             <List listItems = {this.props.toDoApp.list} onListItemClick={this.onListItemClick} deleteListItem={this.deleteListItem}/>
                             <Input  onInputChange={this.onInputChange} onInputSubmit={this.onInputSubmit}/>
                         </div>
                     </div>
                 </div>
             </div>
         );
     }
 }
 export default ToDoApp;