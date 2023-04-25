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
      link.href = canvas.toDataURL();
      link.download = `meme.png`;
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
        <label className='linea1'>{linea1}</label> 
        <label className='linea2'>{linea2}</label> 
        <img src={imagen} alt={imagen} /> 
      </div>
      <input type='text' placeholder='Texto inferior' onChange={onChangelinea2}></input>
      <button onClick={onclickExport}>Descargar</button>
    </div>
  );
}

export default App;
