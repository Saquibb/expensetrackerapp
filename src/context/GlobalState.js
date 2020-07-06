import React,{createContext,useReducer} from 'react';

//import the Reducer
import AppReducer from './AppReducer';


//create the initial state
const initialState={
    transactions:[
        {id:1,description:"income",transactionAmount: 500},
        {id:2,description:"expense",transactionAmount: -100},
        {id:3,description:"income2",transactionAmount: 500}
    ]
}

//create the global context
export const GlobalContext=createContext(initialState);

//create a provider for the global context
export const GlobalProvider = ({ children })=>{

    const [state] = useReducer(AppReducer,initialState)
    return(
        <GlobalContext.Provider value={{transactions: state.transactions}}>
            {children}
        </GlobalContext.Provider>
    )
}