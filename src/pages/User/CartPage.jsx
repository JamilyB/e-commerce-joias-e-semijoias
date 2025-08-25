import { colors } from "../../styles/colors";
import Header from "../../components/modules/Header";
import CardPayProduct from "../../components/modules/CardPayProduct";
import { useNavigate } from "react-router-dom";
import React from "react";

export default function CartPage() {
  const navigate = useNavigate();

  const cartItems = [
    { id: 1, nome: "Colar Elegance", cor: "Dourado", tamanho: "Único", qtd: 1, preco: 129.9, imagem: "https://dummyimage.com/80x80/808080/fff&text=Colar" },
    { id: 2, nome: "Pulseira Grace", cor: "Prata", tamanho: "Único", qtd: 1, preco: 79.9, imagem: "https://dummyimage.com/80x80/808080/fff&text=Pulseira" },
  ];

  const total = cartItems.reduce((acc, item) => acc + item.preco * item.qtd, 0);

  return (
    <div style={{ maxWidth: "1000px", margin: "50px", display: "flex", gap: "20px", flexWrap: "wrap" }}>

      {/* Lista de produtos */}
      <div style={{ flex: "2 1 600px", backgroundColor: "#fff", padding: "20px", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}>
        <h3 style={{ marginBottom: "20px", color: colors.primary }}>Seu Carrinho</h3>
        {cartItems.map(item => (
          <div key={item.id} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <input type="checkbox" />
            <CardPayProduct produto={item} />
          </div>
        ))}
        <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
          <input
            type="text"
            placeholder="Tem um cupom?"
            style={{
              flex: 1,
              padding: "12px",
              border: `1px solid ${colors.primary}40`,
              borderRadius: "8px",
              backgroundColor: "#fafafa",
            }}
          />
          <button
            style={{
              padding: "12px 20px",
              backgroundColor: colors.secondary,
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "600",
            }}
          >
            Aplicar
          </button>
        </div>
      </div>

      {/* Resumo do pedido */}
      <div style={{ flex: "1 1 300px", backgroundColor: "#fff", padding: "20px", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.05)", height: "fit-content" }}>
        <h3 style={{ marginBottom: "20px" }}>Resumo do Pedido</h3>
        <p>Total dos produtos: <strong>R$ {total.toFixed(2)}</strong></p>
        <p>Frete: <strong>Grátis</strong></p>
        <hr style={{ margin: "20px 0" }} />
        <h3 style={{ marginBottom: "20px" }}>Total: R$ {total.toFixed(2)}</h3>
        <button
          onClick={() => navigate("/pay")}
          style={{
            width: "100%",
            padding: "14px",
            backgroundColor: "#28a745", // verde
            color: "#fff",
            border: "none",
            borderRadius: "12px",
            fontWeight: "bold",
            cursor: "pointer",
            fontSize: "16px"
          }}
        >
          Finalizar Compra
        </button>
      </div>

    </div>
  );
}
