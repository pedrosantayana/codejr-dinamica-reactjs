import './style.css';

export default function Note({ note, updateNote, deleteNote}) {
  return (
    <div className='note'>
      <textarea
        rows="4"
        cols="50"
        value={note.text}
        onChange={e => updateNote(note.id, e.target.value)}
      />
      <button className='btn' onClick={_ => deleteNote(note.id)}>Deletar</button>
    </div>
  );
}