const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 9091;

app.use(bodyParser.json());
app.use(express.static('../frontend')); // serve frontend files

app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;
    console.log(`Message from ${name} (${email}): ${message}`);
    res.json({ message: 'Thank you! We received your message.' });
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Backend running at http://0.0.0.0:${PORT}`);

});

