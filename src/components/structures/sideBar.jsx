import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div
      style={{
        position: "fixed",
        width: "220px",
        height: "100vh",
        backgroundColor: "#fff",
        color: "#333",
        display: "flex",
        flexDirection: "column",
        padding: "1rem",
        boxSizing: "border-box",
        borderRight: "1px solid #eee",
      }}
    >
      <h3 style={{ marginBottom: "1.5rem", fontWeight: "600" }}>Minha Conta</h3>

      {/* Seções */}
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        {/* Minha Conta */}
        <div>
          <div
            onClick={() => toggleSection("Minha Conta")}
            style={{
              display: "flex",
              justifyContent: "space-between",
              cursor: "pointer",
              padding: "0.5rem 0",
              fontWeight: "500",
            }}
          >
            Minha Conta <span>{openSection === "Minha Conta" ? "−" : "+"}</span>
          </div>
          {openSection === "Minha Conta" && (
            <div style={{ paddingLeft: "1rem", display: "flex", flexDirection: "column", gap: "0.3rem" }}>
              <div>Informações</div>
              <div>Trocar Senha</div>
            </div>
          )}
        </div>

        {/* Meus Pedidos */}
        <div>
          <div
            onClick={() => toggleSection("Meus Pedidos")}
            style={{
              display: "flex",
              justifyContent: "space-between",
              cursor: "pointer",
              padding: "0.5rem 0",
              fontWeight: "500",
            }}
          >
            Meus Pedidos <span>{openSection === "Meus Pedidos" ? "−" : "+"}</span>
          </div>
          {openSection === "Meus Pedidos" && (
            <div style={{ paddingLeft: "1rem", display: "flex", flexDirection: "column", gap: "0.3rem" }}>
              <div>Pedidos</div>
              <div>Devoluções</div>
              <div>Cancelados</div>
            </div>
          )}
        </div>

        {/* Privacidade */}
        <div
          style={{
            cursor: "pointer",
            padding: "0.5rem 0",
            fontWeight: "500",
          }}
        >
          Privacidade
        </div>

        {/* Serviços ao Cliente */}
        <div
          style={{
            cursor: "pointer",
            padding: "0.5rem 0",
            fontWeight: "500",
          }}
        >
          Serviços ao Cliente
        </div>

        {/* Minhas Transações */}
        <div
          style={{
            cursor: "pointer",
            padding: "0.5rem 0",
            fontWeight: "500",
          }}
        >
          Minhas Transações
        </div>
      </div>

      {/* Logout */}
      <div
        style={{
          marginTop: "auto",
          cursor: "pointer",
          fontWeight: "500",
          padding: "0.5rem 0",
          borderTop: "1px solid #eee",
          marginTop: "1rem",
        }}
      >
        Sair
      </div>
    </div>
  );
}
