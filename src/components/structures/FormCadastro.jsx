import React from "react";
import { colors } from "../../styles/colors";
import Steps from "../modules/steps";
import Button from "../elements/button";
import DadosPessoais from "../modules/DadosPessoais";
import Enderecos from "../modules/Enderecos";
import Cartoes from "../modules/Cartoes";
import { useForm } from "../../hooks/useForm";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Send } from "lucide-react";

export default function FormCadastro() {
  const formComponents = [<DadosPessoais />, <Enderecos />, <Cartoes />];

  const { currentStep, currentComponent, changeStep, isLastStep, isFirstStep } =
    useForm(formComponents);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    toast.success("Cadastro realizado com sucesso!", {
      position: "top-right",
      autoClose: 3000,
    });

    setTimeout(() => {
      navigate("/produtos");
    }, 1000);
  };

  return (
    <div
      style={{
        width: "500px",
        height: "600px",
        margin: "2rem auto",
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        border: "1px solid #ddd",
        borderRadius: "10px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        backgroundColor: "#fff",
      }}
    >
      {/* Steps */}
      <div
        style={{
          borderBottom: "1px solid #ddd",
          paddingBottom: "1rem",
        }}
      >
        <Steps
          steps={["Dados Pessoais", "Endereço", "Cartões"]}
          currentStep={currentStep}
        />
      </div>

      {/* Conteúdo */}
      <div
        style={{
          flex: 1,
          overflowY: "auto",
          padding: "1rem 0",
        }}
      >
        {currentComponent}
      </div>

      {/* Botões */}
      <div
        style={{
          borderTop: "1px solid #ddd",
          paddingTop: "1rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Voltar ou placeholder */}
        {isFirstStep ? (
          <div style={{ width: "100px" }} /> // reserva espaço
        ) : (
          <Button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              changeStep(currentStep - 1);
            }}
            style={{
              backgroundColor: "transparent",
              color: colors.primary,
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            <ArrowLeft size={18} />
            <span> Voltar</span>
          </Button>
        )}

        {/* Continuar ou Enviar */}
        {!isLastStep ? (
          <Button
            type="button"
            onClick={(e) => changeStep(currentStep + 1, e)}
            style={{
              backgroundColor: "#555",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            <ArrowRight size={18} />
            <span> Continuar</span>

          </Button>
        ) : (
          <Button
            type="submit"
            onClick={handleSubmit}
            style={{
              backgroundColor: "#555",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            <Send size={18} />
            <span> Enviar</span>

          </Button>
        )}
      </div>
    </div>
  );
}
