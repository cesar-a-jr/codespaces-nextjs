import { useCallback, useEffect, useState } from "react";
import styles from "../styles/home.module.css";

function Home() {
  const [dolar, setDolar] = useState([]);
  useEffect(() => {
    fetch("https://economia.awesomeapi.com.br/json/last/USD")
      .then((response) => response.json())
      .then((data) => {
        setDolar(data.USDBRL);
        console.log(data.USDBRL)
      });
  }, []);

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Cotações do Dolar</h1>
      <div className={styles.price}>
        {console.log()}
        {new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(dolar.bid)}
        <p className={styles.desc}>
          {dolar.code}
        </p>
      </div>
    </main>
  );
}

export default Home;
