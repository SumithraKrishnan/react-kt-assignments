                // ************Mini Project*********

import React, { useContext, useEffect, useReducer, useState } from 'react';
import ThemeContext from './ThemeContext';

const defaultNotes = [
  { id: 1, title: 'React', body: 'Practice useReducer', tags: ['react', 'hooks'] },
  { id: 2, title: 'JavaScript', body: 'Review arrays and objects', tags: ['js'] }
];

function loadNotesFromStorage() {
  try {
    const savedNotes = localStorage.getItem('notes-app');
    return savedNotes ? JSON.parse(savedNotes) : defaultNotes;
  } catch {
    return defaultNotes;
  }
}

const initialState = {
  notes: loadNotesFromStorage(),
  search: '',
  selectedTag: 'all'
};

function notesReducer(state, action) {
  switch (action.type) {
    case 'ADD_NOTE':
      return {
        ...state,
        notes: [...state.notes, action.payload]
      };

    case 'EDIT_NOTE':
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === action.payload.id ? action.payload : note
        )
      };

    case 'DELETE_NOTE':
      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== action.payload)
      };

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

function NotesApp() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [state, dispatch] = useReducer(notesReducer, initialState);

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [tagsInput, setTagsInput] = useState('');
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    localStorage.setItem('notes-app', JSON.stringify(state.notes));
  }, [state.notes]);

  const allTags = ['all', ...new Set(state.notes.flatMap((note) => note.tags))];

  const filteredNotes = state.notes.filter((note) => {
    const matchesSearch = note.title
      .toLowerCase()
      .includes(state.search.toLowerCase());

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

    if (editingId) {
      dispatch({ type: 'EDIT_NOTE', payload: note });
    } else {
      dispatch({ type: 'ADD_NOTE', payload: note });
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
    dispatch({ type: 'DELETE_NOTE', payload: id });
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

export default NotesApp;