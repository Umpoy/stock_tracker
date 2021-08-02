import React, { useState, useEffect } from 'react';
import axios from 'axios';

const stockArray = []

const App = () => {
    const [ticker, setTicker] = useState('AAPL');
    const [result, setResults] = useState([]);
    useEffect(() => {
        const searchStock = async () => {
            const { data } = await axios.get(`http://localhost:5000/getStock/${ticker}`);
            setResults(data)
        }
        const debounce = setTimeout(() => {
            if (ticker) {
                searchStock();
            }
        }, 500);
        return () => {
            clearTimeout(debounce);
        }
    }, [ticker]);

    const handleOnSubmit = e => {
        e.preventDefault();
        result.quantity = 0
        stockArray.push(result);
        setTicker('');
        console.log(stockArray)

    }
    const showStockInfo = () => {
        if (result.price > 0 && ticker) {
            return (
                <p>{result.symbol} is at {result.price} with a {result.dividend}% dividend</p>
            )
        } else {
            return (
                <p>Empty or invalid input</p>
            )
        }
    }

    const mappedStocks = stockArray.map(item => {
        return (
            <div className="stock" key={item.symbol}>
                <div className="ticker">{item.symbol}</div>
                <div className="price">{item.price}</div>
                <div className="dividend">{item.dividend}%</div>
                <div className="quanity">{item.quantity}</div>
                <div className="howmuchmake">{(item.price * (item.dividend / 100))}</div>
            </div>
        )
    })
    return (
        <div className="app">
            <div className="ticker-search">
                <form onSubmit={handleOnSubmit}>
                    <input
                        type="text"
                        value={ticker}
                        onChange={e => { setTicker(e.target.value) }}
                    />
                </form>
                {showStockInfo()}
            </div>

            <div className="stock-list">
                {mappedStocks}
            </div>
        </div>
    )
}
export default App;