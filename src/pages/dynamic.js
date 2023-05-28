import SingleAchievement from "../components/SingleAchievement";

export default function Achievements({ achievement }) {
  console.log(achievement);
  return (
    <section id="achievement">
      {achievement.data.map((data, index) => {
        //always use keys for react while mapping
        return <SingleAchievement key={index} infos={data} id={index} />;
      })}
    </section>
  );
}

export async function getServerSideProps() {
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
