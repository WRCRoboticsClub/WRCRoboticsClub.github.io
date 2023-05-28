import DynamicSingle from "../components/dynamicsingle";
import { useState, useEffect } from "react";

export default function Achievements({ achievement }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/fetchData");
        const sheetData = await response.json();
        setData(sheetData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  console.log(data);
  return (
    <section id="achievement">
      {data.map((data, index) => {
        //always use keys for react while mapping
        return <DynamicSingle key={index} infos={data} id={index} />;
      })}
    </section>
  );
}
