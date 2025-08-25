import ModalItem from "../../pages/User/ModalItem";
import { FaCreditCard } from "react-icons/fa"; // ícone de cartão

export default function CardCartao({ cartao }) {
  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0.75rem 1rem",
      background: "#f9f9f9",
      borderRadius: "0.75rem",
      boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
      gap: "1rem",
      maxWidth: "500px",

    }}>
      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
        <FaCreditCard size={24} color="#825C5D" />
        <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
          <span style={{ fontWeight: "600" }}>{cartao.bandeira}</span>
          <span>{cartao.numero}</span>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem", textAlign: "right" }}>
        <span>{cartao.nomeImpresso}</span>
        <span>Validade: {cartao.validade}</span>
      </div>

      <div>
        <ModalItem tipo="cartao" item={cartao} />
      </div>
    </div>
  );
}
