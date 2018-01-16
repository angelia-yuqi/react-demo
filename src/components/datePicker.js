import React from 'react';
import { DatePicker, Button, } from 'antd';
import moment from 'moment';
const RangePicker = DatePicker.RangePicker;


class Picker extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            fields: [],
        };
    }
    onChange =(dates, dateStrings) => {
       // this.state.fields = dateStrings;
       this.setState({
            fields: [...dateStrings],
        });
    };
    handleReset = () => {
        this.setState({
            fields: [],
        });
    };
    render(){
        console.log(this.state.fields);
        return (
            <div style={{marginLeft:10}}>
                选择时间段：
                <RangePicker  placeholder={['开始时间','结束时间']}
                    format="YYYY-MM-DD"
                    ranges={{ Today: [moment(), moment()], 'This Month': [moment(), moment().endOf('month')] }}
                    onChange={this.onChange}  value={this.state.fields.length === 0 ? '':[moment(this.state.fields[0]), moment(this.state.fields[1])]}
                />
                <Button onClick={this.handleReset.bind(this)} className="reset" icon="reload" style={{marginLeft:10}}>重置</Button>
            </div>
        )
    }


}
export  default Picker;