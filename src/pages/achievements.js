import SingleAchievement from "../components/SingleAchievement";
import { fakeDatas } from "../data/achievements.data";

export default function Achievements() {
  return (
    <section id="achievement">
      {fakeDatas.map((sData, index) => {
        //always use keys for react while mapping
        return <SingleAchievement key={index} infos={sData} />;
      })}
    </section>
  );
}
