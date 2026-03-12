const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 9091;

app.use(bodyParser.json());
app.use(express.static('../frontend')); // serve frontend files

// POST route (existing)
app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;
    console.log(`Message from ${name} (${email}): ${message}`);
    res.json({ message: 'Thank you! We received your message.' });
});

// ✅ Add a GET route for API status
app.get('/api/status', (req, res) => {
    res.json({ status: 'OK', message: 'Backend is running!' });
});

// ✅ Optional: root GET route for browser testing
app.get('/', (req, res) => {
    res.send('Backend server is running!');
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Backend running at http://0.0.0.0:${PORT}`);
});
