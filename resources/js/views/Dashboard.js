require('../app');
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Dash from '../components/Dash';
function App(props) {
    return (
        <Router>
            <div  className='container mx-auto flex justify-center'>
                <Switch>
                    <Route exact path='/dashboard' component={Dash}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}