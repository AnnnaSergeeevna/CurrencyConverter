import { makeAutoObservable } from "mobx";

class CurrencyStore {
    usd: string = "";
    eur: string = "";
    exchangeRate: number = 1.07;

    constructor() {
        makeAutoObservable(this);
    }

    setUSD(value: string) {
        if (!isNaN(Number(value))) {
            this.usd = value;
            this.eur = (parseFloat(value) / this.exchangeRate).toFixed(2);
        } else {
            this.usd = "";
            this.eur = "";
        }
    }

    setEUR(value: string) {
        if (!isNaN(Number(value))) {
            this.eur = value;
            this.usd = (parseFloat(value) * this.exchangeRate).toFixed(2);
        } else {
            this.eur = "";
            this.usd = "";
        }
    }
}

const currencyStore = new CurrencyStore();
export default currencyStore;
