import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const options = ['Light Mode', 'Dark Mode', 'System Default'];

export default function App() {
  const [selected, setSelected] = useState(0);

  return (
    <View style={{ padding: 20 }}>
      {options.map((opt, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => setSelected(index)}
          style={{
            padding: 12,
            marginBottom: 8,
            backgroundColor: selected === index ? 'blue' : '#eee',
          }}
        >
          <Text style={{ color: selected === index ? 'white' : 'black' }}>{opt}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}