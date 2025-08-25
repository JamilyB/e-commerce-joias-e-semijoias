import { colors } from "../styles/colors";
import Sidebar from "../components/structures/sideBar";

export default function TrackingPage() {
  const trackingData = {
    trackingNo: "#341918713810",
    status: "Delivered",
    date: "27 Ago 2021, Sexta-feira",
    lastUpdate: "29 Ago 2021, Domingo",
    history: [
      { date: "27 Ago 2021 - 14:30", status: "Delivered", location: "São Paulo, SP" },
      { date: "27 Ago 2021 - 11:30", status: "Out for Delivery", location: "São Paulo, SP" },
      { date: "25 Ago 2021 - 17:30", status: "In Transit", location: "Rio de Janeiro → SP" },
      { date: "24 Ago 2021 - 07:26", status: "Picked Up", location: "Rio de Janeiro, RJ" },
      { date: "23 Ago 2021 - 12:46", status: "Order Received", location: "Rio de Janeiro, RJ" },
    ],
  };

  return (
   <div style={{ display: "flex", minHeight: "100vh", backgroundColor: colors.background }}>

{/* Sidebar fixa à esquerda */}
<Sidebar />
    <div style={{ fontFamily: "sans-serif", padding: "20px", backgroundColor: colors.background }}>

      {/* Cabeçalho */}
      <h2 style={{ color: colors.primary }}>Rastreamento do Pedido</h2>
      <p>
        <strong>Código de Rastreio:</strong> {trackingData.trackingNo}
      </p>

      {/* Status */}
      <div
        style={{
          backgroundColor: colors.secondary,
          color: colors.text.secondary,
          padding: "16px",
          borderRadius: "12px",
          margin: "20px 0",
        }}
      >
        <h3 style={{ margin: 0 }}>Status: {trackingData.status}</h3>
        <p style={{ margin: 0 }}>Entregue em {trackingData.date}</p>
        <small>Última atualização: {trackingData.lastUpdate}</small>
      </div>

      {/* Timeline */}
      <h3 style={{ color: colors.primary }}>Histórico de Entrega</h3>
      <div style={{ borderLeft: `3px solid ${colors.primary}`, paddingLeft: "12px", marginTop: "12px" }}>
        {trackingData.history.map((item, i) => (
          <div key={i} style={{ marginBottom: "20px" }}>
            <span style={{ fontWeight: "bold", color: colors.text.primary }}>{item.status}</span>
            <p style={{ margin: "2px 0", fontSize: "0.9rem" }}>{item.location}</p>
            <small style={{ color: "#555" }}>{item.date}</small>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}
