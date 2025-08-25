import React from "react";
import Input from "../elements/Input";

export default function DadosPessoais() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      {/* Email */}
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label style={{ marginBottom: "0.15rem", fontWeight: "500" }}>E-mail</label>
        <Input placeholder="Digite seu e-mail" type="email" />
      </div>

      {/* Nome e Sobrenome */}
      <div style={{ display: "flex", gap: "0.5rem" }}>
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <label style={{ marginBottom: "0.15rem", fontWeight: "500" }}>Nome</label>
          <Input placeholder="Nome" />
        </div>
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <label style={{ marginBottom: "0.15rem", fontWeight: "500" }}>Sobrenome</label>
          <Input placeholder="Sobrenome" />
        </div>
      </div>

      {/* Gênero */}
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label style={{ marginBottom: "0.15rem", fontWeight: "500" }}>Gênero</label>
        <Input placeholder="Selecione seu gênero" />
      </div>

      {/* Data de Nascimento e CPF */}
      <div style={{ display: "flex", gap: "0.5rem" }}>
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <label style={{ marginBottom: "0.15rem", fontWeight: "500" }}>Data de Nascimento</label>
          <Input type="date" />
        </div>
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <label style={{ marginBottom: "0.15rem", fontWeight: "500" }}>CPF</label>
          <Input placeholder="000.000.000-00" />
        </div>
      </div>

      {/* Contatos */}
      <p style={{ fontWeight: "600", marginTop: "0.5rem" }}>Contatos</p>
      <div style={{ display: "flex", gap: "0.3rem" }}>
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <label style={{ marginBottom: "0.15rem", fontWeight: "500" }}>Tipo</label>
          <Input placeholder="Celular / Fixo" />
        </div>
        <div style={{ width: "80px", display: "flex", flexDirection: "column" }}>
          <label style={{ marginBottom: "0.15rem", fontWeight: "500" }}>DDD</label>
          <Input placeholder="11" />
        </div>
        <div style={{ flex: 2, display: "flex", flexDirection: "column" }}>
          <label style={{ marginBottom: "0.15rem", fontWeight: "500" }}>Telefone</label>
          <Input placeholder="99999-9999" />
        </div>
      </div>
    </div>
  );
}
