import React from "react";
import Input from "../elements/Input";
import Button from "../elements/button";
import { colors } from "../../styles/colors";

export default function FormProduto() {
  return (
     <div
       style={{
         width: "1000px",
         padding: "1rem",

         borderRadius: "10px",

         backgroundColor: "#fff",
         position: "relative",
         marginTop: "2rem",
       }}
     >
     <h2>Adicionar Produto</h2>
      {/* Fotos */}
      <div style={{ display: "flex", gap: "1rem" }}>
        <div style={{ flex: 1 }}>
          <label style={{ fontWeight: "600", marginBottom: "0.5rem", display: "block" }}>Fotos</label>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "0.5rem",
            }}
          >
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                style={{
                  border: "1px dashed #ccc",
                  borderRadius: "8px",
                  width: "100%",
                  height: "120px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                📷
              </div>
            ))}
          </div>
          <p style={{ fontSize: "0.8rem", marginTop: "0.5rem", color: "#555" }}>
            Anúncios com 4 ou mais fotos dobram suas chances de venda.
          </p>
        </div>

        {/* Campos principais */}
        <div style={{ flex: 2, display: "flex", flexDirection: "column", gap: "1rem" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label style={{ marginBottom: "0.3rem", fontWeight: "500" }}>Título</label>
            <Input placeholder='ex: "Vestido farm sensação"' />
          </div>

          <div style={{ display: "flex", gap: "1rem" }}>
            <div style={{ flex: 2, display: "flex", flexDirection: "column" }}>
              <label style={{ marginBottom: "0.3rem", fontWeight: "500" }}>Marca</label>
              <Input placeholder="Qual a marca do produto?" />
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <input type="checkbox" id="semMarca" />
              <label htmlFor="semMarca" style={{ marginLeft: "0.5rem" }}>
                Produto sem marca
              </label>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <label style={{ marginBottom: "0.3rem", fontWeight: "500" }}>Descrição</label>
            <textarea
              rows={4}
              maxLength={350}
              placeholder="Descreva seu produto..."
              style={{
                border: "1px solid #ccc",
                borderRadius: "6px",
                padding: "0.5rem",
                resize: "none",
              }}
            />
            <span style={{ fontSize: "0.75rem", textAlign: "right", color: "#666" }}>0 de 350</span>
          </div>

          {/* Condição */}
          <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
            <label>
              <input type="radio" name="condicao" defaultChecked /> Produto usado
            </label>
            <label>
              <input type="radio" name="condicao" /> Produto novo
            </label>
          </div>
        </div>
      </div>

      <hr style={{ margin: "1.5rem 0" }} />

      {/* Categorias */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1.5rem" }}>
        <div>
          <label>Departamento</label>
          <select style={{ width: "100%", padding: "0.5rem", borderRadius: "6px", border: "1px solid #ccc" }}>
            <option>Selecione</option>
          </select>
        </div>
        <div>
          <label>Categoria</label>
          <select style={{ width: "100%", padding: "0.5rem", borderRadius: "6px", border: "1px solid #ccc" }}>
            <option>Selecione</option>
          </select>
        </div>
        <div>
          <label>Subcategoria</label>
          <select style={{ width: "100%", padding: "0.5rem", borderRadius: "6px", border: "1px solid #ccc" }}>
            <option>Selecione</option>
          </select>
        </div>
        <div>
          <label>Característica</label>
          <select style={{ width: "100%", padding: "0.5rem", borderRadius: "6px", border: "1px solid #ccc" }}>
            <option>Selecione</option>
          </select>
        </div>
      </div>

      {/* Preço */}
      <div style={{ marginBottom: "4rem" }}>
        <label>Preço</label>
        <Input placeholder="R$" type="number" />
      </div>

      {/* Botão Publicar fixo */}
      <div
        style={{
          position: "sticky",
          bottom: 0,
          backgroundColor: "#fff",
          padding: "1rem 0",
          textAlign: "right",
          borderTop: "1px solid #ddd",
        }}
      >
        <Button onClick={() => console.log("Produto publicado!")}>Publicar</Button>
      </div>
    </div>
  );
}
