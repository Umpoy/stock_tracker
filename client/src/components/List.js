import React from 'react';

export default ({ stocks, updateQuantity }) => {

    const mappedStocks = stocks.map(item => {
        return (
            <div className="stock d-flex justify-content-between" key={item.symbol}>
                <div className="stock-ticker">{item.symbol}</div>
                <div className="stock-price">{item.price}</div>
                <input
                    type="number"
                    onChange={(e) => { updateQuantity(e.target.value, item.symbol) }}
                    value={item.quantity}
                />
                <div className="stock-equaity">{item.price * item.quantity}</div>
                <div className="stock-dividend">{item.dividend}%</div>
                <div className="stock-passive-income">{(item.price * (item.dividend / 100)).toFixed(2) * item.quantity}</div>

            </div>
        )
    })
    return (
        <div className="stock-list">
            {mappedStocks}
        </div>
    )
}