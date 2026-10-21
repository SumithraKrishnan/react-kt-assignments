                // ************Mini Project*********

import React, { useContext, useReducer, useState } from 'react';
import ThemeContext from '../Hooks/ThemeContext';
import { useLocalStorage } from './UseLocalStorage';
import { useDebounce } from './useDebounce';

const defaultNotes = [
  { id: 1, title: 'React', body: 'Practice useReducer', tags: ['react', 'hooks'] },
  { id: 2, title: 'JavaScript', body: 'Review arrays and objects', tags: ['js'] }
];

const initialState = {
  search: '',
  selectedTag: 'all'
};

function notesReducer(state, action) {
  switch (action.type) {
    case 'SET_SEARCH':
      return {
        ...state,
        search: action.payload
      };

    case 'SET_SELECTED_TAG':
      return {
        ...state,
        selectedTag: action.payload
      };

    default:
      return state;
  }
}

function NotesApp2() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [state, dispatch] = useReducer(notesReducer, initialState);
  const [notes, setNotes] = useLocalStorage('notes-app', defaultNotes);
  const debouncedSearch = useDebounce(state.search, 400);

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [tagsInput, setTagsInput] = useState('');
  const [editingId, setEditingId] = useState(null);

  const allTags = ['all', ...new Set(notes.flatMap((note) => note.tags))];

  const filteredNotes = notes.filter((note) => {
    const matchesSearch = note.title
      .toLowerCase()
      .includes(debouncedSearch.toLowerCase());

    const matchesTag =
      state.selectedTag === 'all' || note.tags.includes(state.selectedTag);

    return matchesSearch && matchesTag;
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !body.trim()) return;

    const tags = tagsInput
      .split(',')
      .map((tag) => tag.trim())
      .filter(Boolean);

    const note = {
      id: editingId ?? Date.now(),
      title: title.trim(),
      body: body.trim(),
      tags
    };

    if (editingId !== null) {
      setNotes((currentNotes) =>
        currentNotes.map((currentNote) =>
          currentNote.id === note.id ? note : currentNote
        )
      );
    } else {
      setNotes((currentNotes) => [...currentNotes, note]);
    }

    setTitle('');
    setBody('');
    setTagsInput('');
    setEditingId(null);
  };

  const handleEdit = (note) => {
    setEditingId(note.id);
    setTitle(note.title);
    setBody(note.body);
    setTagsInput(note.tags.join(', '));
  };

  const handleDelete = (id) => {
    setNotes((currentNotes) => currentNotes.filter((note) => note.id !== id));
  };

  const pageStyle = {
    minHeight: '100vh',
    padding: '20px',
    background: theme === 'light' ? '#f5f5f5' : '#1f1f1f',
    color: theme === 'light' ? '#111' : '#fff'
  };

  const cardStyle = {
    background: theme === 'light' ? '#fff' : '#2b2b2b',
    color: theme === 'light' ? '#111' : '#fff',
    borderRadius: '10px',
    padding: '15px',
    marginBottom: '12px'
  };

  return (
    <div style={pageStyle}>
      <button onClick={toggleTheme}>
        Toggle Theme
      </button>

      <h1 style={{ color: theme === 'light' ? '#111' : '#fff' }}>Notes App</h1>

      <input
        type="text"
        placeholder="Search by title"
        value={state.search}
        onChange={(e) =>
          dispatch({ type: 'SET_SEARCH', payload: e.target.value })
        }
        style={{ padding: '8px', marginRight: '10px', width: '220px' }}
      />

      <select
        value={state.selectedTag}
        onChange={(e) =>
          dispatch({ type: 'SET_SELECTED_TAG', payload: e.target.value })
        }
        style={{ padding: '8px' }}
      >
        {allTags.map((tag) => (
          <option key={tag} value={tag}>
            {tag}
          </option>
        ))}
      </select>

      <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ display: 'block', marginBottom: '10px', padding: '8px', width: '300px' }}
        />

        <textarea
          placeholder="Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          rows="4"
          style={{ display: 'block', marginBottom: '10px', width: '300px', padding: '8px' }}
        />

        <input
          type="text"
          placeholder="Tags (comma separated)"
          value={tagsInput}
          onChange={(e) => setTagsInput(e.target.value)}
          style={{ display: 'block', marginBottom: '10px', padding: '8px', width: '300px' }}
        />

        <button type="submit">
          {editingId ? 'Update Note' : 'Add Note'}
        </button>
      </form>

      <div style={{ marginTop: '30px' }}>
        {filteredNotes.length === 0 ? (
          <p>No notes found</p>
        ) : (
          filteredNotes.map((note) => (
            <div key={note.id} style={cardStyle}>
              <h3>{note.title}</h3>
              <p>{note.body}</p>

              <div>
                {note.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      display: 'inline-block',
                      marginRight: '8px',
                      padding: '4px 8px',
                      borderRadius: '12px',
                      background: theme === 'light' ? '#ddd' : '#444'
                    }}
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <div style={{ marginTop: '10px' }}>
                <button onClick={() => handleEdit(note)}>Edit</button>
                <button onClick={() => handleDelete(note.id)} style={{ marginLeft: '10px' }}>
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default NotesApp2;