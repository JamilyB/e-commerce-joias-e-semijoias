import Sidebar from "../components/structures/sideBar";
import ModalPessoais from "./ModalPessoais";
import ModalEnderecos from "./ModalEnderecos";
import ModalCartoes from "./ModalCartoes";
import { userData } from "../data/userData";

export default function InfoPage() {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />

      <div style={{ flex: 1, padding: "2rem" }}>
        {/* Card - Dados Pessoais */}
        <div style={{ background: "#fff", borderRadius: "1rem", padding: "1.5rem", marginBottom: "1.5rem", boxShadow: "0 2px 6px rgba(0,0,0,0.1)" }}>
          <h2>Dados Pessoais</h2>
          <p><strong>Email:</strong> {userData.dadosPessoais.email}</p>
          <p><strong>Nome:</strong> {userData.dadosPessoais.nome} {userData.dadosPessoais.sobrenome}</p>
          <p><strong>Gênero:</strong> {userData.dadosPessoais.genero}</p>
          <p><strong>Nascimento:</strong> {userData.dadosPessoais.nascimento}</p>
          <p><strong>CPF:</strong> {userData.dadosPessoais.cpf}</p>
          <p><strong>Telefone:</strong> {userData.dadosPessoais.telefone.tipo} ({userData.dadosPessoais.telefone.ddd}) {userData.dadosPessoais.telefone.numero}</p>
          <ModalPessoais />
        </div>

        {/* Card - Endereços */}
        {userData.enderecos.map((endereco, i) => (
          <div key={i} style={{ background: "#fff", borderRadius: "1rem", padding: "1.5rem", marginBottom: "1.5rem", boxShadow: "0 2px 6px rgba(0,0,0,0.1)" }}>
            <h2>Endereço</h2>
            <p><strong>Tipo:</strong> {endereco.tipo}</p>
            <p><strong>Logradouro:</strong> {endereco.logradouro}, {endereco.numero}</p>
            <p><strong>Bairro:</strong> {endereco.bairro}</p>
            <p><strong>CEP:</strong> {endereco.cep}</p>
            <p><strong>Cidade:</strong> {endereco.cidade} - {endereco.estado}</p>
            <p><strong>País:</strong> {endereco.pais}</p>
            <p><strong>Obs:</strong> {endereco.observacao}</p>
            <ModalEnderecos />
          </div>
        ))}

        {/* Card - Cartões */}
        {userData.cartoes.map((cartao, i) => (
          <div key={i} style={{ background: "#fff", borderRadius: "1rem", padding: "1.5rem", marginBottom: "1.5rem", boxShadow: "0 2px 6px rgba(0,0,0,0.1)", maxWidth: "400px" }}>
            <h2>Cartão</h2>
            <p><strong>Número:</strong> {cartao.numero}</p>
            <p><strong>Nome:</strong> {cartao.nomeImpresso}</p>
            <p><strong>Bandeira:</strong> {cartao.bandeira}</p>
            <p><strong>Validade:</strong> {cartao.validade}</p>

            <ModalCartoes cartao={cartao} />
          </div>
        ))}

      </div>
    </div>
  );
}