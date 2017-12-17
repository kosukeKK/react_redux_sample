import React from 'react'
import ReactDOM from 'react-dom'
import {connect} from 'react-redux';

const App = (that) => (
    <div>
        Helloaa!{that.sample}
        <button onClick={() => that.dispatch({'type': 'otin'})} />
        {console.log(that)}
    </div>
);

const mapToStateProps = (state) => {
    return state;
};
export default connect(mapToStateProps)(App);
