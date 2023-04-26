import SingleAchievement from "../components/SingleAchievement";
import { achievements } from "../data/achievements.data";

export default function Achievements({ achievementData }) {
  console.log(achievementData.achievements);
  return (
    <section id="achievement">
      {achievementData.achievements.map((sData, index) => {
        //always use keys for react while mapping
        return <SingleAchievement key={index} infos={sData} />;
      })}
    </section>
  );
}

export async function getStaticProps() {
  // Fetch data from external API
  const res = await fetch(
    `https://robotics0test.pythonanywhere.com/achievements`
  );
  const achievementData = await res.json();

  // Pass data to the page via props
  return { props: { achievementData } };
}
