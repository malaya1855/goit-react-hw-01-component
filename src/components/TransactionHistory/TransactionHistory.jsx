import PropTypes from "prop-types";
import { TransactionItem } from "components/TransactionItem/TransactionItem"

export const TransactionHistory = ({history}) => {
    return <table class="transaction-history">
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
  
    <tbody>
     {history.map(item => {
       return  <TransactionItem 
        key={item.id} 
        type={item.type} 
        amount={item.amount}
        currency={item.currency}/>
     })}
    </tbody>
  </table>
}

TransactionHistory.propTypes = {
  history: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
      }),
    ).isRequired,
}