import SingleAchievement from "../components/SingleAchievement";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Achievements() {
  const [achievementData, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/achievement");
        setData(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  console.log(achievementData);
  return (
    <section id="achievement">
      {achievementData.length > 0 &&
        achievementData.map((data, index) => {
          //always use keys for react while mapping
          return <SingleAchievement key={index} infos={data} id={index} />;
        })}
    </section>
  );
}

// export async function getStaticPaths() {
//   const articles = await fetch(
//     "https://wrcrobotics.pythonanywhere.com/achievements"
//   );
//   console.log("articles", articles);
//   // generate a list of paths with route params
//   //const paths = articles.map(article => ({ params: { articleId: article.id }}))

//   return {
//     fallback: false,
//   };
// }

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

// export async function getStaticProps({ params }) {

//   const res = await fetch(
//     `https://wrcrobotics.pythonanywhere.com/achievements/${params.id}`
//   );
//   const achievement = await res.json();

//   return {
//     props: {
//       achievement,
//     },
//   };
// }
