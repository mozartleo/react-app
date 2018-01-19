import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import App from './App';

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_LIKE':
            return Object.assign({}, state, {likes: state.likes + 1});
        case 'ADD_DISLIKE':
            return Object.assign({}, state, {dislikes: state.dislikes + 1});
        default:
            return state;
    }
};
const initialState = {
    likes: 10,
    dislikes: 0
};
const store = createStore(reducer, initialState);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);