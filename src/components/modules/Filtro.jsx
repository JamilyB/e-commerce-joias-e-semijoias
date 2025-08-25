import React from "react";
import { colors } from "../../styles/colors";
import { Filter } from "lucide-react";

const styles = {
  filtroContainer: {
    width: "230px",
    padding: "16px",
    backgroundColor: colors.background,
    borderRadius: "12px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.05)",
    fontFamily: "Arial, sans-serif",
    flexShrink: "0",
  },
  header: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    marginBottom: "16px",
    color: colors.primary,
    fontWeight: "bold",
    fontSize: "1.2rem",
  },
  sectionTitle: {
    marginTop: "16px",
    marginBottom: "8px",
    fontSize: "1em",
    color: colors.text.primary,
    borderBottom: `1px solid ${colors.secondary}`,
    paddingBottom: "4px",
  },
  label: {
    display: "block",
    marginBottom: "5px",
    cursor: "pointer",
    fontSize: "0.9em",
    color: colors.text.primary,
  },
  select: {
    width: "100%",
    padding: "6px",
    border: `1px solid ${colors.secondary}`,
    borderRadius: "6px",
    backgroundColor: "#fff",
    fontSize: "0.95em",
  },
  inputNumber: {
    width: "48%",
    padding: "6px",
    border: `1px solid ${colors.secondary}`,
    borderRadius: "6px",
    fontSize: "0.95em",
  },
  priceContainer: {
    display: "flex",
    justifyContent: "space-between",
    gap: "6px",
  },
  colorSwatchContainer: {
    display: "flex",
    gap: "6px",
    alignItems: "center",
    flexWrap: "wrap",
  },
  colorSwatch: {
    width: "22px",
    height: "22px",
    border: `1px solid ${colors.secondary}`,
    borderRadius: "50%",
    cursor: "pointer",
  },
};

const Filtro = () => {
  return (
    <div style={styles.filtroContainer}>
      {/* Header com ícone */}
      <div style={styles.header}>
        <Filter size={20} />
        <span>Filtros</span>
      </div>

      <h3 style={styles.sectionTitle}>Categoria</h3>
      <label style={styles.label}>
        <input type="radio" name="categoria" /> Colares
      </label>
      <label style={styles.label}>
        <input type="radio" name="categoria" /> Brincos
      </label>
      <label style={styles.label}>
        <input type="radio" name="categoria" /> Anéis
      </label>
      <label style={styles.label}>
        <input type="radio" name="categoria" /> Pulseiras
      </label>

      <h3 style={styles.sectionTitle}>Preço</h3>
      <div style={styles.priceContainer}>
        <input type="number" placeholder="Mín." style={styles.inputNumber} />
        <input type="number" placeholder="Máx." style={styles.inputNumber} />
      </div>

      <h3 style={styles.sectionTitle}>Tipo de Brinco</h3>
      <select style={styles.select}>
        <option>Selecione</option>
        <option>Argola</option>
        <option>Ponto de Luz</option>
        <option>Cuff</option>
      </select>

      <h3 style={styles.sectionTitle}>Tipo de Colar</h3>
      <select style={styles.select}>
        <option>Selecione</option>
        <option>Delicado</option>
        <option>Choker</option>
        <option>Com Pingente</option>
      </select>

      <h3 style={styles.sectionTitle}>Tipo de Anel</h3>
      <select style={styles.select}>
        <option>Selecione</option>
        <option>Fino</option>
        <option>Solitaire</option>
        <option>Ajustável</option>
      </select>

      <h3 style={styles.sectionTitle}>Tamanho</h3>
      <select style={styles.select}>
        <option>Selecione</option>
        <option>Curto</option>
        <option>Médio</option>
        <option>Longo</option>
      </select>

      <h3 style={styles.sectionTitle}>Cor da Pedra</h3>
      <div style={styles.colorSwatchContainer}>
        {["#fff","#F9A8D4","#34D399","#EF4444","#3B82F6","#FBBF24"].map((cor) => (
          <span key={cor} style={{...styles.colorSwatch, backgroundColor: cor}} />
        ))}
      </div>

      <h3 style={styles.sectionTitle}>Material</h3>
      <select style={styles.select}>
        <option>Selecione</option>
        <option>Prata</option>
        <option>Ouro</option>
        <option>Folheado</option>
        <option>Aço</option>
      </select>

      <h3 style={styles.sectionTitle}>Tipo de Pulseira</h3>
      <select style={styles.select}>
        <option>Selecione</option>
        <option>Corrente</option>
        <option>Bracelete</option>
        <option>Miçanga</option>
      </select>
    </div>
  );
};

export default Filtro;
