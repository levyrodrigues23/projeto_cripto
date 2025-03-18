import styles from "./home.module.css";
import { BsSearch } from "react-icons/bs";
import { useState, FormEvent, useEffect } from "react";
import { Link, useNavigate } from "react-router";

interface CoinProps {
  id: string;
  name: string;
  simbol: string;
  priceUsd: string;
  vwap24Hr: string;
  changePercent24Hr: string;
  rank: string;
  supply: string;
  maxSupply: string;
  marketCapUsd: string;
  volumeUsd24Hr: string;
  explorer: string;
}

interface DataProp {
  data: CoinProps[];
}

function Home() {
  const [input, setInput] = useState("");
  const [coins, setCoins] = useState<CoinProps[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    fetch("https://api.coincap.io/v2/assets?limit=10&offset=0")
      .then((response) => response.json())
      .then((data: DataProp) => {
        const coinsData = data.data;

const price = Intl.NumberFormat("en-US", {
  style: 'currency',
  currency: 'USD'
})


        const formatedResult = coinsData.map((item) => {
          const formated = {
            ...item,
         formatedPrice: price.format(Number(item.priceUsd)),
         formatedMarket: price.format(Number(item.marketCapUsd))
          };

          return formated;
        });

        console.log(formatedResult)
      });
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (input === "") return;

    navigate(`/detail/${input}`);
  }

  function handleGetMore() {}

  return (
    <main className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="digite o nome da moeda...Ex:BitCoin"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">
          <BsSearch size={30} color="#FFF" />
        </button>
      </form>

      <table>
        <thead>
          <tr>
            <th scope="col">Moeda</th>
            <th scope="col">Valor mercado</th>
            <th scope="col">Preço</th>
            <th scope="col">Volume</th>
            <th scope="col">Mudança 24h</th>
          </tr>
        </thead>
        <tbody id="tbody">
          <tr className={styles.tr}>
            <td className={styles.tdLabel} data-Label="Moeda">
              <div className={styles.name}>
                <Link to={"/detail/bitcoin"}>
                  <span>BitCoin</span> | BTC
                </Link>
              </div>
            </td>
            <td className={styles.tdLabel} data-Label="Valor mercado">
              1T
            </td>
            <td className={styles.tdLabel} data-Label="Preço">
              8000
            </td>
            <td className={styles.tdLabel} data-Label="Volume">
              2B
            </td>
            <td className={styles.tdProfit} data-Label="Mudança 24h">
              <span>1.20</span>
            </td>
          </tr>
        </tbody>
      </table>

      <button className={styles.buttonMore} onClick={handleGetMore}>
        Carregar mais...
      </button>
    </main>
  );
}

export default Home;
