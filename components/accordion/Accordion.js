import React, { useState } from "react";
import AccordionItem from "./AccordionItem";
// import "./Accordion.module.scss";

function Accordion({ items }) {
  console.log(items);

  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="accordion">
      {items.track.map((track, index) => {
        console.log(track);
        console.log(index);
        return (
          <AccordionItem
            track={track}
            active={activeIndex === index}
            clickHandler={setActiveIndex}
            index={index}
            key={track.mbid}
          />
        );
      })}
    </div>
  );
}

export default Accordion;
