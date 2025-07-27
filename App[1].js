import React, { useState, useEffect } from 'react';
import ManhwaList from './ManhwaList';
import ChapterView from './ChapterView';

function App() {
  const [view, setView] = useState('list');
  const [selectedManhwa, setSelectedManhwa] = useState(null);
  const [selectedChapter, setSelectedChapter] = useState(null);

  const handleManhwaSelect = (manhwa) => {
    setSelectedManhwa(manhwa);
    setView('chapters');
  };

  const handleChapterSelect = (chapter) => {
    setSelectedChapter(chapter);
    setView('chapter');
  };

  const goBack = () => {
    if (view === 'chapter') setView('chapters');
    else setView('list');
  };

  return (
    <div>
      <h1>Manhwa Reader</h1>
      {view === 'list' && <ManhwaList onSelect={handleManhwaSelect} />}
      {view === 'chapters' && selectedManhwa &&
        <div>
          <button onClick={goBack}>Back</button>
          <h2>{selectedManhwa.title}</h2>
          <ul>
            {selectedManhwa.chapters.map(ch =>
              <li key={ch.id}>
                <button onClick={() => handleChapterSelect(ch)}>{ch.title}</button>
              </li>
            )}
          </ul>
        </div>
      }
      {view === 'chapter' && selectedChapter &&
        <div>
          <button onClick={goBack}>Back to Chapters</button>
          <ChapterView chapter={selectedChapter} />
        </div>
      }
    </div>
  );
}

export default App;