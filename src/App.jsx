import { useState } from "react";
import "./index.css";

export default function App() {
  const [isBlue, setIsBlue] = useState(true);

  const classColor = isBlue ? "Blue" : "Red";

  return (
    <div className={classColor}>
      <h1>Cambiar color de fondo</h1>
      <p>Podemos cambiar el estilo de los componentes dinamicamente modificando
       las propiedades de los componentes. La verdad es que suena más complicado
       de lo que en realidad es. Unicamente tenemos que cambiar las clase de las
       propiedades del componente</p>
      <h2>⬇️</h2>
      <button onClick={() => setIsBlue(!isBlue)}>Cambiar color</button>
    </div>
  );
}