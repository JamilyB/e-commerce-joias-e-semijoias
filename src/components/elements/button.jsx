import { colors } from "../../styles/colors";

export default function Button({ children, onClick }) {
  return (
     <button
          onClick={onClick}
          className="btn btn-primary btn-lg"
          style={{
            backgroundColor: colors.primary,
            color: colors.text.secondary,
            border: "none",
          }}
        >
          {children}
        </button>
  );
}