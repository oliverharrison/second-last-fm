import React from "react";
import Chevron from "../icons/Chevron";
import cn from "classnames";
import styles from "./AccordionItem.module.scss";

function AccordionItem({ item, active, clickHandler, index }) {
  return (
    <div
      onClick={() => clickHandler(index)}
      className={cn(styles.item, active && styles.active)}
    >
      <div className={styles.textWrap}>
        <Chevron className={styles.icon} width={6} fill={"#777"} />
        <p className={styles.title}>{item.name}</p>
      </div>
      <div className={styles.content}>
        <a href={item.url}>{item.artist.name}</a>
      </div>
    </div>
  );
}

export default AccordionItem;
