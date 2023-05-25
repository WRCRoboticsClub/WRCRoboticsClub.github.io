import SingleAchievement from "../components/SingleAchievement";
import { achievements } from "../data/achievements.data";

export default function Achievements({ achievementData }) {
  return (
    <section id="achievement">
      {achievementData.data.map((sData, index) => {
        //always use keys for react while mapping
        return <SingleAchievement key={index} infos={sData} id={index} />;
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
  // Fetch data from external API
  const res = await fetch(
    "https://wrcrobotics.pythonanywhere.com/achievements"
  );

  const achievementData = await res.json();

  // Pass data to the page via props
  return { props: { achievementData } };
}
