import { useState } from "react";
import Enderecos from "../../components/modules/Enderecos";
import Cartoes from "../../components/modules/Cartoes";
import DadosPessoais from "../../components/modules/DadosPessoais";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ModalItem({ tipo, item }) {
  const [open, setOpen] = useState(false);
  const isEdit = !!item;

  const btnLabel = isEdit ? "Editar" : "Adicionar novo";
  const modalBtnLabel = isEdit ? "Atualizar" : "Salvar";

  const btnClass = isEdit
    ? "btn btn-warning text-dark"
    : "btn btn-success";

  const modalBtnClass = isEdit
    ? "btn btn-warning text-dark"
    : "btn btn-success";

  const handleSave = () => {
    // Mostrar toast com mensagem adequada
    toast[isEdit ? "warning" : "success"](
      isEdit ? "Editado com sucesso!" : "Adicionado com sucesso!",
      {
        position: "top-right",
        autoClose: 1500,
      }
    );

    // Fechar modal após 1500ms
    setTimeout(() => setOpen(false), 1500);
  };

  return (
    <div>
      <button className={btnClass} onClick={() => setOpen(true)}>
        {btnLabel}
      </button>

      {open && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0,0,0,0.6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              background: "#fff",
              borderRadius: "1rem",
              width: "600px",
              maxHeight: "90vh",
              overflowY: "auto",
              padding: "2rem",
            }}
          >
            <button
              onClick={() => setOpen(false)}
              style={{
                float: "right",
                background: "transparent",
                border: "none",
                fontSize: "1.5rem",
              }}
            >
              ✖
            </button>

            {tipo === "endereco" ? (
              <Enderecos endereco={item} />
            ) : tipo === "cartao" ? (
              <Cartoes cartao={item} />
            ) : (
              <DadosPessoais dados={item} />
            )}

            <div style={{ marginTop: "1rem", textAlign: "right" }}>
              <button className={modalBtnClass} onClick={handleSave}>
                {modalBtnLabel}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
