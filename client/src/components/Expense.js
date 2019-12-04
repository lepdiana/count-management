import React from 'react'
import DisplayExpense from './DisplayExpense.js'

import '../styles/expense.css'

function Expense(props) {
   const dynamicSort = (property) => {
       let sortOrder = 1;
   
       if(property[0] === "-") {
           sortOrder = -1;
           property = property.substr(1);
       }
   
       return function (a,b) {
           if(sortOrder == -1){
               return b[property].localeCompare(a[property]);
           }else{
               return a[property].localeCompare(b[property]);
           }        
       }
   }

   const sortedExpense = props.result.sort(dynamicSort("category"))

    return(
        <div>
            <DisplayExpense dynamicSort={dynamicSort} sortedExpense={sortedExpense}/>
        </div>
    )
}

export default Expense