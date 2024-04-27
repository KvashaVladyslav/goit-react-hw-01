export default function TransactionHistory({items}) {
    return (
    <table>
        <thead>
            <tr>
              <th>Type</th>
              <th>Amount</th>
              <th>Currency</th>
            </tr>
        </thead>
        {items.map(({type, amount, currency, id}) => 
            <tbody key={id}>
                <tr>
                    <td>{type}</td>
                    <td>{amount}</td>
                    <td>{currency}</td>
                </tr>
            </tbody>)}
    </table>
    )
}   