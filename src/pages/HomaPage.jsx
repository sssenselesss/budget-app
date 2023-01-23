import { useEffect, useState } from "react";
import { INCOME_CATEGORIES,EXPENSE_CATEGORIES,CATEGORIES } from "../data/categories";
import { OPARETION_TYPES } from "../types/operations";
import { formatMoney, calculateBalance } from "../utils";
import { filterExpense } from "../utils/filter";
import { filterIncome } from "../utils/filter";
import getItemType from "../utils/getItemType";



const initialItems = [
  {
    id: 1,
    category: "products",
    value: 3000,
    type: "expense",
    date: new Date(),
  },
  {
    id: 2,
    category: "salary",
    value: 54314,
    type: "income",
    date: new Date(),
  },
  {
    id: 3,
    category: "salary",
    value: 54314,
    type: "income",
    date: new Date(),
  },
];

const initialBalanceState = [

];



// Фильтр доходов




const HomePage = () => {

  const[balance,setBalance] = useState(0);
  const [items, setItems] = useState(initialItems);
  const [formBalance, setFormBalance] = useState(0);
  const [category, setCategory] = useState("none");

  useEffect(() =>{
    setBalance(calculateBalance(items))
  },[items])

  console.log(category);

  const onChangeCategoryHandle = (e) => setCategory(e.target.value);

  const onChangeBalanceHandle = (event) => {
    setFormBalance((prevState) => {
      const value = parseInt(event.target.value) || 0;

      if (!isNaN(value)) {
        prevState = value;
      }

      return prevState;
    });
  };

  const onAddItemHandle = () => {
    setItems((prev) => {
      prev = [...prev];

      prev.push({
        id: Date.now(),
        category: category,
        value: formBalance,
        type: getItemType(category),
        date: new Date(),
      });

      return prev;
    });

    setFormBalance(0);
  };

  const onClickAllfilterHandle = () => {
    setItems(initialItems);
  };

  const IncomeFilterHandle = () => {
    setItems(filterIncome(initialItems));
  };

  const onClickExpenseFilterHandle = () => {
    setItems(filterExpense(initialItems));
  };
  return (
    <section>
      <div className="container">
        <div className="balance">
          <h2>{formatMoney(balance)}</h2>
        </div>

        <div className="AddOperation">
          <form
            action=""
            className="balance-form"
            onSubmit={(e) => e.preventDefault()}
          >
            <h2>Доавбить операция</h2>
            <div className="wrapper">
              <input
                type="text"
                name="balance"
                placeholder="30 000"
                className="AddInput"
                value={formBalance}
                onChange={(e) => {
                  onChangeBalanceHandle(e);
                }}
              />
              <select
                name="category"
                id=""
                onChange={(e) => onChangeCategoryHandle(e)}
              >
                <option value="none">Не выбрано</option>
                {Object.keys(CATEGORIES).map((category) => {
                  return (
                    <option key={category} value={category}>
                      {CATEGORIES[category]}
                    </option>
                  );
                })}
              </select>
              <button className="button" onClick={onAddItemHandle}>
                Добавить операцию
              </button>
            </div>
          </form>
        </div>

        <div className="operations__wrapper">
          <h2 className="operation__title">Операции</h2>
          <div className="filter">
            <button className="button sm" onClick={onClickAllfilterHandle}>
              Все операции
            </button>
            <button className="button sm green" onClick={IncomeFilterHandle}>
              Все доходы
            </button>
            <button
              className="button sm red"
              onClick={onClickExpenseFilterHandle}
            >
              Все расходы
            </button>
          </div>

          <div className="operations">
            {items.map((item) => {
              return (
                <div className="operation" key={item.id}>
                  <div
                    className={`circle ${
                      item.type === OPARETION_TYPES.INCOME
                        ? "income"
                        : "expense"
                    }`}
                  >
                    {item.type == OPARETION_TYPES.INCOME ? (
                      <i className="fa-solid fa-money-bill"></i>
                    ) : (
                      <i className="fa-solid fa-shop"></i>
                    )}
                  </div>

                  <p className="category">
                    Категория: {CATEGORIES[item.category]}
                  </p>
                  <p className="total">{formatMoney(item.value)}</p>
                  <button className="button sm button--remove">Удалить</button>
                </div>
              );
            })}
          </div>

          <div className="pagination">
            <button className="pagination__button">1</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
