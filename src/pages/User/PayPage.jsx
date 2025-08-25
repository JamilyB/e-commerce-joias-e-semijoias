import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { userData } from "../../data/userData";
import ModalItem from "./ModalItem";
import CardEndereco from "../../components/modules/CardEndereco";
import CardCartao from "../../components/modules/CardCartao";
import { colors } from "../../styles/colors";
import CardPayProduct from "../../components/modules/CardPayProduct";

export default function PayPage() {
  const [selectedEndereco, setSelectedEndereco] = useState(userData.enderecos[0]);
  const [selectedCartao, setSelectedCartao] = useState(userData.cartoes[0]);
  const navigate = useNavigate();

  const cartItems = [
    { id: 1, nome: "Brinco de Pérola", qtd: 2, valor: 49.9, imagem: "https://dummyimage.com/80x80/ccc/fff&text=Brinco" },
    { id: 2, nome: "Colar Dourado", qtd: 1, valor: 99.9, imagem: "https://dummyimage.com/80x80/ccc/fff&text=Colar" }
  ];

  const total = cartItems.reduce((acc, item) => acc + item.qtd * item.valor, 0);

  const handleFinalizar = () => {
    toast.info("Processando pagamento...", {
      position: "top-right",
      autoClose: 2000,
    });

    setTimeout(() => {
      navigate("/confirmation");
    }, 2000);
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif", paddingBottom: "6rem" }}>
      <h2 style={{ color: colors.primary }}>Pagamento</h2>

      {/* Carrinho */}
      <div style={{ marginTop: "2rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
        {cartItems.map(item => (
          <CardPayProduct
            key={item.id}
            produto={{
              nome: item.nome,
              qtd: item.qtd,
              preco: item.valor,
              imagem: item.imagem,
              cor: "",
              tamanho: ""
            }}
          />
        ))}
        <div style={{ textAlign: "right", fontWeight: "bold", marginTop: "1rem" }}>
          Total: R$ {total.toFixed(2)}
        </div>
      </div>

      {/* Endereços */}
      <div style={{ marginTop: "2rem" }}>
        <h3>Endereço de Entrega</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          {userData.enderecos.map((endereco, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <input
                type="radio"
                name="endereco"
                checked={selectedEndereco === endereco}
                onChange={() => setSelectedEndereco(endereco)}
              />
              <CardEndereco endereco={endereco} />
            </div>
          ))}
          <div style={{ textAlign: "right" }}>
            <ModalItem tipo="endereco" />
          </div>
        </div>
      </div>

      {/* Cartões */}
      <div style={{ marginTop: "2rem" }}>
        <h3>Cartão de Pagamento</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          {userData.cartoes.map((cartao, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <input
                type="radio"
                name="cartao"
                checked={selectedCartao === cartao}
                onChange={() => setSelectedCartao(cartao)}
              />
              <CardCartao cartao={cartao} />
            </div>
          ))}
          <div style={{ textAlign: "right" }}>
            <ModalItem tipo="cartao" />
          </div>
        </div>
      </div>

      {/* Botão Finalizar Compra fixo */}
      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          width: "100%",
          backgroundColor: "#fff",
          padding: "1rem 2rem",
          textAlign: "right",
          borderTop: "1px solid #ddd",
          boxShadow: "0 -2px 5px rgba(0,0,0,0.1)",
          zIndex: 1000,
        }}
      >
        <button
          onClick={handleFinalizar}
          style={{
            padding: "12px 24px",
            backgroundColor: "#28a745", // verde
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            fontWeight: "bold",
            cursor: "pointer"
          }}
        >
          Finalizar Compra
        </button>
      </div>
    </div>
  );
}
