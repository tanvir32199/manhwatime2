const express = require('express');
const cors = require('cors');
const path = require('path');
const manhwas = require('./manhwas.json');

const app = express();
app.use(cors());
app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/api/manhwas', (req, res) => {
  res.json(manhwas);
});

app.get('/api/manhwa/:id', (req, res) => {
  const manhwa = manhwas.find(m => m.id === req.params.id);
  if (!manhwa) return res.status(404).send('Not found');
  res.json(manhwa);
});

app.get('/api/manhwa/:id/chapter/:chapterId', (req, res) => {
  const manhwa = manhwas.find(m => m.id === req.params.id);
  if (!manhwa) return res.status(404).send('Not found');
  const chapter = manhwa.chapters.find(c => c.id === req.params.chapterId);
  if (!chapter) return res.status(404).send('Chapter not found');
  res.json(chapter);
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));