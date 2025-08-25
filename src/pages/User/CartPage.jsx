import { colors } from "../styles/colors";
import Sidebar from "../components/structures/sideBar";
export default function CartPage() {
  const cartItems = [
    {
      id: 1,
      name: "511™ Slim Fit Jeans",
      color: "Dark Blue",
      size: "32",
      amount: 1,
      price: 119.9,
      image: "https://dummyimage.com/60x80/ccc/fff&text=Jeans",
    },
    {
      id: 2,
      name: "Long Sleeve Graphic Tee",
      color: "Grey",
      size: "32",
      amount: 1,
      price: 49.9,
      image: "https://dummyimage.com/60x80/ccc/fff&text=Tee",
    },
    {
      id: 3,
      name: "Levi’s Western Shirt",
      color: "Camo Green",
      size: "32",
      amount: 1,
      price: 79.9,
      image: "https://dummyimage.com/60x80/ccc/fff&text=Shirt",
    },
  ];

  const total = cartItems.reduce((acc, item) => acc + item.price * item.amount, 0);

  return (
 <div style={{ display: "flex", minHeight: "100vh" }}>
    <Sidebar />
    <div style={{ display: "flex", padding: "40px", fontFamily: "sans-serif", backgroundColor: colors.background }}>
      {/* Lista de produtos */}
      <div style={{ flex: 3, marginRight: "30px" }}>
        <h2 style={{ marginBottom: "20px", color: colors.primary }}>Shopping Cart Items</h2>
        {cartItems.map((item) => (
          <div
            key={item.id}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderBottom: "1px solid #eee",
              padding: "15px 0",
            }}
          >
            {/* Imagem */}
            <img src={item.image} alt={item.name} style={{ width: "60px", borderRadius: "6px" }} />

            {/* Infos */}
            <div style={{ flex: 2, marginLeft: "20px" }}>
              <p style={{ margin: "0", fontWeight: "bold" }}>{item.name}</p>
              <small>Color: {item.color} | Size: {item.size}</small>
            </div>

            {/* Quantidade */}
            <input
              type="number"
              value={item.amount}
              min="1"
              style={{
                width: "60px",
                padding: "5px",
                textAlign: "center",
                marginRight: "15px",
                border: "1px solid #ccc",
                borderRadius: "6px",
              }}
              readOnly
            />

            {/* Preço */}
            <p style={{ fontWeight: "bold" }}>€{item.price.toFixed(2)}</p>
          </div>
        ))}
      </div>

      {/* Resumo */}
      <div
        style={{
          flex: 1,
          padding: "20px",
          backgroundColor: "#f9f9f9",
          borderRadius: "12px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        }}
      >
        <h3 style={{ marginBottom: "15px" }}>Summary</h3>
        <p>Total products: <strong>€{total.toFixed(2)}</strong></p>
        <p>Shipping: <strong>Free</strong></p>
        <input
          type="text"
          placeholder="Add promocode"
          style={{
            width: "100%",
            padding: "10px",
            margin: "10px 0",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
        />
        <hr />
        <h3 style={{ margin: "15px 0" }}>Total: €{total.toFixed(2)}</h3>
        <button
          style={{
            width: "100%",
            padding: "12px",
            backgroundColor: colors.primary,
            color: "#fff",
            border: "none",
            borderRadius: "10px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Checkout
        </button>
      </div>
    </div>
   </div>
  );
}
