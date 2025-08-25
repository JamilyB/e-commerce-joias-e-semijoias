import React from "react";
import Input from "../elements/Input";

export default function Enderecos() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      {/* Tipo de Residência */}
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label style={{ marginBottom: "0.15rem", fontWeight: "500" }}>Tipo de Residência</label>
        <Input placeholder="Tipo de Residencia" type="text" />
      </div>

      {/* Logradouro */}
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label style={{ marginBottom: "0.15rem", fontWeight: "500" }}>Logradouro</label>
        <Input placeholder="Logradouro" type="text" />
      </div>

      {/* Número e Bairro */}
      <div style={{ display: "flex", gap: "0.5rem" }}>
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <label style={{ marginBottom: "0.15rem", fontWeight: "500" }}>Número</label>
          <Input placeholder="Número" type="text" />
        </div>
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <label style={{ marginBottom: "0.15rem", fontWeight: "500" }}>Bairro</label>
          <Input placeholder="Bairro" type="text" />
        </div>
      </div>

      {/* CEP e Cidade */}
      <div style={{ display: "flex", gap: "0.5rem" }}>
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <label style={{ marginBottom: "0.15rem", fontWeight: "500" }}>CEP</label>
          <Input placeholder="CEP" type="text" />
        </div>
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <label style={{ marginBottom: "0.15rem", fontWeight: "500" }}>Cidade</label>
          <Input placeholder="Cidade" type="text" />
        </div>
      </div>

      {/* País e Estado */}
      <div style={{ display: "flex", gap: "0.5rem" }}>
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <label style={{ marginBottom: "0.15rem", fontWeight: "500" }}>País</label>
          <Input placeholder="País" type="text" />
        </div>
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <label style={{ marginBottom: "0.15rem", fontWeight: "500" }}>Estado</label>
          <Input placeholder="Estado" type="text" />
        </div>
      </div>

      {/* Observação */}
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label style={{ marginBottom: "0.15rem", fontWeight: "500" }}>Observação</label>
        <Input placeholder="Observação" type="text" />
      </div>
    </div>
  );
}
