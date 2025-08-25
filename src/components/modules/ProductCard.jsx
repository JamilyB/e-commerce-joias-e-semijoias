import { colors } from "../../styles/colors";
import { Heart, ShoppingCart } from "lucide-react";

export default function ProductCard({
  name,
  price,
  image,
  onAddToCart,
  onFavorite,
}) {
  return (
    <div
      className=" rounded-2xl p-4 flex flex-col justify-between"
      style={{
        backgroundColor: colors.background,
        color: colors.text.primary,
        maxWidth: "250px",
        height: "360px",
        position: "relative",
      }}
    >
      {/* Imagem do produto */}
      <img
        src={image}
        alt={name}
        style={{
          width: "100%",
          height: "200px",
          objectFit: "cover",
          borderRadius: "12px",
          marginBottom: "12px",
        }}
      />

      {/* Nome, preço e coração */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "12px" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h3 style={{ fontSize: "1.1rem", fontWeight: "600", margin: 0 }}>
            {name}
          </h3>
          <p style={{
            fontSize: "1rem",
            color: "#F59E0B", // laranja
            fontWeight: "700",
            margin: 0
          }}>
            R$ {price.toFixed(2)}
          </p>
        </div>
        <Heart
          onClick={onFavorite}
          size={24}
          style={{ cursor: "pointer", color: "red" }}
        />
      </div>

      {/* Botão de adicionar */}
      <button
        onClick={onAddToCart}
        style={{
          width: "100%",
          padding: "10px",
          backgroundColor: colors.primary,
          color: colors.text.secondary,
          border: "none",
          borderRadius: "12px",
          cursor: "pointer",
          fontWeight: "600",
          fontSize: "0.95rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "6px",
        }}
      >
        <ShoppingCart size={20} />
        Adicionar
      </button>
    </div>
  );
}
