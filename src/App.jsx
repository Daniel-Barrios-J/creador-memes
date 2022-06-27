import { useState } from 'react';
import html2canvas from 'html2canvas';
import './App.css';

function App() {

  const [linea1, setLinea1] = useState('');
  const [linea2, setLinea2] = useState('');
  const [imagen, setImagen] = useState('aliens');

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

  const onclickExport = (evento) => {
    html2canvas(document.querySelector("#contenedorMeme")).then(canvas => { 
      let img = canvas.toDataURL('image/png');
      let link = document.createElement('a');
      link.download = `${imagen}.jpg`;
      link.href = img
      link.click();
  });
  }   

  return (
    <div className="App">
      <h1>Crea tu meme!</h1>
      <select name="opciones" id="" onChange={onChangeImagen}>
        <option value="aliens">Aliens</option>
        <option value="fry">Futurama</option>
        <option value="smartguy">Smart guy</option>
      </select>
      <input type='text' placeholder='Texto superior' onChange={onChangelinea1}></input> 
      <div className='contenedorMeme' id='contenedorMeme'>
        <label className='linea1'>{linea1}</label> 
        <label className='linea2'>{linea2}</label> 
        <img src={`/img/${imagen}.jpg`} alt={imagen} /> 
      </div>
      <input type='text' placeholder='Texto inferior' onChange={onChangelinea2}></input>
      <button onClick={onclickExport}>Descargar</button>
    </div>
  );
}

export default App;
