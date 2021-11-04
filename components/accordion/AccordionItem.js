import React from "react";
import Chevron from "../icons/Chevron";
import cn from "classnames";
// import "./AccordionItem.module.scss";

function AccordionItem({ track, active, clickHandler, index }) {
  return (
    <div
      onClick={(index) => clickHandler}
      className={cn("accordion-item", active && "active")}
    >
      <div className="accordion-button">
        <Chevron className={"accordion-icon"} width={6} fill={"#777"} />
        <p className="accordion-title">{track.name}</p>
      </div>
      <div className="accordion-content">
        <a href={track.url}>{track.artist.name}</a>
      </div>
    </div>
  );
}

export default AccordionItem();
