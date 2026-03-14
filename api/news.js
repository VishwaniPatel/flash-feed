export default async function handler(req, res) {
  try {
    const { category } = req.query;

    const response = await fetch(
      `https://inshorts.com/api/en/news?category=${category}&max_limit=100&include_card_data=true`
    );

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch news" });
  }
}