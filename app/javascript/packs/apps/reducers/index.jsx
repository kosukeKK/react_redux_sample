import { combineReducers } from 'redux';

const sample = (state= 'React', action) => {
    console.log(state, action);
    switch(action.type){
        case 'otin':
            return 'Redux';
        default:
            return state;
    }
};
export const reducers = combineReducers({ sample });
