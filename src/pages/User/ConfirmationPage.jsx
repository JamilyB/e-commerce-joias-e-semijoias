import { userData } from "../../data/userData";
import { useNavigate } from "react-router-dom";

export default function ConfirmationPage() {

  const navigate = useNavigate();

  const cartItems = [
    { id: 1, nome: "Brinco de Pérola", qtd: 2, valor: 49.9 },
    { id: 2, nome: "Colar Dourado", qtd: 1, valor: 99.9 }
  ];

  const total = cartItems.reduce((acc, item) => acc + item.qtd * item.valor, 0);

  const green = "#28a745";

  return (
    <div style={{
      fontFamily: "Arial, sans-serif",
      maxWidth: "600px",
      margin: "2rem auto",
      padding: "2rem",
      textAlign: "center",
    }}>
      <h2 style={{ borderBottom: `2px solid black`, paddingBottom: "0.5rem", color: green }}>
        Pagamento Concluído
      </h2>
      <p style={{ fontStyle: "italic", marginTop: "0.5rem", color: "black" }}>Agosto 2025</p>

      <div style={{ margin: "2rem 0" }}>
        <div style={{
          width: "80px",
          height: "80px",
          borderRadius: "50%",
          border: `3px solid ${green}`,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "2.5rem",
          color: green
        }}>
          ✓
        </div>
      </div>

      <p style={{ color: green, fontWeight: "bold" }}>Obrigado! Seu pedido foi realizado com sucesso.</p>
      <p style={{ color: "#555", fontSize: "0.9rem" }}>Este é um resumo do seu pedido.</p>

      {/* Tabela de produtos */}
      <table style={{ width: "100%", marginTop: "2rem", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ background: "black", color: "#fff" }}>
            <th style={{ textAlign: "left", padding: "0.5rem" }}>PRODUTOS</th>
            <th style={{ textAlign: "right", padding: "0.5rem" }}>PREÇO</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map(item => (
            <tr key={item.id} style={{ borderBottom: `1px solid #ddd` }}>
              <td style={{ textAlign: "left", padding: "0.5rem" }}>{item.qtd} x {item.nome}</td>
              <td style={{ textAlign: "right", padding: "0.5rem" }}>R$ {(item.qtd * item.valor).toFixed(2)}</td>
            </tr>
          ))}
          <tr>
            <td style={{ textAlign: "left", fontWeight: "bold", padding: "0.5rem" }}>TOTAL</td>
            <td style={{ textAlign: "right", fontWeight: "bold", padding: "0.5rem", color: green }}>
              R$ {total.toFixed(2)}
            </td>
          </tr>
        </tbody>
      </table>

      {/* Botão voltar aos produtos */}
            <div style={{ marginTop: "2rem" }}>
              <button
                onClick={() => navigate("/produtos")}
                style={{
                  backgroundColor: "#6c757d",
                  color: "#fff",
                  border: "none",
                  padding: "0.75rem 1.5rem",
                  borderRadius: "5px",
                  cursor: "pointer",
                  fontSize: "1rem"
                }}
              >
                Voltar para Produtos
              </button>
            </div>
    </div>
  );
}
