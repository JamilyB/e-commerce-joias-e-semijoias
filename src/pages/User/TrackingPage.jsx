import { colors } from "../../styles/colors";
import Sidebar from "../../components/structures/sideBar";

export default function TrackingPage() {
  const trackingData = {
    trackingNo: "#341918713810",
    status: "Entregue",
    date: "22 Ago 2025, Sexta-feira",
    lastUpdate: "22 Ago 2025, Domingo",
    history: [
      { date: "22 Ago 2025 - 14:30", status: "Entregue", location: "São Paulo, SP" },
      { date: "21 Ago 2025 - 11:30", status: "Saiu para entrega", location: "São Paulo, SP" },
      { date: "21 Ago 2025 - 17:30", status: "Em trânsito", location: "Rio de Janeiro → SP" },
      { date: "20 Ago 2025 - 07:26", status: "Coletado", location: "Rio de Janeiro, RJ" },
      { date: "19 Ago 2025 - 12:46", status: "Pedido recebido", location: "Rio de Janeiro, RJ" },
    ],
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh", backgroundColor: colors.background }}>
      {/* Sidebar fixa */}
      <Sidebar />

      {/* Conteúdo principal */}
      <main style={{
        flex: 1,
        padding: "2rem",
        maxWidth: "900px",
        margin: "0 auto",
        fontFamily: "Arial, sans-serif",
        marginLeft: "220px",
      }}>
        <h2 >Rastreamento do Pedido</h2>
        <p><strong>Código de Rastreio:</strong> {trackingData.trackingNo}</p>

        {/* Status atual */}
        <div style={{
          backgroundColor: "#808080",
          color: colors.text.secondary,
          padding: "16px",
          borderRadius: "10px",
          margin: "20px 0",
        }}>
          <h3 style={{ margin: 0 }}>Status: {trackingData.status}</h3>
          <p style={{ margin: 0 }}>Entregue em {trackingData.date}</p>
          <small>Última atualização: {trackingData.lastUpdate}</small>
        </div>

        {/* Timeline */}
        <h3 >Histórico de Entrega</h3>
        <div style={{ position: "relative", paddingLeft: "20px", marginTop: "12px" }}>
          {trackingData.history.map((item, i) => (
            <div key={i} style={{ marginBottom: "20px", position: "relative" }}>
              {/* Círculo indicador */}
              <div style={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                backgroundColor: "green",
                position: "absolute",
                left: 0,
                top: "5px"
              }} />
              {/* Linha vertical */}
              {i < trackingData.history.length - 1 && (
                <div style={{
                  position: "absolute",
                  left: "5px",
                  top: "12px",
                  bottom: "-20px",
                  width: "2px",
                  backgroundColor: "green"
                }} />
              )}
              {/* Detalhes */}
              <div style={{ marginLeft: "20px" }}>
                <span style={{ fontWeight: "bold", color: colors.text.primary }}>{item.status}</span>
                <p style={{ margin: "2px 0", fontSize: "0.9rem", color: "#555" }}>{item.location}</p>
                <small style={{ color: "#888" }}>{item.date}</small>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
