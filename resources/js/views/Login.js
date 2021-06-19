require('../app');
import React from 'react';
import ReactDOM from 'react-dom';
import Login from '../components/Login';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Signup from '../components/Signup';

function App(props) {
    return (
        <Router>
        <div  className='container mx-auto flex justify-center'>

                <Switch>
                    <Route exact path='/login' component={Login}/>
                    <Route path='/signup' component={Signup}/>
                </Switch>
        </div>
        </Router>
    );
}

export default App;
if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}