import React, { useState, useEffect } from 'react';

function ManhwaList({ onSelect }) {
  const [manhwas, setManhwas] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/manhwas')
      .then(res => res.json())
      .then(data => setManhwas(data));
  }, []);

  return (
    <div>
      <h2>All Manhwas</h2>
      <ul>
        {manhwas.map(manhwa => (
          <li key={manhwa.id}>
            <img src={`http://localhost:5000${manhwa.cover}`} alt={manhwa.title} width={100} /><br />
            <button onClick={() => onSelect(manhwa)}>
              {manhwa.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ManhwaList;