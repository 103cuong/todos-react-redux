import * as types from './../constants/ActionTypes';

var initialState = '';

var keyword = (state = initialState, action) => {
  switch (action.type) {
    case types.SEARCH:
      return state = action.keyword;
    default:
        return state;
  }
}

export default keyword;
