import { useState } from "react";
import SingleAchievement from "../components/SingleAchievement";
import { useEffect } from "react";

export default function Achievements({ achievement }) {
  //const [achievement, setAchievement] = useState([]);

  //   useEffect(() => {
  //     fetch("https://wrcrobotics.pythonanywhere.com/achievements", {
  //       cache: "no-store",
  //     }).then((res) => setAchievement(res.json()));
  //   }, []);
  //console.log(achievement);
  return (
    <section id="achievement">
      {achievement.data.map((data, index) => {
        //always use keys for react while mapping
        return <SingleAchievement key={index} infos={data} id={index} />;
      })}
    </section>
  );
}

export async function getStaticProps() {
  const response = await fetch(
    "https://wrcrobotics.pythonanywhere.com/achievements",
    { cache: "no-store" }
  );
  const data = await response.json();

  return {
    props: {
      achievement: data,
    },
  };
}
