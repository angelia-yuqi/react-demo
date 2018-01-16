import  React from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import container from '../container/index';
// import App from '../components/index';
// import ToDoAppContainer from '../containers/toDoAppContainer';
// // import ToDoApp from '../components/ToDoApp';
// import AppDetail from '../components/detail';

const AppRouter = (
    <Router>
        <div>
            <Route path="/" component={container}/>
        </div>
    </Router>
);
export default AppRouter


