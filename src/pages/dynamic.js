import { useState } from "react";
import SingleAchievement from "../components/SingleAchievement";
import { useEffect } from "react";
import axios from "axios";

export default function Achievements() {
  const [achievement, setAchievement] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://wrcrobotics.pythonanywhere.com/achievements"
        );
        setAchievement(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  console.log(achievement);
  return (
    <section id="achievement">
      {achievement &&
        achievement.data.map((data, index) => {
          //always use keys for react while mapping
          return <SingleAchievement key={index} infos={data} id={index} />;
        })}
    </section>
  );
}

// export async function getStaticProps() {
//   const response = await fetch(
//     "https://wrcrobotics.pythonanywhere.com/achievements"
//   );
//   const data = await response.json();

//   return {
//     props: {
//       achievement: data,
//     },
//   };
// }
