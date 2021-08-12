import React from 'react';

export default ({ stocks, updateQuantity }) => {

    const mappedStocks = stocks.map(item => {
        return (
            <tr key={item.symbol}>
                <td className="stock-ticker">{item.symbol}</td>
                <td className="stock-price">{item.price}</td>
                <input
                    type="number"
                    onChange={(e) => { updateQuantity(e.target.value, item.symbol) }}
                    value={item.quantity}
                />
                <td className="stock-equaity">{item.price * item.quantity}</td>
                <td className="stock-dividend">{item.dividend}%</td>
                <td className="stock-passive-income">{(item.price * (item.dividend / 100)).toFixed(2) * item.quantity}</td>

            </tr>
        )
    })
    return (
        <div className="stock-list">
            <table style={{ width: '100%' }}>
                <tr>
                    <th>Stock</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Equaity</th>
                    <th>Dividend</th>
                    <th>Passive Income</th>
                </tr>
                {mappedStocks}
            </table>
        </div>
    )
}