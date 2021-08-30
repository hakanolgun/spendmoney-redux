import React from "react";
import styles from "./styles.module.css";
import { useSelector } from "react-redux";

function Cards() {
  const myitems = useSelector((state) => state.cards.items);
  return (
    <div className={styles.gridContainer}>
      {myitems.map((item) => (
        <div className={styles.carddiv}>
          <img src={item.img} alt={item.titlei} />
          <p className={styles.cardTitle}>{item.title}</p>
          <p className={styles.cardPrice}>
            $ {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
          </p>
          <div className={styles.buyOptionsDiv}>
            <button className={styles.sellBtn}>Sell</button>
            <input className={styles.priceInput} type="number" />
            <button className={styles.buyBtn}>Buy</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;
