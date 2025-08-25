import React from "react";
import Input from "../elements/Input";

export default function Cartoes({ cartao }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>

      {/* Nº do Cartão e Nome Impresso */}
      <div style={{ display: "flex", gap: "0.5rem" }}>
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <label style={{ marginBottom: "0.15rem", fontWeight: "500" }}>Nº do Cartão</label>
          <Input placeholder="Nº do Cartao" type="text" defaultValue={cartao?.numero} />
        </div>
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <label style={{ marginBottom: "0.15rem", fontWeight: "500" }}>Nome Impresso</label>
          <Input placeholder="Nome Impresso" type="text" defaultValue={cartao?.nomeImpresso} />
        </div>
      </div>

      {/* CVV, Bandeira e Data de Validade */}
      <div style={{ display: "flex", gap: "0.5rem" }}>
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <label style={{ marginBottom: "0.15rem", fontWeight: "500" }}>CVV</label>
          <Input placeholder="CVV" type="text" defaultValue={cartao?.cvv} />
        </div>
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <label style={{ marginBottom: "0.15rem", fontWeight: "500" }}>Bandeira</label>
          <Input placeholder="Bandeira" type="text" defaultValue={cartao?.bandeira} />
        </div>
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <label style={{ marginBottom: "0.15rem", fontWeight: "500" }}>Data de Validade</label>
          <Input placeholder="Data de Validade" type="date" defaultValue={cartao?.validade} />
        </div>
      </div>

    </div>
  );
}
