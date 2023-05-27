import SingleAchievement from "../components/SingleAchievement";
import { useState, useEffect } from "react";
export default function Achievements({ achievementData }) {
  //const [data, setData] = useState(null);
  //const [isLoading, setLoading] = useState(false);
  // const timestamp = new Date().getTime();

  // useEffect(() => {
  //   //setLoading(true);
  //   fetch(
  //     `https://wrcrobotics.pythonanywhere.com/achievements?timestamp=${timestamp}`
  //   )
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData(data);
  //       //setLoading(false);
  //     });
  // }, []);
  return (
    <section id="achievement">
      {achievementData.data.map((data, index) => {
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

export async function getStaticProps() {
  try {
    // Append a timestamp query parameter to bypass caching
    const timestamp = new Date().getTime();
    const apiUrl = `https://wrcrobotics.pythonanywhere.com/achievements?timestamp=${timestamp}`;

    // Fetch data from the external API
    const res = await fetch(apiUrl);

    if (!res.ok) {
      throw new Error(
        `Failed to fetch data from ${apiUrl}. Status: ${res.status}`
      );
    }

    const achievementData = await res.json();

    // Pass data to the page via props
    return { props: { achievementData } };
  } catch (error) {
    // Handle any errors that occurred during the data fetching process
    console.error("Error fetching data:", error);
    // You can decide how to handle the error, e.g., display a fallback UI or redirect to an error page
    return { props: { achievementData: [] } }; // Return empty data or a fallback value
  }
}
