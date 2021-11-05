import React, { useState } from "react";
import AccordionItem from "./AccordionItem";
import styles from "./Accordion.module.scss";

function Accordion({ items }) {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className={styles.accordion}>
      {items.map((item, index) => {
        return (
          <AccordionItem
            item={item}
            index={index}
            active={activeIndex === index}
            clickHandler={setActiveIndex}
            key={index}
          />
        );
      })}
    </div>
  );
}

export default Accordion;
