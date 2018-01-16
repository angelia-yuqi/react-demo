import React from 'react';
const List = (props) => {
    const list = props.listItems.map((el,i)=>(
       <li key={i}>
           <h2 style={el.done ? {textDecoration: 'line-through', fontSize: '20px'} : {textDecoration: 'none', fontSize: '20px'}} onClick={props.onListItemClick.bind(this,i)}>{i+1}.{el.item}</h2>
           <button className="btn btn-danger pull-right" onClick={props.deleteListItem.bind(this,i)}>x</button>
       </li>
    ));
    return (
        <div className="my-list">
           <ul>
               {
                   list
               }
           </ul>
        </div>
    )
};
export  default  List;