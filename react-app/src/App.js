import { useState, useEffect } from 'react';

function App() {
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);
    const [cost, setCost] = useState();
    const [price, setPrice] = useState();
    useEffect(() => {
        fetch('https://api.coinpaprika.com/v1/tickers?limit=4000')
            .then((response) => response.json())
            .then((json) => {
                setCoins(json);
                setLoading(false);
                //console.log(json);
            });
    }, []);

    const inputCost = (event) => {
        console.log(event.target.value);
        setCost(event.target.value);
    };

    const selectBitCoins = (event) => {
        setPrice(event.target.value);
    };

    return (
        <div>
            <h1>The Coins!({coins.length})</h1>
            {loading ? (
                <strong>Loading...</strong>
            ) : (
                <select onChange={selectBitCoins}>
                    <option>Choose Coins</option>
                    {coins.map((item, index) => (
                        <option key={index} value={item.quotes.USD.price}>
                            {item.name} ({item.symbol}) :{' '}
                            {item.quotes.USD.price})
                        </option>
                    ))}
                </select>
            )}
            <h2>How much do you have money?</h2>
            <input
                type="number"
                value={cost}
                onChange={inputCost}
                placeholder="Write your money"
            />
            <span>$</span>
            <hr />
            {!price ? 'not select coins' : <h2>{cost / price}</h2>}
        </div>
    );
}

export default App;
