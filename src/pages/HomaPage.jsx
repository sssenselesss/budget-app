const OPARETION_TYPES = {
  INCOME: "income",
  EXPENSE: "expense",
};

const OPARETIONS = [
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

// форматирование чисел
const formatNumber = (value) => {
  return Intl.NumberFormat("ru-RU").format(parseInt(value));
};

// Фунскция форматирования для денег
const formatMoney = (value) => {
  return `${formatNumber(value)} руб.`;
};

const HomePage = () => {
  return (
    <section>
      <div className="container">
        <div className="balance">
          <h2>{formatMoney(53434)}</h2>
        </div>

        <div className="AddOperation">
          <form action="" className="balance-form">
            <h2>Доавбить операция</h2>
            <div className="wrapper">
              <input
                type="text"
                clas
                name="balance"
                placeholder="30 000"
                className="AddInput"
              />
              <select name="category" id="">
                <option value="products">Продукты</option>
              </select>
              <button className="button">Добавить операцию</button>
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
            {OPARETIONS.map((operation) => {
              return (
                <div className="operation" key={operation.id}>
                  <div
                    className={`circle ${
                      operation.type === OPARETION_TYPES.INCOME
                        ? "income"
                        : "expense"
                    }`}
                  >
                    {operation.type == OPARETION_TYPES.INCOME ? (
                      <i className="fa-solid fa-money-bill"></i>
                    ) : (
                      <i className="fa-solid fa-shop"></i>
                    )}
                  </div>
                  
                  <p className="category">Категория: {operation.category}</p>
                  <p className="total">{formatMoney(operation.value)}</p>
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
