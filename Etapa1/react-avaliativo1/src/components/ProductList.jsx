import React, { useState } from "react";
import ProductCard from "./ProductCard";
const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [newName, setNewName] = useState("");
    const [newPrice, setNewPrice] = useState("");
    const [editing, setEditing] = useState(null);

    const addProduct = () => {
        if (newName && newPrice) {
            setProducts([...products, { id: Date.now(), name: newName, price: newPrice }]);
            setNewName("");
            setNewPrice("");
        }
    };

    const deleteProduct = (id) => {
        setProducts(products.filter((product) => product.id !== id));
    };

    const startEditing = (id) => {
        const product = products.find((p) => p.id === id);
        if (product) {
            setEditing(id);
            setNewName(product.name);
            setNewPrice(product.price);
        }
    };

    const saveEditing = () => {
        setProducts(
            products.map((product) =>
                product.id === editing ? { ...product, name: newName, price: newPrice } : product
            )
        );
        setEditing(null);
        setNewName("");
        setNewPrice("");
    };

    const addToCart = (id) => {
        const product = products.find((p) => p.id === id);
        if (product) {
            console.log(`Product added to cart: ${product.name} - $${product.price}`);
        }
    };

    return (
        <div>
            <h1>Lista de Produtos</h1>
            <div>
                <input
                    type="text"
                    placeholder="Nome do Produto"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Preço"
                    value={newPrice}
                    onChange={(e) =>
                         setNewPrice(e.target.value)}
                />
                {editing ? (
                    <button onClick={saveEditing}>Salvar</button>
                ) : (
                    <button onClick={addProduct}>Adicionar</button>
                )}
            </div>
            <div>
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        name={product.name}
                        price={product.price}
                        onDelete={() => deleteProduct(product.id)}
                        onEdit={() => startEditing(product.id)}
                    />
                ))}
            </div>
        </div>
    );
};


export default ProductList;

