const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 5000;

// Middleware
app.use(cors());

// News API endpoint (using a public news API)
const NEWS_API_URL = 'https://newsapi.org/v2/top-headlines';
const API_KEY = 'YOUR_API_KEY';  // Replace with your NewsAPI key

// Get top headlines
app.get('/api/news', async (req, res) => {
    try {
        const response = await axios.get(NEWS_API_URL, {
            params: {
                country: 'us',
                apiKey: API_KEY,
            },
        });
        res.json(response.data.articles);
    } catch (error) {
        res.status(500).send('Error fetching news');
    }
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
