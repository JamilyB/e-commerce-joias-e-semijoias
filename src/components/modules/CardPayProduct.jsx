import { colors } from "../../styles/colors";
import React from "react";

export function CardPayProduct({ produto }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: "15px",
        marginBottom: "12px",
        borderRadius: "12px",
        backgroundColor: "#fff",
        boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
        gap: "15px",
      }}
    >
      {/* Imagem do produto */}
      <img
        src={produto.imagem}
        alt={produto.nome}
        style={{
          width: "80px",
          height: "80px",
          objectFit: "cover",
          borderRadius: "12px",
          border: `1px solid ${colors.primary}20`,
        }}
      />

      {/* Informações do produto */}
      <div style={{ flex: 1 }}>
        <p style={{ margin: "0 0 5px 0", fontWeight: "600", fontSize: "16px", color: colors.primary }}>
          {produto.nome}
        </p>

      </div>

      {/* Quantidade */}
      <input
        type="number"
        value={produto.qtd}
        min="1"
        readOnly
        style={{
          width: "50px",
          padding: "6px",
          textAlign: "center",
          border: `1px solid ${colors.primary}40`,
          borderRadius: "6px",
          backgroundColor: "#fafafa",
        }}
      />

      {/* Preço */}
      <p style={{ fontWeight: "600", fontSize: "16px", margin: "0 15px 0 0", color: colors.primary }}>
        R$ {produto.preco.toFixed(2)}
      </p>

      {/* Botão de remover */}
      <button
        style={{
          background: "#ff6f61",
          color: "#fff",
          border: "none",
          borderRadius: "50%",
          width: "28px",
          height: "28px",
          fontSize: "18px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        ×
      </button>
    </div>
  );
}

export default CardPayProduct;
