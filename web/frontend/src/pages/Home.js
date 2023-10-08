import React from 'react';
import Note from '../components/Note';

const Home = () => {
  const notes = [
    { id: 1, title: 'Note 1', content: 'Content of note 1' },
    { id: 2, title: 'Note 2', content: 'Content of note 2' },
    { id: 3, title: 'Note 3', content: 'Content of note 3' },
  ];

  return (
    <div>
      <nav className="navbar">
        <h1>Note Taking App</h1>
        <button className="logout-button">Logout</button>
      </nav>

      <div className="container">
        <h1>Your Notes</h1>
        {notes.map((note) => (
          <Note key={note.id} title={note.title} content={note.content} />
        ))}
      </div>
    </div>
  );
};

export default Home;