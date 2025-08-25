import React from "react";
import { colors } from "../../styles/colors";

export default function Steps({ steps, currentStep }) {
  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        background: "#fff",
        zIndex: 10,
        padding: "1rem 0",
      }}
    >
      {/* Título do Form */}
      <h2 style={{ margin: 0, marginBottom: "1.5rem", textAlign: "center" }}>Cadastro</h2>

      {/* Steps */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {steps.map((step, index) => (
          <div
            key={index}
            style={{ display: "flex", flexDirection: "column", alignItems: "center", flex: 1 }}
          >
            {/* Número do passo */}
            <span
              style={{
                backgroundColor: index === currentStep ? colors.primary : "#ccc",
                color: "#fff",
                borderRadius: "50%",
                width: "2rem",
                height: "2rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "0.3rem",
                fontWeight: 500,
              }}
            >
              {index + 1}
            </span>

            {/* Nome do passo */}
            <span
              style={{
                textAlign: "center",
                opacity: index === currentStep ? 1 : 0.5,
                fontSize: "0.85rem",
                fontWeight: index === currentStep ? 600 : 400,
              }}
            >
              {step}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
