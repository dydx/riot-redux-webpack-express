'use strict';

const riot = require('riot'),
    redux = require('redux');

require('./tags/sample-output.tag');
require('./tags/title-form.tag');
require('./tags/description-form.tag');

const defaultState = {
  title: 'Default Title',
  description: 'Default Description'
}

const reducer = (state = defaultState, action) => {
  console.log(action);
  switch(action.type) {
    case 'CHANGE_TITLE':
      return Object.assign({}, state, {title: action.data});
    case 'CHANGE_DESCRIPTION':
      return Object.assign({}, state, {description: action.data});
    default:
      return state
  }
}

const reduxStore = redux.createStore(reducer);

document.addEventListener('DOMContentLoaded', () => {
  riot.mount('*', {store: reduxStore});
});

