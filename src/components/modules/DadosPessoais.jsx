import React from "react";

export default function DadosPessoais() {
    return(
        <Input placeholder="E-mail" type="email" />
      <div style={{ display: "flex", gap: "1rem" }}>
        <Input placeholder="Nome" styleExtra={{ flex: 1 }} />
        <Input placeholder="Sobrenome" styleExtra={{ flex: 1 }} />
      </div>
      <Input placeholder="Gênero" />
      <div style={{ display: "flex", gap: "1rem" }}>
          <Input placeholder="Data de Nascimento" type="date" />
          <Input placeholder="CPF" />
      </div>
      <p>Contatos</p>
      <div style={{ display: "flex", gap: "0.2rem" }}>
          <Input placeholder="Tipo" />
          <Input placeholder="DDD" />
          <Input placeholder="Telefone" />
      </div>
    )

}