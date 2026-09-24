import React, { useMemo, useState } from 'react';

function Filteredlist_useMemo() {
  const [search, setSearch] = useState('');
  const items = useMemo(() => {
    return Array.from({ length: 1000 }, (_, index) => `Item ${index + 1}`);
  }, []);

  const filteredList = useMemo(() => {
    return items.filter((item) =>
      item.toLowerCase().includes(search.toLowerCase())
    );
  }, [items, search]);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Filtered List</h2>

      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginBottom: '10px', padding: '8px', width: '300px' }}
      />

      <p>Total results: {filteredList.length}</p>

      <ul>
        {filteredList.slice(0, 50).map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Filteredlist_useMemo;