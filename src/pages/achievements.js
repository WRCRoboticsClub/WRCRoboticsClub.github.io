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

export async function getStaticProps() {
  // Fetch data from external API
  const res = await fetch(`${process.env.BASE_URL}/achievements`);

  const achievementData = await res.json();

  // Pass data to the page via props
  return { props: { achievementData } };
}
