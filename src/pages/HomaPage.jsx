const HomePage = () => {
  return (
    <section>
      <div className="container">
        <div className="balance">
          <h2>Баланс</h2>
        </div>

        <div className="AddOperation">
          <form action="">
            <h2>Доавбить операция</h2>
            <div className="wrapper">
              <input type="number" name="balance" placeholder="30 000" className="AddInput" />
              <select name="category" id="">
                <option value="products">Продукты</option>
              </select>
              <button className="button">Добавить  операцию</button>
            </div>
          </form>
        </div>

        <div className="operations__wrapper">
            <h2 className="operation__title">
                Операции
            </h2>
            <div className="filter">
                <button>Все операции</button>
                <button>Все доходы</button>
                <button>Все расходы</button>
            </div>

            <div className="operatiions">
                <div className="operation">
                    <h4 className="total">30 000 </h4>
                    <p className="category">Категория: автомобиль</p>
                    <button className="button button--remove">Удалить</button>
                </div>
            </div>

            <div className="pagination">
                <button className="pagination__button">
                    1
                </button>
            </div>


        </div>
      </div>
    </section>
  );
};

export default HomePage;
