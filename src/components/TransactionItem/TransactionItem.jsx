import PropTypes from "prop-types";
import {TableBodyRow, TableBodyCell} from 'components'

export const TransactionItem = ({type, amount, currency}) => {
    return <TableBodyRow>
    <TableBodyCell>{type}</TableBodyCell>  
    <TableBodyCell>{amount}</TableBodyCell>
    <TableBodyCell>{currency}</TableBodyCell>
  </TableBodyRow>
}
TransactionItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount:PropTypes.string.isRequired,
  currency:PropTypes.string.isRequired }
