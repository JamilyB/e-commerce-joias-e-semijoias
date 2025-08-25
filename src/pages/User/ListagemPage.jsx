import ProductCard from "../../components/modules/ProductCard";
import { productData } from "../../data/productData";
import Header from "../../components/modules/Header";
import Filtro from "../../components/modules/Filtro";
import React from "react";

export default function ListagemPage() {
  const handleAddToCart = (product) => {
    console.log("Adicionado ao carrinho:", product);
  };

  const handleFavorite = (product) => {
    console.log("Favoritado:", product);
  };

  return (
    <div>
      {/* Header fixo no topo */}


      <div
        style={{
          display: "flex", // Adicionado para usar Flexbox
          gap: "20px", // Espaçamento entre o filtro e os produtos
          padding: "20px",
        }}
      >
        {/* Componente de filtro no lado esquerdo */}
        <Filtro />

        {/* Contêiner dos cartões de produto, ao lado direito */}
        <div
          style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
              rowGap: "10px", // Espaçamento vertical entre as linhas
              columnGap: "0.5px", // Espaçamento horizontal entre as colunas
              flex: 1,
            }}
        >
          {productData.map((p) => (
            <ProductCard
              key={p.id}
              name={p.name}
              price={p.price}
              image={p.image}
              onAddToCart={() => handleAddToCart(p)}
              onFavorite={() => handleFavorite(p)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}