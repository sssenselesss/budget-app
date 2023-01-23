import { OPARETION_TYPES } from "../types/operations";

export const filterIncome = (data) => {
    return data.filter((item) => {
      return item.type === OPARETION_TYPES.INCOME;
    });
  };
  
  // Фильтр расходов
  export const filterExpense = (data) => {
    return data.filter((item) => {
      return item.type === OPARETION_TYPES.EXPENSE;
    });
  };