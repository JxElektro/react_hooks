import React, { useState } from "react";

function App() {
  const [gastos, setGastos] = useState([])

  return (
    <>
      <Contador gastos ={gastos}/>
      <GastosMes gastos={gastos}/>
      <AgregarGasto setGastos={setGastos}/>
    </>
  );
}

function Contador({gastos}) {

  let total = 0;
  for(let i =0 ; i< gastos.length;i++ )
  total += Number(gastos[i])

  return <div> Gasto mensual: ({parseInt(total)}  )</div>;
}

function GastosMes({gastos}) {
  

  return (
    <ul>
      {gastos.map((gasto) => (<li key={gasto}>{gasto}</li>
      ))}
    </ul>
  );
}

function AgregarGasto({setGastos}) {
  function handleSubmit(e) {
    e.preventDefault();
    const gasto = e.target.elements.gasto.value;
    setGastos(e => [...e,gasto])
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <input autocomplete="off" type="number" id="gasto" />
      <button type="Submit"> Agregar gasto </button>
    </form>
    </>
  )
}


export default App;