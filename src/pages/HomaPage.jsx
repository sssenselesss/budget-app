import { useState } from "react";
import { OPARETION_TYPES } from "../types/operations";
import { formatMoney } from "../utils";

const INCOME_CATEGORIES = {
  salary: "Зарплата",
  tranfer: "Перевод",
  cashback : "Кэшбек",

}

const EXPENSE_CATEGORIES = {
  products:"Продукты",
  car:"Автомобиль",
  services: "Комунальные услуги",
}

const CATEGORIES = {...INCOME_CATEGORIES,...EXPENSE_CATEGORIES};



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

const getItemType = (category) =>{
  if(Object.keys(INCOME_CATEGORIES).includes(category)){
    return OPARETION_TYPES.INCOME;
  }
  return OPARETION_TYPES.EXPENSE;
}


const HomePage = () => {
  const [items, setItems] = useState(initialItems)
  const [balance,setBalance] = useState(0);
  const[category,setCategory] = useState('none');

  console.log(category);

  const onChangeCategoryHandle = (e) => setCategory(e.target.value);

  const onChangeBalanceHandle = (event) =>{
    setBalance((prevState) =>{
      const value = parseInt(event.target.value) || 0;

      if(!isNaN(value)){
        prevState = value;
      }

      return prevState;
    })
  }

  const onAddItemHandle = () =>{
    setItems((prev) =>{
      prev = [...prev];

      prev.push( {
        id: Date.now(),
        category: category,
        value: balance,
        type: getItemType(category),
        date: new Date(),
      });

      return prev;
    })

    setBalance(0)
  }
  return (
    <section>
      <div className="container">
        <div className="balance">
          <h2>{formatMoney(53434)}</h2>
        </div>

        <div className="AddOperation">
          <form action="" className="balance-form" onSubmit={e =>e.preventDefault()}>
            <h2>Доавбить операция</h2>
            <div className="wrapper">
              <input
                type="text"
               
                name="balance"
                placeholder="30 000"
                className="AddInput"
                value={balance}
                onChange={(e) =>{onChangeBalanceHandle(e)}}
              />
              <select name="category" id="" onChange={(e) => onChangeCategoryHandle(e)}>
                <option value="none">Не выбрано</option>
                {
                  Object.keys(CATEGORIES).map((category) =>{
                    return (
                      <option key={category} value={category}>
                          {CATEGORIES[category]}
                      </option>
                    );
                  })
                }
              </select>
              <button className="button" onClick={onAddItemHandle}>Добавить операцию</button>
            </div>
          </form>
        </div>

        <div className="operations__wrapper">
          <h2 className="operation__title">Операции</h2>
          <div className="filter">
            <button className="button sm">Все операции</button>
            <button className="button sm green">Все доходы</button>
            <button className="button sm red">Все расходы</button>
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
                  
                  <p className="category">Категория: {CATEGORIES[item.category]}</p>
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
