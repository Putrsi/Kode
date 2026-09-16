import React from 'react';
import { View, Text, SectionList } from 'react-native';

const DATA = [
  {
    title: 'Mata Pelajaran Kejuruan',
    data: [
      { name: 'Pemrograman', score: 90 },
      { name: 'Basis Data', score: 85 },
    ],
  },
  {
    title: 'Mata Pelajaran Umum',
    data: [
      { name: 'Matematika', score: 80 },
      { name: 'Bahasa Indonesia', score: 88 },
    ],
  },
];

export default function App() {
  return (
    <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item.name + index}
      renderItem={({ item }) => (
        <Text style={{ padding: 8 }}>{item.name} - {item.score}</Text>
      )}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={{ fontWeight: 'bold', backgroundColor: '#eee', padding: 8 }}>{title}</Text>
      )}
    />
  );
}