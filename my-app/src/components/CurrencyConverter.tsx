import React from "react";
import { observer } from "mobx-react-lite";
import currencyStore from "../stores/CurrencyStore.ts";
import "./CurrencyConverter.css";

const CurrencyConverter: React.FC = () => {
    return (
        <div className="container">
            <div className="field">
                <label htmlFor="usd" className="usd-label">USD</label>
                <input
                    id="usd"
                    type="text"
                    className="usd-input"
                    value={currencyStore.usd}
                    onChange={(e) => currencyStore.setUSD(e.target.value)}
                />
            </div>
            <div className="field">
                <label htmlFor="eur" className="eur-label">EUR</label>
                <input
                    id="eur"
                    type="text"
                    className="eur-input"
                    value={currencyStore.eur}
                    onChange={(e) => currencyStore.setEUR(e.target.value)}
                />
            </div>
        </div>
    );
};

export default observer(CurrencyConverter);
