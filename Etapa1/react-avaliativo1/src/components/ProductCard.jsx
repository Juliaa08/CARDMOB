import React from 'react';

// Componente ProductCard
const ProductCard = ({ name, price, onDelete, onEdit, onAddToCart }) => {
    return (
        <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}>
            <p><strong>Nome do produto:</strong> {name}</p>
            <p><strong>Preço:</strong> R${price}</p>
            <button onClick={onEdit}>Editar</button>
            <button onClick={onDelete} style={{ marginLeft: "10px" }}>Deletar</button>
            <button
                onClick={() => {
                    alert(`Produto ${name} adicionado ao carrinho!`);
                    onAddToCart(name);
                }}
                style={{ marginLeft: "10px" }}
            >
                Adicionar ao carrinho
            </button>
        </div>
    );
};

export default ProductCard;
