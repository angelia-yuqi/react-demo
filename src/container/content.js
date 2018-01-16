import React from 'react';
import { Route } from 'react-router-dom'
import { Layout } from 'antd'
import './content.less'
import App from '../components/index';
import ToDoAppContainer from '../containers/toDoAppContainer';
// import ToDoApp from '../components/ToDoApp';
import AppDetail from '../components/detail';

const { Content } = Layout;

export default class Contents extends React.Component {
  render() {
    return (
      <Content className="content">
          <Route exact  path="/" component={App}/>
          <Route exact  path="/index" component={App}/>
          <Route exact path="/list" component={ToDoAppContainer}/>
          <Route exact path="/all" component={AppDetail}/>
          <Route exact  path="/list/detail/:id" component={AppDetail}/>
      </Content>
    );
  }
}