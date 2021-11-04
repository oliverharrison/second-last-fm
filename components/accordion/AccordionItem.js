import React from "react";
import Chevron from "../icons/Chevron";
import cn from "classnames";
// import "./AccordionItem.module.scss";

function AccordionItem({ item, active, clickHandler, index }) {
  return (
    <div
      onClick={() => clickHandler(index)}
      className={cn("accordion-item", active && "active")}
    >
      <div className="accordion-button">
        <Chevron className={"accordion-icon"} width={6} fill={"#777"} />
        <p className="accordion-title">{item.name}</p>
      </div>
      <div className="accordion-content">
        <a href={item.url}>{item.artist.name}</a>
      </div>
    </div>
  );
}

export default AccordionItem();
