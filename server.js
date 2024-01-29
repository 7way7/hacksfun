const express = require('express');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const PORT = 3000;

const db = new sqlite3.Database('blogs.db');

db.run(`
  CREATE TABLE IF NOT EXISTS blogs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    link TEXT,
    text TEXT
  )
`);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/addBlog', (req, res) => {
  const { title, link, text } = req.body;

  db.run('INSERT INTO blogs (title, link, text) VALUES (?, ?, ?)', [title, link, text], function (err) {
    if (err) {
      console.error('Error saving the blog:', err.message);
      res.status(500).json({ message: 'Error saving the blog.' });
    } else {
      console.log('Blog saved successfully:', { title, link, text });
      res.status(201).json({ message: 'Blog saved successfully!' });
    }
  });
});

app.get('/', (req, res) => {
  res.send('Welcome to the Hacks.fun server!');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
