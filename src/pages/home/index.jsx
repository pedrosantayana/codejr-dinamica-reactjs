import { useState } from 'react';
import './style.css';
import { useEffect } from 'react';
import Note from '../../components/Note';
import Repository from '../../components/Repository';

export default function Home() {
  let [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes')) ?? []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const addNote = () => {
    const newNote = {
      id: Date.now(),
      text: ''
    };
    setNotes(notes => [...notes, newNote]);
  };

  const deleteNote = (id) => {
    setNotes(notes => notes.filter(note => note.id !== id));
  };

  const updateNote = (id, text) => {
    setNotes(notes => notes.map(note => note.id === id ? {...note, text: text} : note));
  };

  return (
    <div id='container'>
      <h1 id='titulo'>Sistema de Notas</h1>
      <button className='btn' onClick={addNote}>Adicionar Nota</button>
      <p className='paragraph'>Quantidade de Notas: {notes.length}</p>
      { notes.map(note => <Note key={note.id} note={note} updateNote={updateNote} deleteNote={deleteNote} />) }
      <h2 id='subtitulo'>Repositório de notas</h2>
      { notes.map(note => <Repository key={note.id} note={note} />) }
    </div>
  );
}