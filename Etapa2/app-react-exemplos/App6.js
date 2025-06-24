import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, Alert } from 'react-native';

export default function App() {
  const [items, setItems] = useState([]);
  const [nome, setNome] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [editItemId, setEditItemId] = useState(null);

  const BASE_URL = 'http://10.81.205.2:3000/compras'; // novo


  // Adicionar item
  const addItem = () => {
    if (!nome || !quantidade) {
      Alert.alert('Erro', 'Preencha todos os campos!');
      return;
    }

    if (editItemId) {
      // Atualizar item existente
      setItems((prevItems) =>
        prevItems.map((item) =>
          item.id === editItemId ? { ...item, nome, quantidade } : item
        )
      );
      setEditItemId(null);
    } else {
      // Adicionar novo item
      const newItem = { id: Date.now().toString(), nome, quantidade };
      setItems((prevItems) => [...prevItems, newItem]);
    }

    setNome('');
    setQuantidade('');
  };

  // Editar item
  const editItem = (id) => {
    const itemToEdit = items.find((item) => item.id === id);
    if (itemToEdit) {
      setNome(itemToEdit.nome);
      setQuantidade(itemToEdit.quantidade);
      setEditItemId(id);
    }
  };

  // Deletar item
  const deleteItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>{item.nome} - {item.quantidade}</Text>
      <Button title="Editar" onPress={() => editItem(item.id)} />
      <Button title="Deletar" onPress={() => deleteItem(item.id)} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Compras</Text>
      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={setNome}
        placeholder="Nome do item"
      />
      <TextInput
        style={styles.input}
        value={quantidade}
        onChangeText={setQuantidade}
        placeholder="Quantidade"
        keyboardType="numeric"
      />
      <Button title={editItemId ? "Atualizar Item" : "Adicionar Item"} onPress={addItem} />
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  list: {
    marginTop: 20,
  },
});