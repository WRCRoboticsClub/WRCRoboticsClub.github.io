import { google } from "googleapis";

const SPREADSHEET_ID = "17FICxX-qihqjMyCpXRpg5WycNIC7niTpX7LKROT_i0I";
const RANGE = "Form Responses 1!A2:L"; // Update with your desired range

export default async (req, res) => {
  const auth = new google.auth.GoogleAuth({
    keyFile: "./credentials.json", // Update with your credentials file path
    scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
  });

  const sheets = google.sheets({ version: "v4", auth });

  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: RANGE,
    });

    const rows = response.data.values;
    const formattedData = rows.map((row, index) => ({
      id: row[0],
      title: row[2],
      image: row[3],
      description: row[4],
      fb: row[6],
      yt: row[7],
      medium: row[8],
      insta: row[9],
    }));

    res.status(200).json(formattedData);
  } catch (error) {
    console.error("Error fetching data from Google Spreadsheet:", error);
    res.status(500).json({ error: "Failed to fetch data" });
  }
};
