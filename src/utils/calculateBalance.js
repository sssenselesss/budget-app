 import { OPARETION_TYPES } from "../types/operations";
 
 const calculateBalance = (data) => {
    return data.reduce((prev, current) => {
      if(current.type === OPARETION_TYPES.EXPENSE){
        return prev = prev - current.value
      }
  
      return prev = prev +current.value
    }, 0);
  };

  export default calculateBalance;