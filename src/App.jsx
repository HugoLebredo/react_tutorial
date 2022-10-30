import { useState } from "react";
import "./index.css";

const DisplayClicks = ({ cont }) => {
  console.log(cont);
  return <h2>{cont}</h2>;
};

const initState = { left: 0, right: 0, total: 0 };

export default function App() {
  const [clicks, setClicks] = useState(initState);

  const handleClickLeft = () => {
    const newValues = {
      ...clicks,
      left: clicks.left + 1,
      total: clicks.total + 1
    };
    setClicks(newValues);
  };

  const handleClickRight = () => {
    const newValues = {
      ...clicks,
      right: clicks.right + 1,
      total: clicks.total + 1
    };
    setClicks(newValues);
  };

  return (
    <div className="App">
      <h1>Trabajar con estados complejos</h1>
      <p>
        {" "}
        Nuestro estado es un objeto con 3 atributos las funciones handle()
        aumentan el contador correspondiente y el Total
        {" "}
      </p>
      <p>
        Chequea la consola!
      </p>
      <table className="Table">
        <td>
          <DisplayClicks cont={clicks.left} />
        </td>
        <td>
          <button onClick={() => handleClickLeft()}>Left Click</button>
        </td>
        <td>
          <button onClick={() => handleClickRight()}>right Click</button>
        </td>
        <td>
          <DisplayClicks cont={clicks.right} />
        </td>
      </table>
      <h3>{`Total de clicks ${clicks.total}`}</h3>
    </div>
  );
}