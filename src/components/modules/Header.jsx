import { colors } from "../../styles/colors";
import { Search, Heart, HelpCircle, User, ShoppingBag, Truck } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header style={{ borderBottom: "1px solid #e5e7eb", position: "sticky", top: 0, backgroundColor: "#fff", zIndex: 1000 }}>
      {/* Barra superior */}
      <div
        style={{
          backgroundColor: colors.secondary,
          color: colors.text.secondary,
          textAlign: "center",
          padding: "6px",
          fontSize: "0.9rem",
        }}
      >
        FRETE GRÁTIS para compras acima de R$ 99,00
      </div>

      {/* Conteúdo */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "12px 24px",
        }}
      >
        {/* Esquerda */}
        <Link
          to="/orders"
          style={{ display: "flex", alignItems: "center", gap: "6px", cursor: "pointer", textDecoration: "none", color: "inherit" }}
        >
          <Truck size={20} color={colors.primary} />
          <span style={{ fontSize: "0.9rem", color: colors.text.primary }}>
            Rastrear Pedido
          </span>
        </Link>

        {/* Logo */}
        <div style={{ textAlign: "center", flex: 1 }}>
          <h1
            style={{
              fontFamily: "serif",
              fontSize: "1.5rem",
              color: colors.primary,
              margin: 0,
            }}
          >
            Sakura<span style={{ fontWeight: "300" }}></span>
          </h1>
          <span style={{ fontSize: "0.8rem", color: "#666" }}>JOIAS E SEMIJOIAS</span>
        </div>

        {/* Ícones */}
        <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
          <Link to="/produtos" style={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}>
            <Search size={22} />
          </Link>
          <Link to="/favoritos" style={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}>
            <Heart size={22} />
          </Link>
          <Link to="/ajuda" style={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}>
            <HelpCircle size={22} />
          </Link>
          <Link to="/info" style={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}>
            <User size={22} />
          </Link>
          <Link
            to="/cart"
            style={{ position: "relative", textDecoration: "none", color: "inherit", cursor: "pointer" }}
          >
            <ShoppingBag size={22} />
            <span
              style={{
                position: "absolute",
                top: "-6px",
                right: "-8px",
                backgroundColor: colors.primary,
                color: colors.text.secondary,
                fontSize: "0.7rem",
                borderRadius: "50%",
                padding: "2px 5px",
              }}
            >
              0
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}
