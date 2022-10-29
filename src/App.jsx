import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

const ContComponent = ({ cont }) => {
  console.log({ cont });
  return <h2>{`el contador se ha pulsado ${cont} veces`}</h2>;
};

export default function App() {
  const [contador, setContador] = useState(0);

  const incrementarContador = (e) => setContador(contador + 1);

  console.log({ contador });

  return (
    <div className="App">
      <h1>Primer ejercicio estado</h1>
      <ContComponent cont={contador} />
      <button onClick={() => incrementarContador()}>
        "Incrementa contador"
      </button>
    </div>
  );
}
