import "./App.css";
import React, { useState } from "react";
import InputMask from "react-input-mask";

export default function App() {
   const [form, setForm] = useState({ peso: "", altura: "" });

   const handleChange = (e) => {
      setForm({ ...form, [e.target.name]: e.target.value });
   };

   const handleSubmit = (e) => {
      e.preventDefault();

      if ((!form.altura && !form.peso) || !form.peso || !form.altura) {
         alert("Valores inválidos!");
      } else {
         const imc = form.peso / (form.altura * form.altura);

         document.getElementById("imc").textContent = `Seu imc é ${imc.toFixed(
            2
         )}`;

         let classificacao;

         switch (true) {
            case imc < 18.5:
               document.getElementById("classificacao").textContent =
                  "Classificação: Abaixo do peso";
               break;
            case imc < 24.9:
               document.getElementById("classificacao").textContent =
                  "Classificação: Peso normal";
               break;
            case imc < 29.9:
               document.getElementById("classificacao").textContent =
                  "Classificação: Sobrepeso";
               break;
            default:
               document.getElementById("classificacao").textContent =
                  "Classificação: Obesidade";
               break;
         }
         setForm({ peso: "", altura: "" });
         return classificacao;
      }
   };

   return (
      <form onSubmit={handleSubmit}>
         <div className="container">
            <div className="form">
               <div className="container-input-label">
                  <div className="children-container-input-label">
                     <label>Qual é o seu peso?</label>
                     <InputMask
                        placeholder="Digite seu peso (ex: 80kg)"
                        onChange={handleChange}
                        name="peso"
                        value={form.peso}
                     />
                  </div>
                  <div className="children-container-input-label">
                     <label>Qual é a sua altura?</label>
                     <InputMask
                        placeholder="Digite sua altura (ex: 1.90m)"
                        onChange={handleChange}
                        mask="9.99"
                        name="altura"
                        value={form.altura}
                     />
                  </div>
                  <span id="imc"></span>
                  <br></br>
                  <span id="classificacao"></span>
               </div>
               <div className="container-button">
                  <button className="button">CALCULAR</button>
               </div>
            </div>
         </div>
      </form>
   );
}