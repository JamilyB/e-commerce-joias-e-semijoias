import FormCadastro from "../components/structures/FormCadastro";

export default function CadastroPage() {
  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "2rem" }}>
      <h1 style={{ marginBottom: "1.5rem" }}>Cadastro</h1>
      <FormCadastro />
    </div>
  );
}