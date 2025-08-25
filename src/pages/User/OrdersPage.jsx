import { colors } from "../styles/colors";
import Sidebar from "../components/structures/sideBar";

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
  const handleTrack = (product) => {
    console.log("Rastrear:", product);
  };

  const handleReturn = (product) => {
    console.log("Devolver:", product);
  };

  return (

    <div style={{ display: "flex", minHeight: "100vh", backgroundColor: colors.background }}>

    {/* Sidebar fixa à esquerda */}
    <Sidebar />
    <div style={{ padding: "20px", backgroundColor: colors.background }}>

      <h2 style={{ color: colors.primary, marginBottom: "20px" }}>Meus Pedidos</h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {orders.map((order) => (
          <div
            key={order.id}
            style={{
              backgroundColor: "#fff",
              borderRadius: "12px",
              padding: "16px",
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
              display: "flex",
              gap: "20px",
              alignItems: "center",
            }}
          >
            {/* Imagem */}
            <img
              src={order.image}
              alt={order.name}
              style={{
                width: "140px",
                height: "140px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />

            {/* Infos do pedido */}
            <div style={{ flex: 1 }}>
              <h3 style={{ color: colors.text.primary, marginBottom: "6px" }}>
                {order.name}
              </h3>
              <p style={{ color: colors.secondary, fontWeight: "bold" }}>
                {order.price}
              </p>
              <p style={{ color: colors.text.primary, fontSize: "14px" }}>
                Pedido: <strong>{order.orderNumber}</strong>
              </p>
              <p style={{ color: colors.text.primary, fontSize: "14px" }}>
                Status: <span style={{ color: colors.status.success }}>{order.status}</span>
              </p>

              {/* Botões */}
              <div style={{ display: "flex", gap: "10px", marginTop: "12px" }}>
                <button
                  onClick={() => handleTrack(order)}
                  style={{
                    backgroundColor: colors.primary,
                    color: colors.text.secondary,
                    border: "none",
                    padding: "8px 14px",
                    borderRadius: "8px",
                    cursor: "pointer",
                  }}
                >
                  Rastrear
                </button>
                <button
                  onClick={() => handleReturn(order)}
                  style={{
                    backgroundColor: colors.status.error,
                    color: colors.text.secondary,
                    border: "none",
                    padding: "8px 14px",
                    borderRadius: "8px",
                    cursor: "pointer",
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
