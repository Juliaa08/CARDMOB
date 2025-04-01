import React, { useState } from "react";

// Componente Contato
const Contato = ({ nome, telefone, onDelete, onEdit }) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}>
      <p><strong>Nome:</strong> {nome}</p>
      <p><strong>Telefone:</strong> {telefone}</p>
      <button onClick={onEdit}>Editar</button>
      <button onClick={onDelete} style={{ marginLeft: "10px" }}>Excluir</button>
    </div>
  );
};

export default Contato; 