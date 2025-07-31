import axios from "axios";

export const fetchAccordionContent = async (url) => {
  try {
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    console.error("Error fetching accordion content:", error);
    throw error;
  }
};
