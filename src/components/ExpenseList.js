import React,{ useContext } from 'react';
import ExpenseItem from './ExpenseItem';
import {AppContext} from '../context/AppContext';

const ExpenseList = () =>{
    const {expenses} = useContext(AppContext);

     //we don't need this for now because  we have it in the AppContext
    // const expenses =[
    //     {id:1231213,name: 'Shopping', cost:50},
    //     {id:1231213,name: 'Holiday', cost:300},
    //     {id:1231213,name: 'Transportation', cost:70},
    //     {id:1231213,name: 'Fuel', cost:40},
    //     {id:1231213,name: 'Child Care', cost:50}
    // ]
    return(
        <ul>
            {expenses.map((expense) => (
                <ExpenseItem
                id={expense.id}
                name={expense.name} 
                cost={expense.cost} />
            ))}
        </ul>
    );
    
};
export default ExpenseList;