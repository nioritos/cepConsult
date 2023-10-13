import { useState } from 'react'
import './App.css'
import { getCep } from './api/api';

function App() {
  const [cep, setCep] = useState('');
  const [cepInfos, setCepInfos] = useState([]);

  const onClickHandler = async (e) => {
    e.preventDefault();
    const fields = await getCep(cep);
    console.log(fields)
    setCepInfos(fields);
  };
  const onChangeHandler = (e) => {
    setCep(e.target.value);
  };
  return (
    <div className='App'>
     <h1>Consult CEP</h1>
     <form>
        <input type="text" placeholder='Type the CEP here' onChange={onChangeHandler}/>
        <button onClick={onClickHandler}>Submit</button>
     </form>
     {cepInfos.cep ? (
      <div className="cepinfos-div">
        <span>Result:</span>
        <h2>{cepInfos.city} - {cepInfos.state}</h2>
        <h3>{cepInfos.neighborhood} - {cepInfos.cep}</h3>
        <h4>{cepInfos.street}</h4>
      </div>
     ) : console.log('None has here')}

     <footer>
     Feito por: <a target="_blank" href="https://nioritos.ga">nioritos</a>
     </footer>
    </div>
  )
}

export default App
