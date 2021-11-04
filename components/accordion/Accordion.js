import React, { useState } from "react";
import AccordionItem from "./AccordionItem";
// import "./Accordion.module.scss";

function Accordion({ items }) {
  console.log(items);

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="accordion">
      {items.map((item, index) => {
        console.log(item);
        return (
          <AccordionItem
            item
            index
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
