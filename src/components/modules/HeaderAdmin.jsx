import React from "react";
import { Link } from "react-router-dom";
import { colors } from "../../styles/colors";

export default function HeaderAdmin() {
  return (
    <header
      style={{
        width: "100%",
        height: "60px",
        backgroundColor: colors.primary,
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 2rem",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1000,
      }}
    >
      <h1 style={{ margin: 0, fontSize: "1.5rem" }}>Admin Panel</h1>
      <nav>
        <Link
          to="/admin/produtos"
          style={{ color: "#fff", marginRight: "1rem", textDecoration: "none" }}
        >
          Produtos
        </Link>
        <Link
          to="/admin/outro"
          style={{ color: "#fff", marginRight: "1rem", textDecoration: "none" }}
        >
          Outro
        </Link>
        <Link
          to="/"
          style={{ color: "#fff", textDecoration: "none" }}
        >
          Sair
        </Link>
      </nav>
    </header>
  );
}