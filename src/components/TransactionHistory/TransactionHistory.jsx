import PropTypes from "prop-types";
import {Table, TableHead, TableHeadRow, TableBodyRow} from 'components'
import { TransactionItem } from "components/TransactionItem/TransactionItem"

export const TransactionHistory = ({history}) => {
    return <Table>
    <TableHead>
      <TableBodyRow>
        <TableHeadRow>Type</TableHeadRow>
        <TableHeadRow>Amount</TableHeadRow>
        <TableHeadRow>Currency</TableHeadRow>
      </TableBodyRow>
    </TableHead>
  
    <tbody>
     {history.map(item => {
       return  <TransactionItem 
        key={item.id} 
        type={item.type} 
        amount={item.amount}
        currency={item.currency}/>
     })}
    </tbody>
  </Table>
}

TransactionHistory.propTypes = {
  history: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
      }),
    ).isRequired,
}