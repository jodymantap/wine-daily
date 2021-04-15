import { combineReducers } from 'redux';

const initialState = {
    cartTotal: 0,
}

const wineCart = (state=initialState, action) => {
    switch (action.type) {
        case "addtocart" : 
            return {
            cartTotal: state.cartTotal+1
            }
        default : return state;
    }
}

export default combineReducers({wineCart});