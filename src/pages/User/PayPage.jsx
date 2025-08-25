import { useState } from "react";
import { userData } from "../data/userData";
import ModalEnderecos from "./ModalEnderecos";
import ModalCartoes from "./ModalCartoes";
import Button from "../components/elements/button";
import { colors } from "../styles/colors";

export default function PayPage() {
  const [selectedEndereco, setSelectedEndereco] = useState(userData.enderecos[0]);
  const [selectedCartao, setSelectedCartao] = useState(userData.cartoes[0]);

  // Mock de produtos no carrinho
  const cartItems = [
    { id: 1, nome: "Brinco de Pérola", qtd: 2, valor: 49.9 },
    { id: 2, nome: "Colar Dourado", qtd: 1, valor: 99.9 }
  ];

  const total = cartItems.reduce((acc, item) => acc + item.qtd * item.valor, 0);

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h2 style={{ color: colors.primary }}>Pagamento</h2>

      {/* Carrinho */}
      <div style={{ marginTop: "2rem" }}>
        {cartItems.map(item => (
          <div key={item.id} style={{
            display: "flex", justifyContent: "space-between",
            alignItems: "center", padding: "1rem", marginBottom: "1rem",
            border: `1px solid ${colors.secondary}`, borderRadius: "0.5rem"
          }}>
            <div>
              <strong>{item.nome}</strong> x {item.qtd}
            </div>
            <div>R$ {(item.qtd * item.valor).toFixed(2)}</div>
          </div>
        ))}
        <div style={{ textAlign: "right", fontWeight: "bold", marginTop: "1rem" }}>
          Total: R$ {total.toFixed(2)}
        </div>
      </div>

      {/* Endereço */}
      <div style={{ marginTop: "2rem" }}>
        <h3>Endereço de Entrega</h3>
        <div style={{
          display: "flex", justifyContent: "space-between",
          alignItems: "center", padding: "1rem",
          border: `1px solid ${colors.secondary}`, borderRadius: "0.5rem"
        }}>
          <div>
            {selectedEndereco.tipo} - {selectedEndereco.logradouro}, {selectedEndereco.numero} - {selectedEndereco.bairro}
          </div>
          <ModalEnderecos />
        </div>
      </div>

      {/* Cartão */}
      <div style={{ marginTop: "2rem" }}>
        <h3>Cartão de Pagamento</h3>
        <div style={{
          display: "flex", justifyContent: "space-between",
          alignItems: "center", padding: "1rem",
          border: `1px solid ${colors.secondary}`, borderRadius: "0.5rem"
        }}>
          <div>
            {selectedCartao.bandeira} - {selectedCartao.numero}
          </div>
          <ModalCartoes cartao={selectedCartao} />
        </div>
      </div>

      {/* Botão de finalizar */}
      <div style={{ marginTop: "2rem", textAlign: "right" }}>
        <Button style={{ background: colors.sucess, color: "#fff" }}>
          Finalizar Compra
        </Button>
      </div>
    </div>
  );
}
