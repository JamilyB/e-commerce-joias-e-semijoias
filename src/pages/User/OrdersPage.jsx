import { colors } from "../../styles/colors";
import Sidebar from "../../components/structures/sideBar";
import { useNavigate } from "react-router-dom";

// dados simulados de pedidos
const orders = [
  {
    id: 1,
    name: "Brinco de Pérola",
    price: "R$ 49,90",
    status: "Entregue em 20/08/2023",
    orderNumber: "#12345",
    image: "https://dummyimage.com/200x200/825C5D/ffffff&text=Brinco",
  },
  {
    id: 2,
    name: "Colar Dourado",
    price: "R$ 79,90",
    status: "Em transporte",
    orderNumber: "#67890",
    image: "https://dummyimage.com/200x200/9B6D74/ffffff&text=Colar",
  },
  {
    id: 3,
    name: "Pulseira Elegante",
    price: "R$ 39,90",
    status: "Aguardando envio",
    orderNumber: "#11223",
    image: "https://dummyimage.com/200x200/F9FAFB/111827&text=Pulseira",
  },
];

export default function OrdersPage() {
  const navigate = useNavigate();

  const handleTrack = (product) => {
    navigate(`/rastrear`);
  };

  const handleReturn = (product) => {
    console.log("Devolver:", product);
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh", backgroundColor: colors.background }}>
      {/* Sidebar fixa à esquerda */}
      <Sidebar />

      {/* Conteúdo principal */}
      <div
        style={{
          marginLeft: "220px", // espaço para a sidebar
          flex: 1,
          padding: "30px",
        }}
      >
        <h2 style={{ color: "black", marginBottom: "25px", fontSize: "22px", fontWeight: "600" }}>
          Meus Pedidos
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {orders.map((order) => (
            <div
              key={order.id}
              style={{
                backgroundColor: "#fff",
                borderRadius: "12px",
                padding: "20px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
                display: "flex",
                gap: "20px",
                alignItems: "center",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 6px 16px rgba(0,0,0,0.1)")}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.06)")}
            >
              {/* Imagem */}
              <img
                src={order.image}
                alt={order.name}
                style={{
                  width: "120px",
                  height: "120px",
                  objectFit: "cover",
                  borderRadius: "10px",
                  border: "1px solid #eee",
                }}
              />

              {/* Infos do pedido */}
              <div style={{ flex: 1 }}>
                <h3 style={{ color: colors.text.primary, marginBottom: "8px", fontSize: "18px", fontWeight: "600" }}>
                  {order.name}
                </h3>
                <p style={{ color: colors.secondary, fontWeight: "bold", marginBottom: "6px" }}>
                  {order.price}
                </p>
                <p style={{ color: colors.text.primary, fontSize: "14px", marginBottom: "4px" }}>
                  Pedido: <strong>{order.orderNumber}</strong>
                </p>
                <p style={{ fontSize: "14px", marginBottom: "10px" }}>
                  Status:{" "}
                  <span style={{ fontWeight: "500", color: colors.status.success }}>
                    {order.status}
                  </span>
                </p>

                {/* Botões */}
                <div style={{ display: "flex", gap: "12px" }}>
                  <button
                    onClick={() => handleTrack(order)}
                    style={{
                      backgroundColor: "gray",
                      color: "#fff",
                      border: "none",
                      padding: "10px 16px",
                      borderRadius: "8px",
                      cursor: "pointer",
                      fontSize: "14px",
                      fontWeight: "500",
                    }}
                  >
                    Rastrear
                  </button>
                  <button
                    onClick={() => handleReturn(order)}
                    style={{
                      backgroundColor: colors.status.error,
                      color: "#fff",
                      border: "none",
                      padding: "10px 16px",
                      borderRadius: "8px",
                      cursor: "pointer",
                      fontSize: "14px",
                      fontWeight: "500",
                    }}
                  >
                    Devolver
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
