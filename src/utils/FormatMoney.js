import formatNumber from "./FormatNumber";

const formatMoney = (value, format = "руб.") => {
    return `${formatNumber(value)} ${format}`;
  };

  export default formatMoney;