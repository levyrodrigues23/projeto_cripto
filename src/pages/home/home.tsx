import styles from "./home.module.css";
import { BsSearch } from "react-icons/bs";

import { Link } from "react-router";

function Home() {
  return (
    <main className={styles.container}>
      <form className={styles.form}>
        <input type="text" placeholder="digite o nome da moeda...Ex:BitCoin" />
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
    </main>
  );
}

export default Home;
