import React, { useState } from "react";
import Contato from "./Contato";

const ListaContatos = () => {
  const [contatos, setContatos] = useState([]);
  const [novoNome, setNovoNome] = useState("");
  const [novoTelefone, setNovoTelefone] = useState("");
  const [editando, setEditando] = useState(null);

  const adicionarContato = () => {
    if (novoNome && novoTelefone) {
      setContatos([...contatos, { id: Date.now(), nome: novoNome, telefone: novoTelefone }]);
      setNovoNome("");
      setNovoTelefone("");
    }
  };

  const excluirContato = (id) => {
    setContatos(contatos.filter((contato) => contato.id !== id));
  };

  const iniciarEdicao = (id) => {
    const contato = contatos.find((c) => c.id === id);
    if (contato) {
      setEditando(id);
      setNovoNome(contato.nome);
      setNovoTelefone(contato.telefone);
    }
  };

  const salvarEdicao = () => {
    setContatos(
      contatos.map((contato) =>
        contato.id === editando ? { ...contato, nome: novoNome, telefone: novoTelefone } : contato
      )
    );
    setEditando(null);
    setNovoNome("");
    setNovoTelefone("");
  };

  return (
    <div>
      <h1>Lista de Contatos</h1>
      <div>
        <input
          type="text"
          placeholder="Nome"
          value={novoNome}
          onChange={(e) => setNovoNome(e.target.value)}
        />
        <input
          type="text"
          placeholder="Telefone"
          value={novoTelefone}
          onChange={(e) => setNovoTelefone(e.target.value)}
        />
        {editando ? (
          <button onClick={salvarEdicao}>Salvar</button>
        ) : (
          <button onClick={adicionarContato}>Adicionar</button>
        )}
      </div>
      <div>
        {contatos.map((contato) => (
          <Contato
            key={contato.id}
            nome={contato.nome}
            telefone={contato.telefone}
            onDelete={() => excluirContato(contato.id)}
            onEdit={() => iniciarEdicao(contato.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default ListaContatos;