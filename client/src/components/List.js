import React from 'react';


const StockList = ({ stocks, updateQuantity }) => {

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
                <td className="stock-equaity">{(item.price * item.quantity).toFixed(2)}</td>
                <td className="stock-dividend">{item.dividend}%</td>
                <td className="stock-passive-income">{(item.price * (item.dividend / 100)).toFixed(2) * item.quantity}</td>

            </tr>
        )
    })
    return (
        <div className="stock-list">
            <table style={{ width: '100%' }}>
                <thead>
                    <tr>
                        <th style={{ width: (100 / 6) + '%' }}>Stock</th>
                        <th style={{ width: (100 / 6) + '%' }}>Price</th>
                        <th style={{ width: (100 / 6) + '%' }}>Quantity</th>
                        <th style={{ width: (100 / 6) + '%' }}>Equaity</th>
                        <th style={{ width: (100 / 6) + '%' }}>Dividend</th>
                        <th style={{ width: (100 / 6) + '%' }}>Passive Income</th>
                    </tr>
                </thead>
                <tbody>
                    {mappedStocks}
                </tbody>
            </table>
        </div>
    )
}

export default StockList;