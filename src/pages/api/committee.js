export default async function committeeData(req, res) {
    const response = await fetch(
      `https://wrcrobotics.pythonanywhere.com/committee`
    );
    const committeeData = await response.json();
    res.json({ data: committeeData.data });
  }
  