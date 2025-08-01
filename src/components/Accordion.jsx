import { useEffect, useState } from "react";
import { fetchAccordionContent } from "../utils/accordionUtils/accordionContent";
import "../styles/accordion.css";
import AccordionItem from "../utils/accordionUtils/AccordionItem";

const Accordion = () => {
  const [accordionData, setAccordionData] = useState([]);

  useEffect(() => {
    const loadAccordionData = async () => {
      try {
        const data = await fetchAccordionContent(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setAccordionData(data);
        console.log(data);
      } catch (err) {
        console.log(`Unable to fetch data - ${err}`);
      }
    };

    loadAccordionData();
  }, []);

  return (
    <div className="accordion">
      {accordionData.map((accordion) => (
        <AccordionItem
          key={accordion.id}
          title={accordion.title}
          body={accordion.body}
        />
      ))}
    </div>
  );
};
export default Accordion;
