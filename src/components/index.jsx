import React, { useState } from 'react'
import './index.css'





const CalcIMC = () => {
    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState(0);
    const [resultado, setResultado] = useState(0)

    const calcularIMC = () => {
        const imc = (parseFloat(peso)) / (parseFloat(altura ** 2))
        const formattedIMC = imc.toFixed(2);
        setResultado(formattedIMC)
    };

    const classificarIMC = (imc) => {
        if (imc < 18.5) return "Baixo peso";
        else if (imc < 24.9) return "Peso adequado";
        else if (imc < 29.9) return "Sobrepeso";
        else if (imc < 34.9) return "Obesidade grau 1";
        else if (imc < 39.9) return "Obesidade grau 2";
        return "Obesidade extrema";
    };


    return (
        <form>
            <h1>Calculadora IMC</h1>
            <label htmlFor="Peso">Peso</label><br />
            <input type="number" name="peso" onChange={evento => setPeso(parseFloat(evento.target.value))} id="peso" />
            <br /><br />
            <label htmlFor="Altura">Altura</label><br />
            <input type="number" name="altura" onChange={evento => setAltura(parseFloat(evento.target.value))} id="altura" />
            <br /><br />
            <button onClick={calcularIMC}>Calcular</button>
            <div>
                <h2>Resultado</h2>
                <p>Seu IMC é de: {resultado}</p>
                <p>Sua classificação é: {classificarIMC(resultado)}</p>
            </div>
        </form>
    )
};

export default CalcIMC;


