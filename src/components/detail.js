import React from 'react';
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux';
import { Table } from 'antd';
import axios from 'axios';
import '../mock/mock'
import '../style/index.scss'
import {detailList} from '../redux/modules/detail'



const columns = [{
    title: '商品id',
    dataIndex:'id',
    key: 'id',
    render: text => <a href="#">{text}</a>,
},{
    title: '商品名',
    dataIndex:'name',
     key: 'name',
    render: text => <a href="#">{text}</a>,
}, {
    title: '商品类型',
    dataIndex:'type',
     key: 'type',
}, {
    title: '商品售出',
    dataIndex:'payout',
     key: 'payout',
}, {
    title: '商品库存',
    dataIndex:'number',
     key: 'number',
}, {
    title: '操作',
    dataIndex:'action',
     key: 'action',
    render: () =>(<span><a href="#">修改</a> | <a href="#">删除</a></span>)
}];
// const data = [{
//     id: '1',
//     name: '毛巾',
//     type: '生活用品',
//     payout: 10,
//     number:1200
// }, {
//     id: '2',
//     name: '洗发水',
//     type: '生活用品',
//     payout: 10,
//     number:1200
// }, {
//     id: '3',
//     name: '相宜本草',
//     type: '护肤产品',
//     payout: 100,
//     number:900
// },{
//     id: '4',
//     name: '一叶子',
//     type: '护肤产品',
//     payout: 100,
//     number:900
// }];

@connect (
    (state,props) => ({ list:state.detailListRequest}),
    // (dispatch) => ({ actions: bindActionCreators(detailList, dispatch), dispatch: dispatch })
)


export default class  AppDetail extends React.Component{
    constructor(props) {
        super(props);
    }
    componentDidMount () {
        let self = this;
        axios.get('/data').
            then(function (response) {
            self.props.dispatch(detailList(response.data.data.list))
            // self.setState({
            //     data : response.data.data.list
            // })
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    Change = (value) => {
        console.log(value)
        let self = this;
        //请求接口，参数为page当前页数，pageSize为每页的条目数
        axios.get('/data',{page:value.current,pageSize:value.pageSize}).
        then(function (response) {
            self.props.dispatch(detailList(response.data.data.list))
            // self.setState({
            //     data : response.data.data.list
            // })
        })
            .catch(function (error) {
                console.log(error);
            });
        // this.setState({newToDo: event.target.value}); // updates state to new value when user changes the input value
    };
    render(){
        console.log(this.props) ;
        const id = this.props.match.params.id;
        return (
            <div className="row">
                <div className="col-md-12 ">
                    <div className="panel panel-default">
                        <div className="panel-body">
                            <h1 className="app-font">My To Do App</h1>
                            <hr/>
                            <div>
                                商品详情{id}
                                <Table columns={columns} loading={this.props.list.loading} dataSource={this.props.list.list} pagination={{pageSize:10,total:100}} onChange={this.Change}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}