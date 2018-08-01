// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));


import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, browserHistory} from 'react-router'
import Root from './Root';
import Images from './Images';
import './index.css';
import Videos from './Videos';
registerServiceWorker();

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Root}>
            <IndexRoute component={Images} />
            <Route path="/videos" component={Videos}/>
        </Route>
    </Router>,document.getElementById('root')
)




