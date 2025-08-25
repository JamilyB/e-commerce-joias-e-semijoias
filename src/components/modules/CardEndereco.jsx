import ModalItem from "../../pages/User/ModalItem";

export default function CardEndereco({ endereco }) {
  return (
    <div style={{
      padding: "0.8rem 1rem",
      background: "#fff",
      borderRadius: "0.8rem",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: "1rem",
      boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
      minWidth: "350px",
      width: "350px",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <div style={{
          width: "30px",
          height: "30px",
          borderRadius: "50%",
          backgroundColor: "#e0e0e0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: "bold",
          color: "#555",

        }}>
          📍 {/* ícone de marcador, pode substituir por ícone profissional */}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.15rem", fontSize: "0.85rem" }}>
          <p><strong>{endereco.tipo}</strong></p>
          <p>{endereco.logradouro}, {endereco.numero}</p>
          <p>{endereco.bairro} - {endereco.cidade}/{endereco.estado}</p>
        </div>
      </div>
      <ModalItem tipo="endereco" item={endereco} />
    </div>
  );
}
