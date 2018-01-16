import  React from 'react';
const Input = (props)=>{
    return(
        <form>
            <div className="form-group">
                <label htmlFor="listInput" className="my-lable">
                    新增：
                </label>
                <input type="text" onChange={props.onInputChange}  className="form-control my-control" id="listItemInput" placeholder="Add new todo"/>
                <button className="btn btn-primary my-button" onClick={props.onInputSubmit}>Add Item</button>
            </div>
        </form>
    )
};
export  default  Input;