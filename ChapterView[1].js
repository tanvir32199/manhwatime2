import React from 'react';

function ChapterView({ chapter }) {
  return (
    <div>
      <h3>{chapter.title}</h3>
      {chapter.images.map((img, idx) =>
        <img key={idx} src={`http://localhost:5000${img}`} alt={`Page ${idx + 1}`} style={{ width: '100%', marginBottom: 20 }} />
      )}
    </div>
  );
}

export default ChapterView;