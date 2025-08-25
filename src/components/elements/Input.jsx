import React from "react";
import { colors } from "../../styles/colors";

export default function Input({ placeholder, type = "text", styleExtra = {} }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      style={{
        border: `1px solid ${colors.primary}`,
        borderRadius: "0.3rem",
        padding: "0.5rem 1rem",
        outline: "none",
        width: "100%",
        boxSizing: "border-box",
        marginBottom: "1rem",
        ...styleExtra
      }}
    />
  );
}