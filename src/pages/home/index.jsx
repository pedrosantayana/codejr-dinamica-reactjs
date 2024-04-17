import './style.css';

export default function Home() {
  let notes = [{}];
  let count = 0;

  const addNote = () => {
    const newNote = {
      id: Date.now(),
      text: ''
    };
    notes.push(newNote);
    count++;
  };

  return (
    <div id='container'>
      <h1 id='titulo'>Sistema de Notas</h1>
      <button className='btn' onClick={addNote}>Adicionar Nota</button>
      <p className='paragraph'>Quantidade de Notas: {count}</p>
      <div className='note'>
        <textarea
          rows="4"
          cols="50"
        />
        <button className='btn'>Deletar</button>
      </div>
      <h2 id='subtitulo'>Repositório de notas</h2>
      <div id='repository'>
        <p className='paragraph'>ID: </p>
        <p className='paragraph'>Conteúdo: </p>
      </div>
    </div>
  );
}