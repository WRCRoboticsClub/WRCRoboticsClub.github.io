// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export function handler(req, res) {
  res.status(200).json({ name: "John Doe" });
}

export default async function achievementData(req, res) {
  const response = await fetch(
    `https://wrcrobotics.pythonanywhere.com/achievements`
  );
  const achievementData = await response.json();
  res.json({ data: achievementData.data });
}
