import SingleAchievement from "../components/SingleAchievement";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Achievements({ achievement }) {
  // const [achievementData, setData] = useState([]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get("/api/achievement");
  //       setData(response.data.data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  //console.log(achievement.data);
  return (
    <section id="achievement">
      {achievement.data.map((data, index) => {
        //always use keys for react while mapping
        return <SingleAchievement key={index} infos={data} id={index} />;
      })}
    </section>
  );
}

// export async function getStaticPaths() {
//   // Fetch the list of achievements IDs from the external API
//   const res = await fetch(
//     "https://wrcrobotics.pythonanywhere.com/achievements"
//   );
//   const achievementData = await res.json();
//   const paths = achievementData.data.map((achievement) => ({
//     params: { id: achievement.id.toString() },
//   }));

//   return {
//     paths: [],
//     fallback: false,
//   };
// }

export async function getStaticProps() {
  const res = await fetch(
    `https://wrcrobotics.pythonanywhere.com/achievements`
  );
  const achievement = await res.json();

  return {
    props: {
      achievement,
    },
  };
}
