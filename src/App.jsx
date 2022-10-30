import { useState } from "react";
import "./index.css";

const DisplayClicks = ({ cont }) => {
  return <h2>{cont}</h2>;
};

const initState = { left: 0, right: 0, total: 0, traza: [] };

export default function App() {
  const [clicks, setClicks] = useState(initState);

  const handleClickLeft = () => {
    const newValues = {
      ...clicks,
      left: clicks.left + 1,
      total: clicks.total + 1,
      traza: [...clicks.traza, "⬅️"]
    };
    setClicks(newValues);
  };

  const handleClickRight = () => {
    const newValues = {
      ...clicks,
      right: clicks.right + 1,
      total: clicks.total + 1,
      traza: [...clicks.traza, "➡️"]
    };
    setClicks(newValues);
  };

  const handleResetCounters = () => {
    setClicks(initState);
  };

  return (
    <div className="App">
      <h1>Trabajar con estados complejos</h1>
      <h3>
        Aqui tenemos un ejemplo de añadir objetos a un Array.
      </h3>
      <p>
        En el estado no podemos utilizar el método push porque en React los estados no son mutables.
        Eso quiere decir que tenemos que rehacer el estado cada vez que lo modifiquemos.
      </p>
      <table className="Table">
        <tbody>
          <tr>
            <td>
              <DisplayClicks cont={clicks.left} />
            </td>
            <td>
              <button onClick={() => handleClickLeft()}>Left Click</button>
            </td>
            <td>
              <button onClick={() => handleClickRight()}>Right Click</button>
            </td>
            <td>
              <DisplayClicks cont={clicks.right} />
            </td>
          </tr>
        </tbody>
      </table>
      <button onClick={() => handleResetCounters()}>Reset Contadores</button>
      <h3>{`Total de clicks ${clicks.total}`}</h3>
      <p>{clicks.traza}</p>
    </div>
  );
}