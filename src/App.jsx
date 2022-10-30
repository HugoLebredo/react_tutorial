import { useState } from "react";
import "./index.css";

const ContadorClicks = ({ cont }) => {
  console.log(cont);
  return <h2>{cont}</h2>;
};

const initState = { left: 0, right: 0 };

export default function App() {
  const [clicks, setClicks] = useState(initState);

  const handleClickLeft = () => {
    const newValues = { ...clicks, left: clicks.left + 1 };
    setClicks(newValues);
  };

  const handleClickRight = () => {
    const newValues = { ...clicks, right: clicks.right + 1 };
    setClicks(newValues);
  };

  return (
    <div>
      <h1>Trabajar con estados complejos</h1>
      <p>Tenemos 2 estados independientes uno para el click derecho y otro para el izquierdo</p>
      <table className="App">
        <td>
          <ContadorClicks cont={clicks.left} />
        </td>
        <td>
          <button onClick={() => handleClickLeft()}>Left Click</button>
        </td>
        <td>
          <button onClick={() => handleClickRight()}>right Click</button>
        </td>
        <td>
          <ContadorClicks cont={clicks.right} />
        </td>
      </table>
    </div>
  );
}
