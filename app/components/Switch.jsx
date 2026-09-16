import React, { useState } from 'react';
import { View, Text, Switch, Button } from 'react-native';

export default function App() {
  const [agreed, setAgreed] = useState(false);

  return (
    <View style={{ padding: 20 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
        <Switch value={agreed} onValueChange={setAgreed} />
        <Text style={{ marginLeft: 10 }}>Saya setuju dengan Syarat & Ketentuan</Text>
      </View>

      <Button title="Submit" disabled={!agreed} onPress={() => alert('Terkirim')} />
    </View>
  );
}