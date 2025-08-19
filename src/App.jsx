import React, { useState } from "react";
import "./App.css";

const CalculadoraDeTinta = () => {
  const [ancho, setAncho] = useState("");
  const [alto, setAlto] = useState("");
  const [porcentajeTinta, setPorcentajeTinta] = useState("");
  const [tiraje, setTiraje] = useState("");
  const [resultado, setResultado] = useState(null);
  const [mostrarModal, setMostrarModal] = useState(false);

  const calcular = () => {
    const anchoM = parseFloat(ancho) / 100;
    const altoM = parseFloat(alto) / 100;
    const porcentaje = parseFloat(porcentajeTinta);
    const cantidad = parseFloat(tiraje);

    const resultadoGramos = Math.round(
      (anchoM * altoM * 1.5 * porcentaje * cantidad) / 100
    );
    const resultadoKilos = (resultadoGramos / 1000).toFixed(2);

    setResultado({ gramos: resultadoGramos, kilos: resultadoKilos });
    setMostrarModal(true);

  };

  const nuevoCalculo = () => {
    setAncho("");
    setAlto("");
    setPorcentajeTinta("");
    setTiraje("");
    setResultado(null);
    setMostrarModal(false);
  };

  if(mostrarModal == true){
    setTimeout(()=>{
      setMostrarModal(false),
      nuevoCalculo();
    },30000);
  }

  return (
    <div className="container shadow mx-auto tex-center">
      <h1>Calculadora de Tinta</h1>
      <h3>by IM Dev</h3>
      <input
        type="number"
        value={ancho}
        placeholder="Ancho en centímetros"
        onChange={(e) => setAncho(e.target.value)}
        required
      />
      <input
        type="number"
        value={alto}
        placeholder="Alto en centímetros"
        onChange={(e) => setAlto(e.target.value)}
        required
      />
      <input
        type="number"
        value={porcentajeTinta}
        placeholder="Porcentaje de tinta"
        onChange={(e) => setPorcentajeTinta(e.target.value)}
        required
      />
      <input
        type="number"
        value={tiraje}
        placeholder="Tiraje"
        onChange={(e) => setTiraje(e.target.value)}
        required
      />
      <button onClick={calcular}>Calcular</button>
      <button onClick={nuevoCalculo}>Borrar</button>

      {mostrarModal && (
        <dialog open>
          <h2>Resultado</h2>
          <p>
            La cantidad de tinta necesaria es: {resultado.gramos} gramos o{" "}
            {resultado.kilos} kilos
          </p>
          <button
            onClick={() => {
              setMostrarModal(false);
              nuevoCalculo();
            }}
          >
            Cerrar
          </button>
        </dialog>
      )}
    </div>
  );
};

export default CalculadoraDeTinta;
