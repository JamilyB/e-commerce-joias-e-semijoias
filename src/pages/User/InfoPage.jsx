import Sidebar from "../../components/structures/sideBar";
import { userData } from "../../data/userData";
import CardEndereco from "../../components/modules/CardEndereco";
import CardCartao from "../../components/modules/CardCartao";
import ModalItem from "./ModalItem";

export default function InfoPage() {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />

      <div style={{ flex: 1, padding: "2rem", marginLeft: "220px", marginBottom: "100px" }}>
        {/* Dados Pessoais */}
        <div style={{ marginBottom: "2rem", padding: "1rem", borderRadius: "1rem", background: "#fff" }}>
          <h2 style={{ marginBottom: "1rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            Dados Pessoais
            <ModalItem tipo="pessoal" item={userData.dadosPessoais} />
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem 2rem" }}>
            <p><strong>Email:</strong> {userData.dadosPessoais.email}</p>
            <p><strong>Nome:</strong> {userData.dadosPessoais.nome} {userData.dadosPessoais.sobrenome}</p>
            <p><strong>Gênero:</strong> {userData.dadosPessoais.genero}</p>
            <p><strong>Nascimento:</strong> {userData.dadosPessoais.nascimento}</p>
            <p><strong>CPF:</strong> {userData.dadosPessoais.cpf}</p>
            <p><strong>Telefone:</strong> {userData.dadosPessoais.telefone.tipo} ({userData.dadosPessoais.telefone.ddd}) {userData.dadosPessoais.telefone.numero}</p>
          </div>
        </div>

        {/* Endereços */}
        <div style={{ marginBottom: "2rem" }}>
          <h2 style={{ marginBottom: "1rem" }}>Endereços</h2>
          <div style={{ display: "grid", gap: "1rem" }}>
            {userData.enderecos.map((endereco, i) => <CardEndereco key={i} endereco={endereco} />)}
            <div style={{ padding: "1rem", background: "#fff", borderRadius: "1rem", textAlign: "center" }}>
              <ModalItem tipo="endereco" item={null} />
            </div>
          </div>
        </div>

        {/* Cartões */}
        <div style={{ marginBottom: "2rem" }}>
          <h2 style={{ marginBottom: "1rem" }}>Cartões</h2>
          <div style={{ display: "grid", gap: "1rem" }}>
            {userData.cartoes.map((cartao, i) => <CardCartao key={i} cartao={cartao} />)}
            <div style={{ padding: "1rem", background: "#fff", borderRadius: "1rem", textAlign: "center" }}>
              <ModalItem tipo="cartao" item={null} />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
