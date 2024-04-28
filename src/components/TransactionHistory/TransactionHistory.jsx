import clsx from "clsx"
import css from './TransactionHistory.module.css';

export default function TransactionHistory({ items }) {
    return (
    <table className={clsx(css.table)}>
        <thead className={clsx(css.head)}>
            <tr>
              <th className={clsx(css.headList)}>Type</th>
              <th className={clsx(css.headList)}>Amount</th>
              <th className={clsx(css.headList)}>Currency</th>
            </tr>
        </thead>
            <tbody >
                {items.map(({type, amount, currency, id}) => 
                <tr key={id}>
                    <td className={clsx(css.bodyList)}>{type}</td>
                    <td className={clsx(css.bodyList)}>{amount}</td>
                    <td className={clsx(css.bodyList)}>{currency}</td>
                </tr>)}
            </tbody>
    </table>
    )
}   