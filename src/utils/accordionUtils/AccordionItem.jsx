import { useState } from "react";

const AccordionItem = ({ title, body }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <section className="accordion-card">
      <div className="header" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <p className="icon">{isActive ? "-" : "+"}</p>
      </div>

      <div className="content">
        {isActive && <p className="card-info">{body}</p>}
      </div>
    </section>
  );
};
export default AccordionItem;
