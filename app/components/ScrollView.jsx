import React from 'react';
import { View, Text, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView horizontal={true} style={{ height: 50 }}>
        <Text style={{ marginRight: 15 }}>Matematika</Text>
        <Text style={{ marginRight: 15 }}>Fisika</Text>
        <Text style={{ marginRight: 15 }}>Kimia</Text>
        <Text style={{ marginRight: 15 }}>Biologi</Text>
      </ScrollView>

      <ScrollView style={{ padding: 20 }}>
        <Text>Judul Artikelnya</Text>
        <Text>
          Ini adalah isi artikel yang panjang, bisa digulir ke bawah
          untuk membaca sampai selesai...
        </Text>
      </ScrollView>
    </View>
  );
}