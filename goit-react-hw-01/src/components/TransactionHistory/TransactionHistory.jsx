import css from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => (
  <table className={css.table}>
    <thead className={css.head}>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
    <tbody>
      {items.map(({ id, type, amount, currency }) => (
        <tr key={id}>
          <td className={css.type}>{type}</td>
          <td className={css.amount}>{amount}</td>
          <td className={css.currency}>{currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default TransactionHistory;
