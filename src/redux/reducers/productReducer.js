import { ActionTypes } from "../constants/action-types";

const initialState= {
    products:[
    ]
}

export const productReducer =(state=initialState,action)=>{
    switch(action.type)
    {
        case ActionTypes.SET_PRODUCTS:
        return {...state, products :action.payload};
        default:
            return state;
    }

}
export const selectedProductsReducer =(state={},action)=>{
    switch(action.type)
    {
        case ActionTypes.SELECTED_PRODUCTS:
        return {...state, ...action.payload};
        case ActionTypes.REMOVE_SELECTED_PRODUCTS:
        return {};
        default:
            return state;
    }

}
// export const removeProductReducer =(state={},action)=>{
//     switch(action.type)
//     {
//         case ActionTypes.REMOVE_SELECTED_PRODUCTS:
//         return {};
//         default:
//             return state;
//     }

// }