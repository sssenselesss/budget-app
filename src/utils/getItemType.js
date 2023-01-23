import { INCOME_CATEGORIES } from "../data/categories";
import { OPARETION_TYPES } from "../types/operations";


 const getItemType = (category) => {
    if (Object.keys(INCOME_CATEGORIES).includes(category)) {
      return OPARETION_TYPES.INCOME;
    }
    return OPARETION_TYPES.EXPENSE;
  };

  export default getItemType