import { useState } from 'react';
import html2canvas from 'html2canvas';
import './App.css';
import { imagesMemes } from './utils/templatesMemes';

function App() {

  const [linea1, setLinea1] = useState('');
  const [linea2, setLinea2] = useState('');
  const [imagen, setImagen] = useState(imagesMemes[0].url);

  const onChangelinea1 = (evento) => {
    const texto = evento.target.value;
    setLinea1(texto);
  }
  const onChangelinea2 = (evento) => {
    const texto = evento.target.value;
    setLinea2(texto);
  }

  const onChangeImagen = (evento) => {
    const imagen = evento.target.value;
    setImagen(imagen);
  }

  const onclickExport = () => {
    html2canvas(document.getElementById('contenedorMeme')).then(canvas => { 
      let link = document.createElement('a');
      link.download = `meme.png`;
      link.href = canvas.toDataURL();
      link.click();
  }).catch(err => console.error('error al generar la imagen',err))
  }   

  return (
    <div className="App">
      <h1>Crea tu meme!</h1>
      <select name="opciones" id="" onChange={onChangeImagen}>
        {
          imagesMemes.map(template => <option key={template.name} value={template.url}>{template.name}</option>)
        }
      </select>
      <input type='text' placeholder='Texto superior' onChange={onChangelinea1}></input> 
      <div className='contenedorMeme' id='contenedorMeme'>
        <img src={imagen} alt={imagen} />
        <label className='linea1'>{linea1}</label> 
        <label className='linea2'>{linea2}</label> 
      </div>
      <input type='text' placeholder='Texto inferior' onChange={onChangelinea2}></input>
      <button onClick={onclickExport}>Descargar</button>
      <div className='repo-container'>
        <a href="https://github.com/Daniel-Barrios-J/creador-memes" target='_blank'>
          Go to the repo at GitHub
        </a>
        <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="github icon" width={'24px'} />
      </div>
    </div>
  );
}

export default App;
