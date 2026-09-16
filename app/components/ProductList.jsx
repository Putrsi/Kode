import React from 'react';
import { View, Text, FlatList } from 'react-native';

const products = [];
for (let i = 1; i <= 50; i++) {
  products.push({ id: i.toString(), name: 'Produk ' + i });
}

export default function App() {
  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={{ padding: 10, borderBottomWidth: 1 }}>
          <Text>{item.name}</Text>
        </View>
      )}
    />
  );
}